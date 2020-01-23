import React from "react";

const Units = ({ isMetric }) => {
  return (
    <>
      {isMetric ? (
        <>
          C / <span>F</span>
        </>
      ) : (
        <>
          F / <span>C</span>
        </>
      )}
    </>
  );
};

export default Units;
