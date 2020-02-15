import React, { createContext, ReactNode, useMemo } from 'react';
import { Container } from 'inversify';

type DependencyContainer = { container: Container | null };

export const DependencyContext = createContext<DependencyContainer>({
  container: null,
});

type Props = {
  children: ReactNode;
  container: Container;
};

export const DependencyProvider = ({ container, ...rest }: Props) => {
  const value = useMemo(() => ({ container }), [container]);

  return <DependencyContext.Provider value={value} {...rest} />;
};
