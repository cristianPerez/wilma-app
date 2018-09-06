import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';
import currentWebpageView from '../containers/WebpageViewer/ducks/currentWebpageView';

const rootReducer = combineReducers({
  currentWebpageView,
  form,
  router
});

export default rootReducer;
