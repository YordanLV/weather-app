import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  inputColor: string
}

const SectionWrapper = styled.section<Props>`
  background-color: ${props => props.inputColor || 'white'};
  height: 100vh;
  overflow: auto;
  position: relative;
`

const Section: React.FC<Props> = React.memo(({ children, inputColor }) => {
  return <SectionWrapper inputColor={inputColor}>{children}</SectionWrapper>
})

export default Section
