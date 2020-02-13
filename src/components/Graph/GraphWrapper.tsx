import styled from 'styled-components'

const GraphWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-overflow-scrolling: touch;
  padding-left: 3rem;
  padding-right: 3rem;
  canvas {
    padding: 0;
    margin: auto;
    display: block;
  }
`

export default GraphWrapper
