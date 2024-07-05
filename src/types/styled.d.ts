// import original module declaration
import 'styled-components'

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      highlight: string
    }

    size: {
      quarter: string
      half: string
      unit: string
      oneAndHalf: string
      double: string
      triple: string
      quad: string
      quint: string
      sex: string
      units: (multiplier?: number) => string
    }

    transition: {
      standard: (firstProperty: string, ...restProperties: string[]) => string
    }
  }
}
