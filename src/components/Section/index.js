import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  background-color: ${props => props.inputColor || "white"};
  height: 100vh;
  overflow: auto;
`;

const Section = ({ children, inputColor }) => {
  return <SectionWrapper inputColor={inputColor}>{children}</SectionWrapper>;
};

export default Section;
