import type { ConfigExample, ConfigLine, ConfigToken, ParsedConfig, SubspecInfo, SubspecKind } from './types';

const FIELD_MARKER = 'Config Variable:';
const LINE_MARKER = 'Line Group:';

function isEmptySubspec(value: string): boolean {
  const v = value.trim().toLowerCase();
  return v === 'empty' || v.includes('irrelevant / redundant') || v.includes('unrestricted');
}

function parseSubspecBlock(content: string, kind: 'field' | 'line'): Record<string, { raw: string; translated?: string }> {
  const rawMap: Record<string, string> = {};
  const transMap: Record<string, string> = {};
  const marker = kind === 'field' ? FIELD_MARKER : LINE_MARKER;
  const lines = content.split('\n');
  let currentId: string | null = null;
  let pass: 'raw' | 'trans' = 'raw';

  for (const line of lines) {
    if (line.startsWith(marker)) {
      currentId = line.split(`${marker} `)[1]?.trim() ?? null;
      pass = 'raw';
      continue;
    }
    if (!currentId) continue;
    if (line.trim().startsWith('1.')) {
      const value = line.trim().slice(2).trim();
      if (pass === 'raw') {
        rawMap[currentId] = value;
        pass = 'trans';
      } else {
        transMap[currentId] = value;
      }
    }
  }

  const result: Record<string, { raw: string; translated?: string }> = {};
  for (const id of new Set([...Object.keys(rawMap), ...Object.keys(transMap)])) {
    result[id] = { raw: rawMap[id] ?? '', translated: transMap[id] };
  }
  return result;
}

function classifyToken(id: string, lineGroups: Set<string>, subspecs: Record<string, SubspecInfo>): SubspecKind {
  const info = subspecs[id];
  if (!info) {
    if (lineGroups.has(id)) return 'missing';
    return 'plain';
  }
  if (info.isMissing) return 'missing';
  if (info.isEmpty) return 'empty';
  return info.kind;
}

function buildSubspecMap(example: ConfigExample): Record<string, SubspecInfo> {
  const fieldRaw = parseSubspecBlock(example.fieldSubspecs, 'field');
  const fieldTrans = parseSubspecBlock(example.fieldSubspecsTrans, 'field');
  const lineRaw = parseSubspecBlock(example.lineSubspecs, 'line');
  const lineTrans = parseSubspecBlock(example.lineSubspecsTrans, 'line');
  const map: Record<string, SubspecInfo> = {};

  for (const [id, data] of Object.entries(fieldRaw)) {
    const translated = fieldTrans[id]?.translated ?? fieldTrans[id]?.raw ?? '';
    const isEmpty = isEmptySubspec(data.raw) || isEmptySubspec(translated);
    map[id] = {
      id,
      kind: 'field',
      raw: data.raw,
      translated,
      isEmpty,
      isMissing: false,
    };
  }

  for (const [id, data] of Object.entries(lineRaw)) {
    const translated = lineTrans[id]?.translated ?? lineTrans[id]?.raw ?? '';
    const isEmpty = isEmptySubspec(data.raw) || isEmptySubspec(translated);
    map[id] = {
      id,
      kind: 'line',
      raw: data.raw,
      translated,
      isEmpty,
      isMissing: false,
    };
  }

  return map;
}

function parseLineTokens(line: string, lineGroups: Set<string>, subspecs: Record<string, SubspecInfo>): ConfigToken[] {
  const tokens: ConfigToken[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), kind: 'plain' });
    }
    const id = match[2];
    tokens.push({
      text: match[1],
      id,
      kind: classifyToken(id, lineGroups, subspecs),
    });
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), kind: 'plain' });
  }

  if (tokens.length === 0) {
    tokens.push({ text: line, kind: 'plain' });
  }

  return tokens;
}

export function parseConfigExample(example: ConfigExample): ParsedConfig {
  const subspecs = buildSubspecMap(example);
  const lineGroups = new Set(
    Object.values(subspecs)
      .filter((s) => s.kind === 'line')
      .map((s) => s.id),
  );

  const lines: ConfigLine[] = example.configContent.split('\n').map((raw, index) => {
    const content = raw.replace(/^\s*\d+\s/, '');
    return {
      lineNumber: index + 1,
      raw: content,
      tokens: parseLineTokens(content, lineGroups, subspecs),
    };
  });

  return { lines, subspecs };
}

export function tokenClass(kind: SubspecKind, active: boolean): string {
  const base = 'rounded px-0.5 transition-colors cursor-pointer underline-offset-2';
  if (active) return `${base} bg-ink-500 text-white`;
  switch (kind) {
    case 'field':
      return `${base} bg-spec text-ink-900 hover:bg-[#9ecff5]`;
    case 'line':
      return `${base} bg-spec-line text-ink-900 hover:bg-[#d4a8de]`;
    case 'empty':
      return `${base} bg-spec-muted text-ink-600 hover:bg-ink-100`;
    case 'missing':
      return `${base} bg-yellow-200/80 text-ink-800 hover:bg-yellow-300/80`;
    default:
      return `${base} text-ink-800 hover:bg-ink-100`;
  }
}
