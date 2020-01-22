import React from "react";

import TempWidget from "components/TempWidget";

const InitialScreen = ({ appState }) => {
  return (
    <div>
      <TempWidget appState={appState} />
    </div>
  );
};

export default InitialScreen;
