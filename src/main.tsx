import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/landing/landing.tsx';
import SAM from './routes/sam/sam.tsx';
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
import Checkout from './routes/checkout/checkout.tsx';
import Catalogue from './routes/catalogue/catalogue.tsx';
import TicketOpen from './routes/tickets/ticket-open.tsx';
import HardwareProduct from './routes/products/hardware/hardware-product.tsx';
import Profile from './routes/profile/profile.tsx';
import Optimize from './routes/procurement/optimize.tsx';
import Company from './routes/company/company.tsx';
import DashboardNew from './routes/dashboard-new/dashboard-new.tsx';
import CreateJamesChow from './routes/user/create-james-chow.tsx';
import LandingNew from './routes/landing-new/landing-new.tsx';
import Permissions from './routes/permissions/permissions.tsx';
import TicketClosed from './routes/tickets/ticket-closed.tsx';
import OrderDetails from './routes/your-orders/orders/order-details.tsx';
import OrderDetailsPending from './routes/your-orders/orders/order-details-pending.tsx';
import CheckoutOut from './routes/checkout/checkout-out.tsx';
import CartOut from './routes/shopping-cart/cart-out.tsx';
import CheckoutReview from './routes/checkout/checkout-review.tsx';
import CheckoutCompleted from './routes/checkout/checkout-completed.tsx';

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
        element: <DashboardNew />,
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
    {
        path: "checkout",
        element: <Checkout />
    },
    {
        path: "catalogue",
        element: <Catalogue />
    },
    {
        path: "ticket-open",
        element: <TicketOpen />
    },
    {
        path: "ticket-closed",
        element: <TicketClosed />
    },
    {
        path: "hardware-product",
        element: <HardwareProduct />
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "optimize",
        element: <Optimize />
    },
    {
        path: "company",
        element: <Company />
    },
    {
        path: "create-account/james-chow",
        element: <CreateJamesChow />
    },
    {
        path: "landing-new",
        element: <LandingNew />
    },
    {
        path: "permissions",
        element: <Permissions />
    },
    {
        path: "order-details",
        element: <OrderDetails />
    },
    {
        path: "order-details-pending",
        element: <OrderDetailsPending />
    },
    {
        path: "cart-out",
        element: <CartOut />
    },
    {
        path: "checkout-review",
        element: <CheckoutReview />
    },
    {
        path: "checkout-completed",
        element: <CheckoutCompleted />
    },
]);


createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
