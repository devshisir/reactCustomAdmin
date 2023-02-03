import {
  React,
  BrowserRouter,
} from './utils/GlobalExport';
import "./assets/scss/App.scss";

import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from './store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);