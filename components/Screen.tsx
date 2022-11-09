import styled from 'styled-components'

interface Props {
  children?: JSX.Element | JSX.Element[] | string | string[] | React.ReactNode
  styleProps?: ScreenStyleType
  id?: string
}

interface ScreenStyleType {
  screenHeight?: number
  bg?: string
  textColor?: string
  justifyContent?: string
}

const Screen = ({ children, styleProps, id }: Props) => {
  return (
    <ScreenStyle styleProps={styleProps}>
      <div id={id}>{children}</div>
    </ScreenStyle>
  )
}

export default Screen

const ScreenStyle = styled.section<{ styleProps?: ScreenStyleType }>`
  min-height: ${({ styleProps: style }) =>
    style?.screenHeight ? style.screenHeight + 'vh' : '100vh'};
  min-width: 100vw;
  padding: 10vh 2rem;
  flex: 1;
  ${({ theme }) => theme.MIXINS.flexBox('column')};
  transition: all 0.5s;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: ${({ styleProps: style }) =>
      style?.justifyContent || 'center'};
    align-items: center;

    @media screen and (min-width: 1280px) {
      width: 1200px;
    }
    @media ${({ theme }) => theme.device.tabletL} {
      width: 100%;
      flex-direction: column;
    }
  }
  background-color: ${({ theme, styleProps: style }) =>
    style?.bg ? style.bg : theme.colors.black};
  color: ${({ theme, styleProps: style }) =>
    style?.textColor ? style?.textColor : theme.colors.white500};
`
