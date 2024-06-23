import type { FC } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { GlobalStyles } from './components/GlobalStyles'
import { PrivateRoute } from './components/PrivateRoute'
import { HomePage } from './pages/HomePage'
import { SignInPage } from './pages/SignIn'
import { SignUpPage } from './pages/SignUp'
import { Container } from './styles'

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
