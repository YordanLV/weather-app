import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState } from 'reducers'
import appActions from 'actions'
import DetailsGrid from 'components/DetailsGrid'
import Graph from 'components/Graph'
import Section from 'components/Section'
import { withTheme } from 'styled-components'

type Props = {
  appState: string
}

const DetailsScreen: React.FC<Props> = ({ appState }) => {
  const dispatch = useDispatch()
  const { city, unitSystem } = useSelector((store: ApplicationState) => store.userInputReducer)
  const { currentWeatherData } = useSelector((store: ApplicationState) => store.weatherReducer)
  const { forecastWeatherData } = useSelector((store: ApplicationState) => store.forecastReducer)

  useEffect(() => {
    if (appState === 'details') {
      dispatch(appActions.fetch_forecast_data(city))
    }
  }, [appState, city, dispatch])

  const { main, clouds, wind }: any = currentWeatherData

  return (
    <Section inputColor="peachy">
      <DetailsGrid clouds={clouds} main={main} wind={wind} />
      <Graph forecastWeatherData={forecastWeatherData} unitSystem={unitSystem} />
    </Section>
  )
}

export default DetailsScreen
