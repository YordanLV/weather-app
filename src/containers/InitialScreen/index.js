import React from "react";

import InitialImage from "components/InitialImage";
import TempWidget from "components/TempWidget";

const InitialScreen = ({ appState }) => {
  return (
    <div>
      <TempWidget appState={appState} />
      <InitialImage appState={appState} />
    </div>
  );
};

export default InitialScreen;
