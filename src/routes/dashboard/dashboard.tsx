import CaretRight from '../../assets/caret-right-bold.svg?react';
import profile from '../../assets/l60Hf.png';
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import Wishlist from './wishlist/wishlist.tsx';
import Tickets from './tickets/tickets.tsx';
import AccountInformation from './account-information/account-information.tsx';
import Orders from './orders/orders.tsx';
import "./dashboard.css";
import {
    Button,
    Collection,
    FieldError,
    Form,
    Input,
    Label,
    Tab,
    TabList,
    TabPanel,
    Tabs,
    TextField
} from 'react-aria-components';
import DashBilling from './dash-billing.tsx';
import { Link } from 'react-router-dom';
import DashAccount from './dash-account.tsx';
import DashLists from './dash-lists.tsx';

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

const actions = [
    {id: 1, title: 'Dashboard', current: true, content: <Wishlist /> },
    {id: 2, title: 'Account Information', current: false, content: <AccountInformation /> },
    {id: 3, title: 'Your Orders', current: false, content: <Orders /> },
    {id: 4, title: 'Wish List', current: false, content: <Wishlist /> },
    {id: 5, title: 'Address Book', current: false, content: <Wishlist /> },
    {id: 6, title: 'Billing Information', current: false, content: <Wishlist /> },
    {id: 7, title: 'Tickets', current: false, content: <Tickets /> },
    {id: 8, title: 'Message Center', current: false, content: <Wishlist /> },
    {id: 9, title: 'Documents', current: false, content: <Wishlist /> },
    {id: 10, title: 'Account History', current: false, content: <Wishlist /> },
]

function Dashboard() {
    return (
        <div className="bg-ghost-white text-oxford-blue">
            <div className="bg-ghost-white text-oxford-blue border-lavender">
                <NavbarTopAccount />
                <NavbarBottom  pages={pages} />
            </div>
            <div className="bg-glaucous/10 border-b w-full flex flex-coltext-left px-4 py-16">
                <div className="max-w-[1440px] flex-grow pl-4 pt-4 mx-auto">
                    <div className="uppercase font-light">
                        Acme Corporation
                    </div>
                    <div className="font-display font-semibold text-4xl">
                        ERP DASHBOARD
                    </div>
                    <div className="">
                        Account #314159
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-[1440px] flex-grow pl-4 pt-4">
                    <div className="flex flex-row gap-x-5">
                        <Link to={'/account'} className="w-1/3 border rounded-sm hover:border-oxford-blue">
                            <DashAccount />
                        </Link>
                        <Link to={'/billing'} className="w-1/3 border rounded-sm hover:border-oxford-blue">
                            <DashBilling />
                        </Link>
                        <Link to={'/saved-lists'} className="w-1/3 border rounded-sm hover:border-oxford-blue">
                            <DashLists />
                        </Link>
                    </div>
                    <div className="flex flex-row gap-x-5 mt-5">
                        <Link to={'/billing'} className="w-1/3 border rounded-sm hover:border-oxford-blue">
                            <DashBilling />
                        </Link>
                        <Link to={'/billing'} className="w-1/3 border rounded-sm hover:border-oxford-blue">
                            <DashBilling />
                        </Link>
                        <Link to={'/billing'} className="w-1/3 border rounded-sm hover:border-oxford-blue">
                            <DashBilling />
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="flex">
                <Tabs className="flex flex-row">
                    <div className="flex flex-col">
                        <TabList items={actions}>
                            {item => <Tab className="flex flex-row items-center justify-between gap-x-8 new-account-Tab hover:bg-lavender/50 border-b border-r">{item.title}<CaretRight width="1em" /></Tab>}
                        </TabList>
                        <div className="mt-2 p-4 flex flex-col items-center gap-4 border-r">
                            My Account Manager
                            <img className="object-cover w-16 h-16 rounded-full" src={profile} />
                            <span>John Doe</span>
                            <span>john.doe@cc.ca</span>
                            <span>(416) 123-4567</span>
                        </div>
                    </div>
                    <Collection items={actions}>
                        {item => (
                            <TabPanel className="pl-10">
                                {item.content}
                            </TabPanel>
                        )}
                    </Collection>
                </Tabs>
            </div> */}

        </div>
    )
}

export default Dashboard;