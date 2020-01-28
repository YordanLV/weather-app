import React from "react";
import styled from "styled-components";

import Detail from "../Detail";

const DetailsGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 20rem;
  justify-content: center;
`;

const DetailsGrid = ({ clouds, main, wind }) => {
  return (
    <DetailsGridWrapper style={{ marginTop: "25rem" }}>
      <Detail icon="windSpeed">{wind?.speed || 0} km/h</Detail>
      <Detail icon="pressure"> {main?.pressure || 0} hPa</Detail>
      <Detail icon="cloudines"> {clouds?.all || 0} cn</Detail>
      <Detail icon="humidity">{main?.humidity || 0} %</Detail>
    </DetailsGridWrapper>
  );
};

export default DetailsGrid;
