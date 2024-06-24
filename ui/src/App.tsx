import type { FC } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { GlobalStyles } from './components/GlobalStyles'
import { PrivateRoute } from './components/PrivateRoute'
import { ThemeProvider } from './components/ThemeProvider'
import { HomePage } from './pages/HomePage'
import { SignInPage } from './pages/SignIn'
import { SignUpPage } from './pages/SignUp'

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  )
}

export default App
