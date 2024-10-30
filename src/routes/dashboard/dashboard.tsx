import Wishlist from './wishlist/wishlist.tsx';
import Tickets from './tickets/tickets.tsx';
import AccountInformation from './account-information/account-information.tsx';
import Orders from './orders/orders.tsx';
import "./dashboard.css";
import DashBilling from './dash-billing.tsx';
import { Link } from 'react-router-dom';
import DashAccount from './dash-account.tsx';
import DashLists from './dash-lists.tsx';
import { useEffect } from 'react';
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex">
            <div className="">
                <SidebarNav />
            </div>
            <div className="grow">
                <div className="sam-title-section">
                    <div className="sam-title">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <MagnifyingGlassIcon />
                        </div>
                        <div className="text-[#808080]">
                            Search for anything
                        </div>
                    </div>
                </div>
                <div className="px-8 pt-5">
                    <div className="text-2xl">Dashboard</div>
                </div>
                <div className="flex flex-wrap gap-5 px-8 pt-8">
                    <Link to={'/account'} className="w-108 border rounded-sm hover:border-oxford-blue">
                        <DashAccount />
                    </Link>
                    <Link to={'/billing'} className="w-108 border rounded-sm hover:border-oxford-blue">
                        <DashBilling />
                    </Link>
                    <Link to={'/saved-lists'} className="w-108 border rounded-sm hover:border-oxford-blue">
                        <DashLists />
                    </Link>
                    <Link to={'/billing'} className="w-108 border rounded-sm hover:border-oxford-blue">
                        <DashBilling />
                    </Link>
                    <Link to={'/billing'} className="w-108 border rounded-sm hover:border-oxford-blue">
                        <DashBilling />
                    </Link>
                    <Link to={'/billing'} className="w-108 border rounded-sm hover:border-oxford-blue">
                        <DashBilling />
                    </Link>
                </div>
            </div>
        </div>

            // {/* <div className="flex">
            //     <Tabs className="flex flex-row">
            //         <div className="flex flex-col">
            //             <TabList items={actions}>
            //                 {item => <Tab className="flex flex-row items-center justify-between gap-x-8 new-account-Tab hover:bg-lavender/50 border-b border-r">{item.title}<CaretRight width="1em" /></Tab>}
            //             </TabList>
            //             <div className="mt-2 p-4 flex flex-col items-center gap-4 border-r">
            //                 My Account Manager
            //                 <img className="object-cover w-16 h-16 rounded-full" src={profile} />
            //                 <span>John Doe</span>
            //                 <span>john.doe@cc.ca</span>
            //                 <span>(416) 123-4567</span>
            //             </div>
            //         </div>
            //         <Collection items={actions}>
            //             {item => (
            //                 <TabPanel className="pl-10">
            //                     {item.content}
            //                 </TabPanel>
            //             )}
            //         </Collection>
            //     </Tabs>
            // </div> */}
    )
}

export default Dashboard;