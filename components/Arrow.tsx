import React from 'react'
import styled from 'styled-components'
import { SlArrowRightCircle, SlArrowLeftCircle } from 'react-icons/sl'

export enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

interface Props {
  direction: Direction
  onClick?: any
}

export default function Arrow(props: Props) {
  return (
    <GrLinkNextIcon margin={1} onClick={props.onClick}>
      {props.direction === 3 && <SlArrowRightCircle />}
      {props.direction === 4 && <SlArrowLeftCircle />}
    </GrLinkNextIcon>
  )
}

const GrLinkNextIcon = styled.div<{ margin: number }>`
  color: #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin + 'rem'};
  font-size: 3rem;

  @media ${({ theme }) => theme.device.tabletL} {
    margin: calc(margin - 1rem);
  }
  @media ${({ theme }) => theme.device.mobileM} {
    margin: calc(margin - 2rem);
  }
`
