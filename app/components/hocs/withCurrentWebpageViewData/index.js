import { connect } from 'react-redux';
import {
  ACTIONS,
  SELECTORS
} from '../../../containers/WebpageViewer/ducks/currentWebpageView';

export default connect(
  state => ({
    currentWebpageViewSrc: SELECTORS.getCurrentWebpageViewSrc(state)
  }),
  ACTIONS
);
