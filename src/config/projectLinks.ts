import { assetUrl } from '../utils/assetUrl';

export const projectLinks = {
  paper: assetUrl('/paper/explainable-network-verification.pdf'),
  paperRepair: assetUrl('/paper/repair-spaces-apnet26.pdf'),
  paperFault: assetUrl('/paper/fault-tolerant-subspecifications-fmano26.pdf'),
  github: 'https://github.com/yongzheng2024/batfish',
  userStudy: 'https://netsubspec.netlify.app',
  // TODO: Replace with dedicated Multi-Subspec demo URL when available.
  multiSubspec: 'https://netsubspec.netlify.app',
  contact: 'mailto:hxchen@shanghaitech.edu.cn',
} as const;

export type ProjectLinks = typeof projectLinks;
