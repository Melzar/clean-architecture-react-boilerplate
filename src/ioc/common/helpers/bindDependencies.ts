import { interfaces } from 'inversify';

import { appContainer } from 'ioc/AppContainer';

function bindDependencies(
  func: Function,
  dependencies?: interfaces.ServiceIdentifier<unknown>[]
) {
  const injections =
    dependencies?.map(dependency => {
      return appContainer.get(dependency);
    }) || [];
  return func.bind(func, ...injections);
}

export { bindDependencies };
