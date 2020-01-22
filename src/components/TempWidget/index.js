import React from "react";
import styled from "styled-components";

const TempWidgetWrapper = styled.div`
  position: fixed;
  color: white;
  top: 9.4rem;
  left: 3rem;
  font-size: 9.6rem;
  font-weight: 800;
`;
const Temperatura = styled.div``;

const TempWidget = () => {
  return (
    <TempWidgetWrapper>
      <Temperatura>27°</Temperatura>
    </TempWidgetWrapper>
  );
};

export default TempWidget;
