import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store';

const Launcher = ({ children }) => (
  <React.StrictMode>
    <Provider store={store}>{children}</Provider>
  </React.StrictMode>
);

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
