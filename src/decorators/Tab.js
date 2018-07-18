import store, {MUTATION} from 'src/store';
import decorate from './decorate';

const handler = function (target, property, descriptor, [title]) {
  const name = target.name;
  title = title || name;
  store.commit(MUTATION.CREATE_TAB, {title, name});
};
const Tab = function (...args) {
  return decorate(handler, args);
};

export default Tab;
