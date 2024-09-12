import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/landing/landing.tsx';
import Dashboard from './routes/dashboard/dashboard.tsx';
import Account from './routes/account/account.tsx';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "account",
        element: <Account />,
    }
]);


createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
