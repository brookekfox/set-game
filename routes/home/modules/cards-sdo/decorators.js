import {storeInstance} from '@aofl/store';
import {namespaces} from '../../../../modules/constants-enumerate';
import {deepAssign} from '@aofl/object-utils';

const decorators = [
  (_nextState) => {
    const state = storeInstance.getState();
    let nextState = _nextState;

    if (
      typeof nextState[namespaces.SET].$isComplete === 'undefined' ||
      nextState[namespaces.SET] !== state[namespaces.SET]
    ) {
      const $isComplete =
        nextState[namespaces.SET].numberOfSetsFound ===
          nextState[namespaces.SET].numberOfSetsToFind;

      nextState = deepAssign(nextState, namespaces.SET, {
        $isComplete
      });
    }

    return nextState;
  }
];

export default decorators;
