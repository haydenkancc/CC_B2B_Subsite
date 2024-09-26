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
import Hardware from './routes/products/hardware.tsx';
import Procurement from './routes/procurement/procurement.tsx';
import Software from './routes/products/software.tsx';
import Signin from './routes/user/signin.tsx'

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
    {
        path: "software",
        element: <Software />
    },
    {
        path: "procurement",
        element: <Procurement />
    },
    {
        path: "sign-in",
        element: <Signin />
    },
]);


createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
