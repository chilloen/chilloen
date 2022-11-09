import { DefaultTheme } from 'styled-components'

export const calcRem = (size: number) => `${size / 16}rem`

export const customMediaQuery = (maxWidth: number): string =>
  `screen and (max-width: ${maxWidth}px)`

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(40),
}

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
}

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
}

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
}

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
}

const MIXINS = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `
    return
  },
}

const colors = {
  black: '#000000',
  white500: '#FFFFFF',
  white600: '#f6f6f6',
  grey400: '#d9d9d9',
  grey500: '#9e9e9e',
  odd_yard_color: '#F94671',
  chilloen_color: '#313553',
  sub_title: '#344971',
}

const deviceSizes = {
  mobileS: 320,
  mobileM: 480,
  mobileL: 720,
  tabletS: 860,
  tabletM: 1080,
  tabletL: 1280,
}
const device = {
  mobileS: customMediaQuery(deviceSizes.mobileS),
  mobileM: customMediaQuery(deviceSizes.mobileM),
  mobileL: customMediaQuery(deviceSizes.mobileL),
  tabletS: customMediaQuery(deviceSizes.tabletS),
  tabletM: customMediaQuery(deviceSizes.tabletM),
  tabletL: customMediaQuery(deviceSizes.tabletL),
}

export type FontSizesType = typeof fontSizes
export type PaddingType = typeof paddings
export type MarginType = typeof margins
export type IntervalType = typeof interval
export type VerticalIntervalType = typeof verticalInterval
export type MIXINSType = typeof MIXINS
export type ColorsType = typeof colors
export type DeviceSizesType = typeof deviceSizes
export type DeviceType = typeof device

const theme: DefaultTheme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  MIXINS,
  interval,
  verticalInterval,
}

export default theme
