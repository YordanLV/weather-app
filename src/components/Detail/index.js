import React from "react";
import styled from "styled-components";

import IconSwitch from "components/IconSwitch";

const DetailWrapper = styled.div`
  display: flex;
  width: calc(50% - 6rem);
  padding-left: 3rem;
  padding-right: 3rem;
  flex-direction: column;
  color: white;
  flex-direction: row;
  > div {
    display: flex;
    align-items: center;
  }
  .text-wrapper {
    min-width: 4rem;
  }
  .icon-wrapper {
    margin-left: 1rem;
  }
`;

const Detail = ({ children, icon }) => {
  return (
    <DetailWrapper>
      <div className="text-wrapper">{children}</div>
      <div className="icon-wrapper">
        <img src={IconSwitch(icon)} alt={icon} />
      </div>
    </DetailWrapper>
  );
};

export default Detail;
