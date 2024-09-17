import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/landing/landing.tsx';
import Dashboard from './routes/dashboard/dashboard.tsx';
import Account from './routes/account/account.tsx';
import './index.css'
import EnterpriseSolutions from './routes/solutions/enterprise-solutions.tsx';
import HealthcareSolutions from './routes/solutions/healthcare-solutions.tsx';
import EducationSolutions from './routes/solutions/education-solutions.tsx';
import Hardware from './routes/hardware/hardware.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
      path: "enterprise-solutions",
      element: <EnterpriseSolutions />,
    },
    {
      path: "healthcare-solutions",
      element: <HealthcareSolutions />,
    },
    {
        path: "education-solutions",
        element: <EducationSolutions />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "account",
        element: <Account />,
    },
    {
        path: "hardware",
        element: <Hardware />
    },
]);


createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
