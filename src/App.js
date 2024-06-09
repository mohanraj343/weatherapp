import logo from './logo.svg';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterPaths } from './routes/routerApp';


function App() {
  const router = createBrowserRouter(RouterPaths)
  
  return (
    <div className="App">
  <Auth0Provider
    domain="dev-2kz0n0mm0mh16vg6.us.auth0.com"
    clientId="OOsn7CYcZTALc7d6eYv3Oop7RFcxkUGl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router}>
    <div className='appcontainer' />
  
    </RouterProvider>
  
  </Auth0Provider>
    </div>
  );
}

export default App;
