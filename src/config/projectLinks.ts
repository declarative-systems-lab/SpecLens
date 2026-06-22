export const projectLinks = {
  paper: '/paper/explainable-network-verification.pdf',
  paperRepair: '/paper/repair-spaces-apnet26.pdf',
  paperFault: '/paper/fault-tolerant-subspecifications-fmano26.pdf',
  github: '#',
  userStudy: 'https://netsubspec.netlify.app',
  // TODO: Replace with dedicated Multi-Subspec demo URL when available.
  multiSubspec: 'https://netsubspec.netlify.app',
  contact: 'mailto:hxchen@shanghaitech.edu.cn',
} as const;

export type ProjectLinks = typeof projectLinks;
