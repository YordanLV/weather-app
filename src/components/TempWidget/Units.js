import React from "react";

const Units = ({ isMetric }) => {
  return <>{isMetric ? <>C / F</> : <>F / C</>}</>;
};

export default Units;
