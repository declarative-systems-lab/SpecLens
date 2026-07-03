import { highlightTranslationText } from './highlightTranslation';

type Locale = 'en' | 'zh';

export interface SubspecMaps {
  configSubspecData: Record<string, string>;
  lineSubspecData: Record<string, string>;
  configSubspecTransData: Record<string, string>;
  lineSubspecTransData: Record<string, string>;
  lineSubspecNames: Set<string>;
}

function parseSubspecFile(
  content: string,
  marker: 'Config Variable:' | 'Line Group:',
): Record<string, string> {
  const data: Record<string, string> = {};
  let current: string | null = null;
  let latest: string | null = null;

  for (const line of content.split('\n')) {
    if (line.startsWith(marker)) {
      if (current && latest !== null) {
        data[current] = latest;
      }
      current = line.split(`${marker} `)[1]?.trim() ?? null;
      latest = null;
    } else if (line.trim().startsWith('1.') && current) {
      latest = line.trim().slice(2).trim();
    }
  }

  if (current && latest !== null) {
    data[current] = latest;
  }

  return data;
}

function applyTranslationHighlights(data: Record<string, string>): Record<string, string> {
  const highlighted: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    highlighted[key] = highlightTranslationText(value);
  }
  return highlighted;
}

export function buildSubspecMaps(
  configSubspecContent: string,
  lineSubspecContent: string,
  configSubspecTransContent: string,
  lineSubspecTransContent: string,
): SubspecMaps {
  const configSubspecData = parseSubspecFile(configSubspecContent, 'Config Variable:');
  const lineSubspecData = parseSubspecFile(lineSubspecContent, 'Line Group:');
  const configSubspecTransData = applyTranslationHighlights(
    parseSubspecFile(configSubspecTransContent, 'Config Variable:'),
  );
  const lineSubspecTransData = applyTranslationHighlights(
    parseSubspecFile(lineSubspecTransContent, 'Line Group:'),
  );
  const lineSubspecNames = new Set<string>();

  for (const line of lineSubspecContent.split('\n')) {
    if (line.startsWith('Line Group:')) {
      const name = line.split('Line Group: ')[1]?.trim();
      if (name) lineSubspecNames.add(name);
    }
  }

  return {
    configSubspecData,
    lineSubspecData,
    configSubspecTransData,
    lineSubspecTransData,
    lineSubspecNames,
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttribute(html: string): string {
  return html.replace(/"/g, '&quot;');
}

function processDisplaySubspec(subspecText: string, subspecName: string, maps: SubspecMaps): string {
  if (subspecName in maps.configSubspecData) {
    return subspecText.replace(/Config_[a-zA-Z0-9_]+/g, (full) => {
      if (full.endsWith('__ip')) return 'VAR_IP';
      if (full.endsWith('__mask')) return 'VAR_MASK';
      return 'VAR';
    });
  }

  return subspecText.replace(/Config_[a-zA-Z0-9_]+/g, (full) => {
    const parts = full.split('_');
    return parts.length > 1 ? `VAR_${parts[parts.length - 1].toUpperCase()}` : 'VAR';
  });
}

/** Matches userstudy generate_test_html.py client-side tooltip format. */
export function formatSubspecForDisplay(
  subspecText: string,
  subspecName: string,
  maps: SubspecMaps,
  isMissing: boolean,
  locale: Locale,
): string {
  const isZh = locale === 'zh';

  if (isMissing) {
    const missingText = isZh ? '没有找到子规约' : 'No subspec found';
    return `<div class="tooltip-translated">${missingText}</div><div class="tooltip-separator">─────────────────────</div><div class="tooltip-formula">none</div>`;
  }

  const displaySubspec = processDisplaySubspec(subspecText, subspecName, maps);

  let subspecTrans: string | undefined;
  if (subspecName in maps.configSubspecData && maps.configSubspecTransData[subspecName]) {
    subspecTrans = maps.configSubspecTransData[subspecName];
  } else if (subspecName in maps.lineSubspecData && maps.lineSubspecTransData[subspecName]) {
    subspecTrans = maps.lineSubspecTransData[subspecName];
  }

  if (subspecTrans) {
    return `<div class="tooltip-translated">${subspecTrans}</div><div class="tooltip-separator">─────────────────────</div><div class="tooltip-formula">${escapeHtml(displaySubspec)}</div>`;
  }

  return `<div class="tooltip-formula">${escapeHtml(displaySubspec)}</div>`;
}

function processConfigLine(line: string, maps: SubspecMaps, locale: Locale): string {
  const numbered = line.match(/^(\s*)(\d+)(\s+)(.*)$/);
  const body = numbered ? numbered[4] : line;
  const prefix = numbered
    ? `${numbered[1]}<span class="config-line-number">${numbered[2]}</span>${numbered[3]}`
    : '';

  const subspecData = { ...maps.configSubspecData, ...maps.lineSubspecData };
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  const processedBody = body.replace(pattern, (_match, fieldName: string, subspecName: string) => {
    const isMissing = !(subspecName in subspecData);
    const subspec = isMissing ? 'empty' : subspecData[subspecName] ?? 'empty';
    const formatted = formatSubspecForDisplay(subspec, subspecName, maps, isMissing, locale);
    const escapedTooltip = escapeAttribute(formatted);

    let cssClass = 'config-field';
    if (maps.lineSubspecNames.has(subspecName)) cssClass += ' line-level';
    if (isMissing) cssClass += ' missing-subspec';
    else if (subspec === 'empty') cssClass += ' empty-subspec';

    return `<span class="${cssClass}" data-subspec="${escapedTooltip}" data-subspec-name="${subspecName}">${escapeHtml(fieldName)}</span>`;
  });

  return prefix + processedBody;
}

export function parseConfigWithSubspecs(
  configContent: string,
  maps: SubspecMaps,
  locale: Locale,
): string[] {
  return configContent.split('\n').map((line) => {
    if (line.includes('[') && line.includes('](')) {
      return processConfigLine(line, maps, locale);
    }
    const numbered = line.match(/^(\s*)(\d+)(\s+)(.*)$/);
    if (numbered) {
      return `${numbered[1]}<span class="config-line-number">${numbered[2]}</span>${numbered[3]}${escapeHtml(numbered[4])}`;
    }
    return escapeHtml(line);
  });
}
