import CodeIcon from '@/ui/elements/icons/code-icon';
import { TProjectLinkType } from '@/ui/components/project/model/types';
import { ReactNode } from 'react';
import DocsIcon from '@/ui/elements/icons/docs-icon';
import ExternalLinkIcon from '@/ui/elements/icons/external-link-icon';

const icons: { [key in TProjectLinkType]: ReactNode } = {
  source: <CodeIcon />,
  docs: <DocsIcon />,
  default: <ExternalLinkIcon />,
};

const getLinkIcon = (type: TProjectLinkType = 'default') => {
  return icons[type];
};

export default getLinkIcon;
