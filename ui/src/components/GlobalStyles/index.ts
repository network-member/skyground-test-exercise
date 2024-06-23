import { createGlobalStyle } from 'styled-components'

import GlutenFont from '@root/fonts/Gluten-VariableFont-wght.ttf'

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Gluten';
  src: url(${GlutenFont}) format('ttf');
}

html, body, #root {
  height: 100%;
}

body {
  margin: 0;
  font-family: Gluten, cursive;
  font-size: 14px;
}

input, textarea, button {
  font-family: inherit;
}

* {
    box-sizing: border-box;
}
`
