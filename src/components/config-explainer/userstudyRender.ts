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
  takeLastTranslation = false,
): Record<string, string> {
  const data: Record<string, string> = {};
  let current: string | null = null;
  const translations: string[] = [];

  for (const line of content.split('\n')) {
    if (line.startsWith(marker)) {
      if (current && translations.length > 0) {
        data[current] = takeLastTranslation
          ? translations[translations.length - 1]
          : translations[0];
      }
      current = line.split(`${marker} `)[1]?.trim() ?? null;
      translations.length = 0;
    } else if (line.trim().startsWith('1.') && current) {
      translations.push(line.trim().slice(2).trim());
    }
  }

  if (current && translations.length > 0) {
    data[current] = takeLastTranslation
      ? translations[translations.length - 1]
      : translations[0];
  }

  return data;
}

export function buildSubspecMaps(
  configSubspecContent: string,
  lineSubspecContent: string,
  configSubspecTransContent: string,
  lineSubspecTransContent: string,
  takeLastTranslation = false,
): SubspecMaps {
  const configSubspecData = parseSubspecFile(configSubspecContent, 'Config Variable:');
  const lineSubspecData = parseSubspecFile(lineSubspecContent, 'Line Group:');
  const configSubspecTransData = parseSubspecFile(
    configSubspecTransContent,
    'Config Variable:',
    takeLastTranslation,
  );
  const lineSubspecTransData = parseSubspecFile(
    lineSubspecTransContent,
    'Line Group:',
    takeLastTranslation,
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

export function formatSubspecForDisplay(
  subspecText: string,
  subspecName: string,
  maps: SubspecMaps,
  isMissing: boolean,
  locale: Locale,
): string {
  const isZh = locale === 'zh';
  const labels = isZh
    ? {
        missing: '没有找到子规约<br>─────────────────────<br>none',
        emptyHeader: '配置字段说明',
        emptyBody: '无特殊约束条件',
        fieldType: 'Field-Level',
        lineType: 'Line-Level',
        fieldLabel: '配置字段',
        enabled: '✅ 启用此配置项',
        disabled: '❌ 禁用此配置项',
        ip: '🌐 IP地址/网络前缀配置',
        ipDetail: '指定特定的IP地址或网络范围',
        numeric: '🔢 数值配置约束',
        numericDetail: '设置特定的数值参数',
        range: '📏 范围约束条件',
        rangeDetail: '设置数值范围限制',
        exclude: '🚫 排除条件',
        excludeDetail: '排除特定的配置项',
        general: '⚙️ 配置约束条件',
        generalDetail: '应用特定的配置规则',
      }
    : {
        missing: 'No subspec found<br>─────────────────────<br>none',
        emptyHeader: 'Field description',
        emptyBody: 'No special constraints',
        fieldType: 'Field-Level',
        lineType: 'Line-Level',
        fieldLabel: 'field',
        enabled: '✅ This configuration item is enabled',
        disabled: '❌ This configuration item is disabled',
        ip: '🌐 IP address / prefix configuration',
        ipDetail: 'Specifies a particular IP address or network range',
        numeric: '🔢 Numeric constraint',
        numericDetail: 'Sets a specific numeric parameter',
        range: '📏 Range constraint',
        rangeDetail: 'Sets numeric range limits',
        exclude: '🚫 Exclusion condition',
        excludeDetail: 'Excludes a specific configuration item',
        general: '⚙️ Configuration constraint',
        generalDetail: 'Applies a specific configuration rule',
      };

  if (isMissing) return labels.missing;

  if (subspecText === 'No subspec found' || subspecText === 'empty') {
    return `<div class="tooltip-header">${labels.emptyHeader}</div><div class="tooltip-simple">${labels.emptyBody}</div>`;
  }

  let processed = subspecText;
  let fieldName = 'VAR';
  let subspecType = labels.fieldType;

  if (subspecName in maps.configSubspecData) {
    processed = processed.replace(/Config_[a-zA-Z0-9_]+/g, (full) => {
      if (full.endsWith('__ip')) return 'VAR_IP';
      if (full.endsWith('__mask')) return 'VAR_MASK';
      return 'VAR';
    });
    subspecType = labels.fieldType;
  } else {
    processed = processed.replace(/Config_[a-zA-Z0-9_]+/g, (full) => {
      const parts = full.split('_');
      return parts.length > 1 ? `VAR_${parts[parts.length - 1].toUpperCase()}` : 'VAR';
    });
    fieldName = 'VAR_XXX';
    subspecType = labels.lineType;
  }

  let subspecTrans: string | undefined;
  if (subspecName in maps.configSubspecData && maps.configSubspecTransData[subspecName]) {
    subspecTrans = maps.configSubspecTransData[subspecName];
  } else if (subspecName in maps.lineSubspecData && maps.lineSubspecTransData[subspecName]) {
    subspecTrans = maps.lineSubspecTransData[subspecName];
  }

  const header = `<div class="tooltip-header">${subspecType} ${labels.fieldLabel}: ${fieldName}</div>`;
  const transBlock = subspecTrans
    ? `<div class="tooltip-translated">${subspecTrans}</div><div class="tooltip-separator">─────────────────────</div>`
    : '';
  const formulaBlock = `<div class="tooltip-formula">${escapeHtml(processed)}</div>`;

  const lower = processed.toLowerCase();
  if (lower.includes('true') && !lower.includes('not')) {
    return `${header}<div class="tooltip-simple">${labels.enabled}</div>${transBlock}${formulaBlock}`;
  }
  if (lower.includes('false')) {
    return `${header}<div class="tooltip-simple">${labels.disabled}</div>${transBlock}${formulaBlock}`;
  }
  if (processed.includes('=') && processed.includes('#')) {
    const simple = processed.includes('extract') ? labels.ip : labels.numeric;
    const detail = processed.includes('extract') ? labels.ipDetail : labels.numericDetail;
    return `${header}<div class="tooltip-simple">${simple}</div><div class="tooltip-detail">${detail}</div>${transBlock}${formulaBlock}`;
  }
  if (processed.includes('>=') || processed.includes('<=')) {
    return `${header}<div class="tooltip-simple">${labels.range}</div><div class="tooltip-detail">${labels.rangeDetail}</div>${transBlock}${formulaBlock}`;
  }
  if (lower.includes('not')) {
    return `${header}<div class="tooltip-simple">${labels.exclude}</div><div class="tooltip-detail">${labels.excludeDetail}</div>${transBlock}${formulaBlock}`;
  }

  return `${header}<div class="tooltip-simple">${labels.general}</div><div class="tooltip-detail">${labels.generalDetail}</div>${transBlock}${formulaBlock}`;
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
    const isEmpty =
      subspec === 'empty' ||
      /irrelevant\s*\/\s*redundant/i.test(subspec) ||
      subspec.includes('无限制');
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
