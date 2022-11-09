import { css } from 'styled-components'

export const defaultContainer = css`
  min-height: 100vh;
  min-width: 100vw;
  flex: 1;
  ${({ theme }) => theme.MIXINS.flexBox('column')};
  border: 1px solid red;
  > * {
    border: 1px solid blue;
  }
`
export const defaultInputsStyle = css`
  position: relative;
  outline: none;
  border: none;
  border-bottom: 1px solid #f6f6f6;
  transition: all 0.5s;
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  border-radius: 0px;
  :focus {
    border-bottom: 1px solid #074478;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-family: 'Pretendard';
    font-weight: 400;
  }
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-family: 'Pretendard';
    font-weight: 400;
  }
`

export const block = css`
  top: 0;
  position: absolute;
  z-index: 1000;
  width: calc((100vw - 1200px) / 2);
  height: 560px;
  background-color: #f6f6f6;

  @media ${({ theme }) => theme.device.tabletL} {
    width: 20vw;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    display: none;
  }
`
