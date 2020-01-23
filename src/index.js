import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "containers/App";
import configureStore from "store";
import ErrorBoundry from "components/ErrorBoundry";
import Helmet from "components/Helmet";
import Layout from "layout";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Layout>
        <Helmet />
        <App />
      </Layout>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
