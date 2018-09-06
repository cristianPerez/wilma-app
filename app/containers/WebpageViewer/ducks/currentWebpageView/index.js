import { createSelector } from 'reselect';

const ACTION_TYPES = {
  RESET: 'wilma/currentWebpageView/RESET',
  SET: 'wilma/currentWebpaggeView/SET'
};

const initialState = {
  src: null
};

export default (reduxState = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTION_TYPES.RESET:
      return initialState;
    case ACTION_TYPES.SET:
      return {
        ...reduxState,
        src: payload.src
      };
    default:
      return reduxState;
  }
};

const resetCurrentWebpageView = () => ({ type: ACTION_TYPES.RESET });
const setCurrentWebpageView = ({ src }) => ({
  type: ACTION_TYPES.SET,
  payload: { src }
});

export const ACTIONS = {
  resetCurrentWebpageView,
  setCurrentWebpageView
};

const getState = state => state.currentWebpageView;

const getCurrentWebpageViewSrc = createSelector(getState, ({ src }) => src);

export const SELECTORS = {
  getCurrentWebpageViewSrc
};
