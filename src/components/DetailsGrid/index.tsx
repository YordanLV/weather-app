import React from 'react'

import Detail from '../Detail'
import DetailsGridWrapper from './DetailsGridWrapper'

type Props = {
  clouds: {
    all: number
  }
  main: {
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
  }
}

const DetailsGrid: React.FC<Props> = React.memo(({ clouds, main, wind }) => {
  return (
    <DetailsGridWrapper style={{ marginTop: '25rem' }}>
      <Detail icon="windSpeed">{wind?.speed || 0} km/h</Detail>
      <Detail icon="pressure"> {main?.pressure || 0} hPa</Detail>
      <Detail icon="cloudines"> {clouds?.all || 0} cn</Detail>
      <Detail icon="humidity">{main?.humidity || 0} %</Detail>
    </DetailsGridWrapper>
  )
})

export default DetailsGrid
