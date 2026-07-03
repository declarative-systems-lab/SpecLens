import { projectLinks } from './projectLinks';

export const siteMeta = {
  name: 'SpecLens',
  tagline: 'Understand why your network configuration is correct.',
  description:
    'SpecLens is an open-source network configuration explanation tool. It derives localized, sound constraints that explain how individual routers, configuration lines, and fields preserve verified network behavior.',
  corePaper: {
    title: 'Explainable Network Verification via Localized Subspecification',
    venue: 'ACM SIGCOMM 2026',
  },
} as const;

export const navItems = [
  { label: 'Why SpecLens', href: '/#why' },
  { label: 'Demo', href: '/#demo' },
  { label: 'Why Trust', href: '/#trust' },
  { label: 'Research', href: '/#research' },
  { label: 'GitHub', href: projectLinks.github },
] as const;

/** Set to true to show the Workflow section on the homepage. */
export const showWorkflowSection = false;

export const contact = {
  email: 'hxchen@shanghaitech.edu.cn',
  affiliation: 'ShanghaiTech University',
} as const;

export const trustTabs = [
  { id: 'users', label: 'Validated with Users' },
  { id: 'sus', label: 'System Usability Scale (SUS)' },
  { id: 'scalability', label: 'Scalability' },
  { id: 'runtime', label: 'Runtime' },
] as const;

export const userStudyMetrics = {
  participants: 23,
  operators: 15,
  students: 8,
  accuracyImprovement: '52%',
  timeReduction: '24%',
  frequentUseInterest: '70%',
} as const;

/** Benchmark numbers from sec_eval.tex (RQ3 efficiency + RQ4 scalability). */
export const benchmarkMetrics = {
  /** Subspec runtime on Internet2 (Figure: Run time on each network configuration). */
  internet2Minutes: 21,
  /** Subspec runtime on Bics, Columbus, USCarrier (same figure). */
  syntheticSecondsRange: '12–30',
  /** Subspec runtime at 500 routers when varying network size (scalability line plot). */
  fiveHundredRouterMinutes: 81,
} as const;

export const whyQuestions = [
  'Which configuration elements matter?',
  'What must each element preserve?',
  'Which local edits are safe?',
  'Which fields are irrelevant?',
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
