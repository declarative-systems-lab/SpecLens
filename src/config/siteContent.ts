export const siteMeta = {
  name: 'NetSubSpec',
  tagline: 'Understand why your network configuration is correct.',
  description:
    'NetSubSpec is an open-source network configuration explanation tool. It derives localized, sound constraints that explain how individual routers, configuration lines, and fields preserve verified network behavior.',
  corePaper: {
    title: 'Explainable Network Verification via Localized Subspecification',
    venue: 'ACM SIGCOMM 2026',
    authors: null as string[] | null,
  },
} as const;

export const navItems = [
  { label: 'Why NetSubSpec', href: '/#why' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Demos', href: '/#demos' },
  { label: 'Research', href: '/#research' },
  { label: 'GitHub', href: '#', disabled: true },
] as const;

export const contact = {
  email: 'hxchen@shanghaitech.edu.cn',
  affiliation: 'ShanghaiTech University',
} as const;

export const userStudyMetrics = {
  participants: 23,
  operators: 15,
  students: 8,
  accuracyImprovement: '52%',
  timeReduction: '24%',
  frequentUseInterest: '70%',
  internet2Minutes: 21,
  fiveHundredRouterMinutes: 81,
} as const;

export const whyQuestions = [
  'Which configuration elements matter?',
  'What must each element preserve?',
  'Which local edits are safe?',
  'Which fields are irrelevant?',
] as const;

export const capabilities = [
  {
    title: 'Configuration relevance',
    description:
      'Identify the configuration lines and fields that contribute to a verified network property.',
  },
  {
    title: 'Localized correctness constraints',
    description:
      'Explain what values or behavior a configuration location must preserve, from router-level contracts down to field-level predicates.',
  },
  {
    title: 'Safe single-location updates',
    description:
      'Check whether a local edit preserves verified stable behavior, assuming all other configuration locations remain unchanged.',
  },
  {
    title: 'Cross-router dependencies',
    description:
      'Expose downstream filtering and routing decisions that constrain an upstream configuration element.',
  },
  {
    title: 'Router-, route-map-, line-, and field-level explanations',
    description:
      'Explain behavior at multiple granularities using complementary subspecification forms.',
  },
] as const;

export const workflowSteps = [
  {
    title: 'Simulate stable states',
    description: 'Derive the converged routing behavior that satisfies the network-wide property.',
  },
  {
    title: 'Extract router-level subspecifications',
    description: 'Record imports, best-route selection, and exports required at each router.',
  },
  {
    title: 'Symbolize a configuration location',
    description: 'Treat one configuration field or line as symbolic while fixing the rest.',
  },
  {
    title: 'Simplify into localized constraints',
    description: 'Produce readable constraints operators can inspect and audit.',
  },
] as const;

export const getStartedPlaceholder = {
  hasCli: false,
  message:
    'A public command-line interface and installation guide will be published with the open-source artifact. The core implementation extends Batfish and Minesweeper.',
  prerequisites: ['Python 3.10+', 'Java 11+ (Batfish / Minesweeper extensions)', 'Docker (recommended, upcoming)'],
} as const;
