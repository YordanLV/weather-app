import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Swipeable } from 'react-swipeable'

import appActions from 'actions'
import { ApplicationState } from 'reducers'
import InitialImage from 'components/InitialImage'
import scrollToBottom from 'util/scrollToBottom'
import Section from 'components/Section'
import TempWidget from 'components/TempWidget'

type Props = {
  appState: string
}

const InitialScreen: React.FC<Props> = ({ appState }) => {
  const dispatch = useDispatch()

  const { currentWeatherData, fetchStatus }: { currentWeatherData: any; fetchStatus: string } = useSelector(
    (store: ApplicationState) => store.weatherReducer
  )

  const { city, unitSystem } = useSelector((store: ApplicationState) => store.userInputReducer)

  const setCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const city = event.target.value
    dispatch(appActions.set_user_inputs(city, unitSystem))
  }

  const setUnitSystem = () => {
    dispatch(appActions.set_user_inputs(city, unitSystem === 'metric' ? 'imperail' : 'metric'))
  }

  const getWeather = () => {
    dispatch(appActions.fetch_weather_data(city))
  }

  const weather = currentWeatherData?.weather && currentWeatherData.weather[0].main
  return (
    <Swipeable onSwiped={eventData => (eventData.dir === 'Down' || eventData.dir === 'Up') && scrollToBottom()}>
      <Section inputColor={weather === 'Rain' ? 'bayGreen' : 'fuelYellow'}>
        <TempWidget
          appState={appState}
          city={city}
          currentWeatherData={currentWeatherData}
          fetchStatus={fetchStatus}
          getWeather={getWeather}
          setCity={setCity}
          setUnitSystem={setUnitSystem}
          unitSystem={unitSystem}
          weather={weather}
        />
        <InitialImage appState={appState} weather={weather} />
      </Section>
    </Swipeable>
  )
}

export default InitialScreen
