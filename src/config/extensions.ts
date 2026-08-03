import { projectLinks } from './projectLinks';

export interface ResearchExtension {
  id: string;
  title: string;
  venue: string;
  date: string;
  location?: string;
  authors: string[];
  description: string;
  pdf?: string;
  doi?: string;
}

export interface CoreResearch {
  title: string;
  venue: string;
  date: string;
  location: string;
  authors: string[];
  description: string;
  pdf: string;
  doi: string;
}

export const coreResearch: CoreResearch = {
  title: 'Explainable Network Verification via Localized Subspecification',
  venue: "SIGCOMM '26",
  date: 'August 17–21, 2026',
  location: 'Denver, CO, USA',
  authors: [
    'Yongzheng Zhang',
    'Yaxuan Lin',
    'Haoxian Chen',
    'Ruize Ma',
    'Amirmohammad Nazari',
    'Mukund Raghothaman',
    'Peng Zhang',
  ],
  description:
    'Introduces localized subspecifications as a sound explanation layer for verified network configurations: a scalable two-phase algorithm, a user study with network operators, and evaluation on Internet2 and large synthetic networks.',
  pdf: projectLinks.paper,
  doi: 'https://doi.org/10.1145/3789240.3829155',
};

export const researchExtensions: ResearchExtension[] = [
  {
    id: 'repair',
    title:
      'Characterizing Network Configuration Repair Spaces with Localized Subspecifications',
    venue: "APNet '26",
    date: 'August 6–7, 2026',
    location: 'Singapore',
    authors: ['Yongzheng Zhang', 'Haoxian Chen'],
    description:
      'Applies localized subspecifications to misconfigured networks by characterizing repair spaces at individual configuration locations, using a reference route propagation graph for modular computation instead of returning a single opaque patch.',
    pdf: projectLinks.paperRepair,
    doi: 'https://doi.org/10.1145/3820441.3820471',
  },
  {
    id: 'fault-tolerance',
    title:
      'Explaining Network Configurations Under Failures via Localized Subspecifications',
    venue: "FMANO '26",
    date: 'August 17–21, 2026',
    location: 'Denver, CO, USA',
    authors: ['Yaxuan Lin', 'Yongzheng Zhang', 'Haoxian Chen'],
    description:
      'Extends localized subspecifications to k-failure models. Fault-tolerant subspecifications aggregate branch-local constraints from failure-aware symbolic routes, explaining which fields are failure-critical across admissible failure scenarios.',
    pdf: projectLinks.paperFault,
    doi: 'https://doi.org/10.1145/3789240.3822361',
  },
];
