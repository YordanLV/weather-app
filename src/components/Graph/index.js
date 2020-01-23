import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import cToFahr from "util/cToFahr";
import date from "util/date";
import percentageCalc from "util/percCalc";

const GraphWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding-left: 3rem;
  padding-right: 3rem;
  canvas {
    padding: 0;
    margin: auto;
    display: block;
  }
`;

const Graph = ({ forecastWeatherData, unitSystem }) => {
  const canvasRef = useRef();
  const forcastList = forecastWeatherData.list;
  const isMetric = unitSystem === "metric";

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const offset = 35;
    const dotWidht = 8;
    const currentDate = date();

    ctx.canvas.width = "500";
    ctx.canvas.height = "150";

    const cw = ctx.canvas.width;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";

    ctx.font = "16px Roboto";

    if (forcastList) {
      let xAxis = 0;
      for (let i = 0; i < 8; i++) {
        let percCalcTemp =
          percentageCalc(forcastList && forcastList[i].main.temp * 10) + offset;
        let tempText = Math.round(
          isMetric
            ? forcastList[i].main.temp
            : cToFahr(forcastList[i].main.temp)
        );
        if (i === 0) {
          ctx.moveTo(xAxis, percCalcTemp);
        } else {
          ctx.lineTo(xAxis, percCalcTemp);
        }
        ctx.fillRect(
          xAxis - dotWidht / 2,
          percCalcTemp - dotWidht / 2,
          dotWidht,
          dotWidht
        );
        ctx.fillText(tempText, xAxis, percCalcTemp - 20);
        currentDate.addHours(3);
        ctx.fillText(currentDate.getHours(), xAxis, 125);
        xAxis += cw / 8;
      }
    }
    ctx.stroke();
  }, [forcastList, forecastWeatherData, forecastWeatherData.list, isMetric]);

  return (
    <GraphWrapper>
      <canvas ref={canvasRef} />
    </GraphWrapper>
  );
};

export default Graph;
