import { projectLinks } from './projectLinks';
import { assetUrl } from '../utils/assetUrl';

export const siteMeta = {
  name: 'SpecLens',
  tagline: 'Understand why your network configuration is correct.',
  description:
    'SpecLens is an open-source network configuration explanation tool that derives localized, sound subspecifications (subspecs)—constraints on individual routers, configuration lines, and fields that explain how they preserve verified network behavior.',
} as const;

export const navItems = [
  { i18nKey: 'nav.demo', fallbackLabel: 'Try SpecLens', href: assetUrl('/#demo') },
  { i18nKey: 'nav.whyTrust', fallbackLabel: 'Why Trust', href: assetUrl('/#trust') },
  { i18nKey: 'nav.research', fallbackLabel: 'Research', href: assetUrl('/#research') },
  { i18nKey: 'nav.github', fallbackLabel: 'GitHub', href: projectLinks.github },
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
  timeReduction: '23%',
} as const;

/** Benchmark numbers from sec_eval.tex (RQ3 efficiency + RQ4 scalability). */
export const benchmarkMetrics = {
  /** Subspec runtime on Internet2 (Figure: Run time on each network configuration). */
  internet2Minutes: 10,
  /** Subspec runtime on Bics, Columbus, USCarrier (same figure). */
  syntheticSecondsRange: '12–30',
  /** Subspec runtime on the largest FatTree configuration in the scalability evaluation. */
  fatTreeRouters: 1280,
  fatTreeMinutes: 25,
} as const;
