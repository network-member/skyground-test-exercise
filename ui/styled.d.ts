import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      alpha: string
      error: string
      neutral: string
      neutralBackground: string
    }
  }
}
