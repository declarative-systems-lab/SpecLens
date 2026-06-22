export type SubspecKind = 'field' | 'line' | 'empty' | 'missing' | 'plain';

export interface ConfigToken {
  text: string;
  id?: string;
  kind: SubspecKind;
}

export interface ConfigLine {
  lineNumber: number;
  raw: string;
  tokens: ConfigToken[];
}

export interface SubspecInfo {
  id: string;
  kind: 'field' | 'line';
  raw: string;
  translated: string;
  isEmpty: boolean;
  isMissing: boolean;
}

export interface ConfigExample {
  router: string;
  specificationHtml: string;
  specificationHtmlZh: string;
  specificationPlain: string;
  configContent: string;
  fieldSubspecs: string;
  fieldSubspecsTrans: string;
  fieldSubspecsTransZh: string;
  lineSubspecs: string;
  lineSubspecsTrans: string;
  lineSubspecsTransZh: string;
}

export interface RouterConfig {
  router: string;
  configContent: string;
}

export interface MultiRouterExample {
  topologyImage: string;
  specificationHtml: string;
  specificationPlain: string;
  routers: RouterConfig[];
  fieldSubspecs: string;
  fieldSubspecsTrans: string;
  lineSubspecs: string;
  lineSubspecsTrans: string;
}

export interface ParsedConfig {
  lines: ConfigLine[];
  subspecs: Record<string, SubspecInfo>;
}
