import React from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { Toast } from './components/toast/toast'

function App() {
  return (
    <>
      <AppRoutes />

      <Toast />
    </>
  )
}

export default App
