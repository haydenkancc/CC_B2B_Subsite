import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/landing/landing.tsx';
import SAM from './routes/sam/sam.tsx';
import Dashboard from './routes/dashboard/dashboard.tsx';
import Account from './routes/account/account.tsx';
import './index.css'
import EnterpriseSolutions from './routes/solutions/enterprise-solutions.tsx';
import HealthcareSolutions from './routes/solutions/healthcare-solutions.tsx';
import EducationSolutions from './routes/solutions/education-solutions.tsx';
import Hardware from './routes/products/hardware.tsx';
import Procurement from './routes/procurement/procurement.tsx';
import Software from './routes/products/software.tsx';
import Signin from './routes/user/signin.tsx';
import Forgot from './routes/user/forgot.tsx';
import Create from './routes/user/create.tsx';
import ForgotSubmission from './routes/user/forgot-submission.tsx';
import Orders from './routes/your-orders/orders/orders.tsx';
import Wishlist from './routes/wishlist/wishlist.tsx';
import Standards from './routes/wishlist/standards.tsx';
import Billing from './routes/billing/billing.tsx';
import ShoppingCart from './routes/shopping-cart/shopping-cart.tsx';
import Tickets from './routes/tickets/tickets.tsx';
import Messages from './routes/messages/messages.tsx';
import About from './routes/about/about.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "temp",
        element: <SAM />
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
    {
        path: "forgot-password",
        element: <Forgot />
    },
    {
        path: "create-account",
        element: <Create />
    },
    {
        path: "forgot-submission",
        element: <ForgotSubmission />
    },
    {
        path: "orders",
        element: <Orders />
    },
    {
        path: "wishlist",
        element: <Wishlist />
    },
    {
        path: "saved-lists",
        element: <Standards />
    },
    {
        path: "billing",
        element: <Billing />
    },
    {
        path: "cart",
        element: <ShoppingCart />
    },
    {
        path: "tickets",
        element: <Tickets />
    },
    {
        path: "message-center",
        element: <Messages />
    },
    {
        path: "about",
        element: <About />
    },
]);


createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
