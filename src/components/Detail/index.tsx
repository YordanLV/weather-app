import React from 'react'
import styled from 'styled-components'

import IconSwitch from 'components/IconSwitch'

const DetailWrapper = styled.div`
  display: flex;
  width: calc(50% - 6rem);
  padding-left: 3rem;
  padding-right: 3rem;
  flex-direction: column;
  color: white;
  flex-direction: row;
  > div {
    display: flex;
    align-items: center;
  }
  .text-wrapper {
    min-width: 6rem;
  }
  .icon-wrapper {
    margin-left: 1rem;
  }
`

type Props = {
  children: React.ReactNode
  icon: string
}

const Detail: React.FC<Props> = React.memo(({ children, icon }) => {
  return (
    <DetailWrapper>
      <div className="text-wrapper">{children}</div>
      <div className="icon-wrapper">
        <img src={IconSwitch(icon)!} alt={icon} />
      </div>
    </DetailWrapper>
  )
})

export default Detail
