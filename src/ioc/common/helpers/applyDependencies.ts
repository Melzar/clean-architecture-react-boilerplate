import { interfaces } from 'inversify';

import { appContainer } from 'ioc/AppContainer';

export function applyDependencies(
  func: Function,
  dependencies: interfaces.ServiceIdentifier<unknown>[] = []
) {
  const injections = dependencies.map(dependency =>
    appContainer.get(dependency)
  );

  return func.apply(func, injections);
}
