import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState } from 'reducers'
import appActions from 'actions'
import DetailsScreen from 'containers/DetailsScreen'
import InitialScreen from 'containers/InitialScreen'
import useTransition from 'hooks/useTransition'

const App: React.FC = () => {
  const dispatch = useDispatch()

  dispatch(appActions.set_app_state(useTransition()))

  const { appState } = useSelector((store: ApplicationState) => store.appReducer)

  return (
    <>
      <InitialScreen appState={appState} />
      <DetailsScreen appState={appState} />
    </>
  )
}

export default App
