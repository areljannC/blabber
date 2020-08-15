import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './shared/store'
import { ThemeProvider, App } from './shared/components';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
