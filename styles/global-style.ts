import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
      font-size: 16px;
      -webkit-text-size-adjust: none;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;   
      font-display: fallback;
      -ms-overflow-style: none;
      scrollbar-width: none;
       @media ${({ theme }) => theme.device.tabletL}  {
        font-size: 14px;
      }

      @media ${({ theme }) => theme.device.mobileL} {
        font-size: 12px;
      }
    }
    html,
    body {
      padding: 0;
      margin: 0;
    }
    body {
      background-color: #f6f6f6;
  
    }
    * {
      box-sizing: border-box;
      white-space:nowrap ;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
    }
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
`
