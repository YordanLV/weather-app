import styled from "styled-components";

const TempWidgetWrapper = styled.div`
  position: fixed;
  color: white;
  top: 7.1rem;
  left: 3rem;
  transition: ease-in-out top 0.5s;
  .location {
    margin-bottom: 0.8rem;
    input {
      background-color: transparent;
      color: white;
      max-width: 10rem;
      border-style: hidden;
      outline: none;
      margin-left: 0.3rem;
      font-size: 1.8rem;
      font-weight: 600;
      text-transform: uppercase;
      ::placeholder {
        color: white;
        opacity: 0.75;
      }
    }
  }
  .weather-icon {
    position: absolute;
    height: 3.5rem;
    top: 8rem;
    left: 11rem;
    transition: ease-in-out all 0.5s;
  }
  .temperature {
    font-size: 9.6rem;
    font-weight: 600;
    transition: ease-in-out font-size 0.5s;
    sup {
      position: relative;
      vertical-align: top;
      font-size: 50%;
    }
  }
  .weather-text {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .more-details {
    display: block;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }
  ${({ appState }) =>
    appState === "details" &&
    `
    top: 3.6rem;
    .temperature{
        font-size: 7.2rem;
    }
    .weather-icon {
      opacity: 0;
      left: 100%;
    }
    .more-details{
      display:none;
    }
  `}
`;

export default TempWidgetWrapper;
