import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import URLInputForm from './components/URLInputForm';
import withCurrentWebpageViewData from '../../components/hocs/withCurrentWebpageViewData';

const WebpageViewer = ({ currentWebpageViewSrc, setCurrentWebpageView }) => (
  <div style={{ height: '100vh' }}>
    <URLInputForm onSubmit={setCurrentWebpageView} />
    {currentWebpageViewSrc && (
      <webview src={currentWebpageViewSrc} style={{ height: '95vh' }} />
    )}
  </div>
);

WebpageViewer.propTypes = {
  currentWebpageViewSrc: PropTypes.string,
  setCurrentWebpageView: PropTypes.func.isRequired
};

export default compose(withCurrentWebpageViewData)(WebpageViewer);
