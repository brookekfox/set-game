import {namespaces} from '../../../../modules/constants-enumerate';
import {storeInstance} from '@aofl/store';
import mutations from './mutations';
import decorators from './decorators';

const sdo = {
  namespace: namespaces.SET,
  mutations,
  decorators
};

storeInstance.addState(sdo);
