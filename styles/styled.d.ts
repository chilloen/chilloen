import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSizesType
    paddings: PaddingType
    margins: MarginType
    interval: IntervalType
    verticalInterval: VerticalIntervalType
    MIXINS: MIXINSType
    colors: ColorsType
    deviceSizes: DeviceSizesType
    device: DeviceType
  }
}
