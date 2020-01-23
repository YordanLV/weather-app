import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "containers/App";
import configureStore from "store";
import Helmet from "components/Helmet";
import Layout from "layout";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <Helmet />
      <App />
    </Layout>
  </Provider>,
  document.getElementById("root")
);
