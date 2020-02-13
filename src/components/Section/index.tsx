import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  inputColor: string
}

const SectionWrapper = styled.section<Props>`
  /* background-color: ${props => props.inputColor || 'white'}; */
  background-color: ${props => {
    if (props.inputColor === 'peachy') {
      return props.theme.peachy
    } else if (props.inputColor === 'bayGreen') {
      return props.theme.bayGreen
    } else if (props.inputColor === 'fuelYellow') {
      return props.theme.fuelYellow
    }
    return props.inputColor
  }};
  height: 100vh;
  overflow: auto;
  position: relative;
`

const Section: React.FC<Props> = React.memo(({ children, inputColor }) => {
  return <SectionWrapper inputColor={inputColor}>{children}</SectionWrapper>
})

export default Section
