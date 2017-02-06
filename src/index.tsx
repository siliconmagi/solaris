// This is the entry point for the Application
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { observable } from 'mobx';
import { HashRouter as Router } from 'react-router-dom';
import Views from './views';
import { txtEmail, txtPassword, registerEmailPass } from './stores/Api';

// We render our react app into this element
const app = document.getElementById('app');
const stores = { txtEmail, txtPassword, registerEmailPass };

const App = () => (
  <Provider {...stores}>
  <Router>
  <Views/>
  </Router>
  </Provider>
)

// Detect build environment for HMR
if ('production' === process.env.ENV) {} else
  {
    const hmr: any = module;
    if (hmr.hot) {
      hmr.hot.accept();
      require('inferno-devtools');
    }
  }

  // Mount root application
  Inferno.render(<App/>, app);
