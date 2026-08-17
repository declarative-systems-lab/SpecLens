import { assetUrl } from '../utils/assetUrl';

export const projectLinks = {
  paper: assetUrl('/paper/explainable-network-verification-sigcomm26.pdf'),
  paperRepair: assetUrl('/paper/repair-spaces-apnet26.pdf'),
  paperFault: assetUrl('/paper/fault-tolerant-fmano26.pdf'),
  github: 'https://github.com/declarative-systems-lab/batfish',
  userStudy: assetUrl('/userstudy/'),
} as const;

export type ProjectLinks = typeof projectLinks;
