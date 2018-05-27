import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import SpaceXStore from './stores/SpaceXStore';

const Root = (
  <Provider SpaceXStore={SpaceXStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
