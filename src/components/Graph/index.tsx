import React, { useEffect, useRef } from 'react'

import cToFahr from 'util/cToFahr'
import date from 'util/date'
import GraphWrapper from './GraphWrapper'
import percentageCalc from 'util/percCalc'
import ScrollWrapper from './ScrollWrapper'

type Props = {
  forecastWeatherData: any
  unitSystem: string
}

const Graph: React.FC<Props> = React.memo(({ forecastWeatherData, unitSystem }) => {
  const canvasRef = useRef()
  const forcastList = forecastWeatherData.list
  const isMetric = unitSystem === 'metric'

  useEffect(() => {
    const c: HTMLCanvasElement = canvasRef.current
    const ctx: any = c.getContext('2d')
    const Yoffset = 35
    const Xoffset = 5
    const dotWidht = 8
    const currentDate = date()

    ctx.canvas.width = '500'
    ctx.canvas.height = '150'

    const cw = ctx.canvas.width

    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'

    ctx.font = '16px Roboto'

    if (forcastList) {
      let xAxis = Xoffset
      for (let i = 0; i < 8; i++) {
        let percCalcTemp = percentageCalc(forcastList && forcastList[i].main.temp * 10) + Yoffset
        let tempText = Math.round(isMetric ? forcastList[i].main.temp : cToFahr(forcastList[i].main.temp))
        if (i === 0) {
          ctx.moveTo(xAxis, percCalcTemp)
        } else {
          ctx.lineTo(xAxis, percCalcTemp)
        }
        ctx.fillRect(xAxis - dotWidht / 2, percCalcTemp - dotWidht / 2, dotWidht, dotWidht)
        ctx.fillText(tempText, xAxis, percCalcTemp - 20)
        currentDate.addHours(3)
        ctx.fillText(currentDate.getHours(), xAxis - Xoffset, 125)
        xAxis += cw / 8
      }
    }
    ctx.stroke()
  }, [forcastList, forecastWeatherData, forecastWeatherData.list, isMetric])

  return (
    <GraphWrapper>
      <ScrollWrapper>
        <canvas ref={canvasRef} />
      </ScrollWrapper>
    </GraphWrapper>
  )
})

export default Graph
