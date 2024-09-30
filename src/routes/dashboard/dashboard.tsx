import CaretRight from '../../assets/caret-right-bold.svg?react';
import profile from '../../assets/l60Hf.png';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
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

const pages = ['Dashboard', 'Orders', 'Billing', 'Wishlists', 'Tickets', 'Account']

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
                <NavbarTop />
                <NavbarBottom  pages={pages} />
            </div>
            {<div className="bg-glaucous/10 border-b w-full flex flex-col align-middle pl-8 pt-16 pr-8 pb-16">
                <div className="uppercase font-light">
                    Acme Corporation
                </div>
                <div className="font-display font-semibold text-4xl">
                    Welcome, Wile
                </div>
                <div className="">
                    Account #314159
                </div>
            </div>}
            <div className="flex">
                {/* <div className="flex flex-col border-r">
                    <div className="rounded-md">
                        {actions.map((action) => (
                            <>
                                <div className={`pl-8 pt-2 pb-2 pr-4 flex justify-between items-center gap-8 hover:bg-lavender/50 ${action.current ? 'border-l-4 border-school-bus-yellow bg-lavender/25' : '/'}`}>
                                    <div className="text-md">
                                        {action.title}
                                    </div>
                                    <CaretRight width="1em" />
                                </div>
                                <div className="border-t" />
                            </>
                        ))}
                        <div className="mt-2 p-4 flex flex-col items-center gap-4">
                            My Account Manager
                            <img className="object-cover w-16 h-16 rounded-full" src={profile} />
                            <span>John Doe</span>
                            <span>john.doe@cc.ca</span>
                            <span>(416) 123-4567</span>
                        </div>
                    </div>
                </div> */}
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
                {/* <div className="flex-grow m-4">
                    <div className="font-display text-2xl pl-4 border-b">
                        Action Items
                    </div>
                    <div className="flex">
                        <div className="mt-4 flex flex-col">
                            <span className="font-semibold">Order Approval Request</span>
                            <span className="">Review pending order</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard;