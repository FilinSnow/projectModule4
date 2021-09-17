import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux-store/store";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {CssBaseline} from "@material-ui/core";
import {StylesProvider} from '@material-ui/styles';

import App from './App';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ScopedCssBaseline>
            <CssBaseline>
              <StylesProvider injectFirst>
                <App/>
              </StylesProvider>
            </CssBaseline>
          </ScopedCssBaseline>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

reportWebVitals();
