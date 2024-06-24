import type { PropsWithChildren, ReactElement } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const THEME = {
  colors: {
    primary: '#275efe',
    alpha: '#ffffff',
    error: '#ba3939',
    neutral: '#cbd1dc',
    neutralBackground: '#bebebe',
  },
}

export function ThemeProvider({ children }: PropsWithChildren): ReactElement {
  return <StyledThemeProvider theme={THEME}>{children}</StyledThemeProvider>
}
