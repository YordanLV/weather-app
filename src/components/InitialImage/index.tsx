import React from 'react'
import styled from 'styled-components'

import sunny from 'images/sunny-state.svg'
import rainy from 'images/rainy-state.svg'

type Props = {
  appState: string
  weather: string
}

const Image = styled.img<{ appState: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 60vh;
  opacity: 1;
  transition: 0.5s opacity ease-in-out;
  z-index: 1;
  opacity: ${props => {
    if (props.appState === 'details') {
      return 0
    }
    return 1
  }};
`

const InitialImage: React.FC<Props> = React.memo(({ appState, weather }) => {
  if (weather === 'Rain') return <Image src={rainy} appState={appState} alt="Rainy" />
  else return <Image src={sunny} appState={appState} alt="Sunny" />
})

export default InitialImage
