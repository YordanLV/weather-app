import styled from "styled-components";

const TempWidgetWrapper = styled.div`
  position: fixed;
  color: white;
  top: 7.1rem;
  left: 3rem;
  transition: ease-in-out top 0.5s;
  z-index: 2;
  .location {
    margin-bottom: 0.8rem;
    input {
      background-color: transparent;
      color: white;
      max-width: 10rem;
      border-style: hidden;
      outline: none;
      padding: 0.5rem;
      font-size: 1.8rem;
      font-weight: 600;
      text-transform: uppercase;
      ::placeholder {
        color: white;
        opacity: 0.75;
      }
    }
    input::-internal-autofill-selected {
      background-color: transparent;
    }
  }
  .temperature {
    font-size: 9.6rem;
    font-weight: 600;
    transition: ease-in-out font-size 0.5s;
    sup {
      position: relative;
      vertical-align: top;
      font-size: 50%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.2) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .indicators {
    display: inline-block;
    position: relative;
    margin-left: 0.5rem;
    .weather-icon {
      position: absolute;
      height: 3.5rem;
      bottom: 1.5rem;
      left: 0;
      transition: ease-in-out all 0.5s;
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
    }
    .more-details{
      display:none;
    }
  `}
`;

export default TempWidgetWrapper;
