import { createRoot } from 'react-dom/client'
// import { AuthProvider } from '@auth0/auth0-react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <AuthProvider
  //   domain="dev-bu7v84wk3xmxh8ra.us.auth0.com"
  //   clientId="926N56OpbiKv1BFRro8ueXnBryrVPp83"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}>
    <App />
  // </AuthProvider>

)
