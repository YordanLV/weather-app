import React from "react";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>WeatherApp</title>
      <meta name="description" content="Much Weather, So Rainy" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Helmet>
  );
};
