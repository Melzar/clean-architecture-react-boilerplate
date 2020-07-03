declare module '@emotion/styled' {
  // eslint-disable-next-line
  import { CreateStyled } from '@emotion/styled/types/index';

  import { Theme } from 'ui/common/types/theme';

  // eslint-disable-next-line
  export * from '@emotion/styled/types/index';

  const customStyled: CreateStyled<Theme>;
  export default customStyled;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const content: string;
  export default content;
}
