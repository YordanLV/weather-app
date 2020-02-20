import React from "react";

type Props = {
  isMetric: boolean
}

const Units: React.FC<Props> = React.memo(({ isMetric }) => {
  return <>{isMetric ? <>C / F</> : <>F / C</>}</>;
});

export default Units;
