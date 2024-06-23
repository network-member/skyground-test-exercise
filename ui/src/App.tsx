import type { FC } from 'react'

import { GlobalStyles } from './components/GlobalStyles'
import { CRAHomePage } from './pages/CRAHomePage'
import { Container } from './styles'

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <CRAHomePage />
      </Container>
    </>
  )
}

export default App
