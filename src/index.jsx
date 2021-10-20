import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import Launcher from './core/Launcher/Launcher';
import { AppContainer } from './core/App/AppContainer';
import './index.css';

import './i18n';

ReactDOM.render(
  <Launcher>
    <AppContainer />
  </Launcher>,
  document.getElementById('root'),
);
