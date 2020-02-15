import { interfaces } from 'inversify';
import { useContext } from 'react';

import { DependencyContext } from 'ui/common/hooks/DependencyProvider/DependencyProvider';

export function useInjection<T>(
  identifier: interfaces.ServiceIdentifier<T>,
  named?: symbol
) {
  const { container } = useContext(DependencyContext);

  if (!container) {
    throw new Error('Dependency Container not available!');
  }

  return named
    ? container.getNamed<T>(identifier, named)
    : container.get<T>(identifier);
}
