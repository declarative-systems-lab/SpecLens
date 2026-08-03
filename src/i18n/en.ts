export const en = {
  nav: {
    demo: 'Try SpecLens',
    whyTrust: 'Why Trust',
    research: 'Research',
    github: 'GitHub',
  },
  hero: {
    tagline: 'Understand why your network configuration is correct.',
    description:
      'SpecLens is an open-source network configuration explanation tool that derives localized, sound subspecifications (subspecs)—constraints on individual routers, configuration lines, and fields that explain how they preserve verified network behavior.',
    contactLabel: 'Contact:',
  },
  home: {
    whyLead:
      'Network verification tells you whether a configuration is correct. SpecLens explains why.',
    whyQ1: 'Which configuration elements matter?',
    whyQ2: 'What must each element preserve?',
    whyQ3: 'Which local edits are safe?',
    whyQ4: 'Which fields are irrelevant?',
    demoHeading: 'Try SpecLens',
    demoUserStudyLead: 'Explore localized configuration explanations through our interactive user-study tasks.',
    demoPreviewTitle: 'Explore SpecLens interactively',
    demoPreviewAction: 'Open demo →',
    trustHeading: 'Why Trust SpecLens',
    trustTabUsers: 'Validated with Users',
    trustTabSus: 'System Usability Scale (SUS)',
    trustTabScalability: 'Scalability',
    trustTabRuntime: 'Runtime',
    researchHeading: 'Research Extensions',
    researchTabCore: 'Explainable Network Verification',
    researchTabRepair: 'Configuration Repair',
    researchTabFault: 'Fault-Tolerant Subspecifications',
    readFullEval: 'Read the full evaluation →',
    pdf: 'PDF',
    doi: 'DOI',
    affiliation: 'ShanghaiTech University',
    trustUsersLead:
      'We evaluated SpecLens with 23 participants (15 professional network operators and 8 graduate students) on four configuration reasoning tasks.',
    trustAccuracyHighlight: '<strong>52%</strong> accuracy improvement',
    trustTimeHighlight: '<strong>23%</strong> time reduction',
    trustUsersSummary: 'User study task accuracy and completion time.',
    trustSusLead:
      'Participants completed the standard 10-item System Usability Scale questionnaire after the study tasks.',
    trustSusScoreHighlight: '<strong>62/100</strong> average SUS',
    trustSusAdoptionHighlight: '<strong>70%</strong> would use SpecLens in daily practice',
    trustSusSummary: 'User-study System Usability Scale responses.',
    trustScalabilityLead:
      'We assessed scalability by varying the number of routers, configuration lines, and threads.',
    trustScalabilityHighlight: '<strong>25 min</strong> at 1,280 routers',
    trustScalabilitySummary: 'Scalability of subspecification generation under different dimensions.',
    trustRuntimeLead:
      'We benchmarked end-to-end subspecification generation on real and synthetic network configurations.',
    trustRuntimeInternet2: '<strong>10 min</strong> Internet2',
    trustRuntimeSynthetic: '<strong>12–30 sec</strong> synthetic configs',
    trustRuntimeSummary: 'Run time on each network configuration.',
    chartAccuracyCombined: 'Task accuracy (combined).',
    chartAccuracyAcademia: 'Task accuracy (grad students).',
    chartAccuracyIndustry: 'Task accuracy (operators).',
    chartTimeCombined: 'Task completion time (combined).',
    chartTimeAcademia: 'Task completion time (grad students).',
    chartTimeIndustry: 'Task completion time (operators).',
    chartSusCombined: 'System usability scale (combined).',
    chartSusAcademia: 'System usability scale (grad students).',
    chartSusIndustry: 'System usability scale (operators).',
    chartScaleNetwork: 'Vary network size.',
    chartScalePrefixes: 'Vary configuration lines.',
    chartScaleThreads: 'Vary threads (parallelism).',
  },
  legend: {
    withoutSubspecs: 'Without SubSpec',
    withSubspecs: 'With SubSpec',
    median: 'Median',
    mean: 'Mean Value',
    positive: 'Positive',
    negative: 'Negative',
    fullSym: 'FullSym',
    subspec: 'SubSpec',
    timeout: 'Timeout',
  },
  research: {
    coreDescription:
      'Introduces localized subspecifications as a sound explanation layer for verified network configurations: a scalable two-phase algorithm, a user study with network operators, and evaluation on Internet2 and large synthetic networks.',
    repairDescription:
      'Applies localized subspecifications to misconfigured networks by characterizing repair spaces at individual configuration locations, using a reference route propagation graph for modular computation instead of returning a single opaque patch.',
    faultDescription:
      'Extends localized subspecifications to k-failure models. Fault-tolerant subspecifications aggregate branch-local constraints from failure-aware symbolic routes, explaining which fields are failure-critical across admissible failure scenarios.',
  },
  lang: {
    en: 'EN',
    zh: '中文',
    switch: 'Language',
  },
};

export type Messages = typeof en;
export type Locale = 'en' | 'zh';
