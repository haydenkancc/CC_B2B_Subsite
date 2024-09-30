import CaretRight from '../../assets/caret-right-bold.svg?react';
import profile from '../../assets/l60Hf.png';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import Wishlist from './wishlist/wishlist.tsx';
import Tickets from './tickets/tickets.tsx';
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
    {id: 1, title: 'Dashboard', subtitle: 'hello', current: true, content: <Wishlist /> },
    {id: 2, title: 'Account Information', subtitle: 'hello', current: false, content: <Tickets /> },
    {id: 3, title: 'Your Orders', subtitle: 'hello', current: false, content: <Wishlist /> },
    {id: 4, title: 'Wish List', subtitle: 'hello', current: false, content: <Tickets /> },
    {id: 5, title: 'Address Book', subtitle: 'hello', current: false, content: <Wishlist /> },
    {id: 6, title: 'Billing Information', subtitle: 'hello', current: false, content: <Tickets /> },
    {id: 7, title: 'Tickets', subtitle: 'hello', current: false, content: <Wishlist /> },
    {id: 8, title: 'Message Center', subtitle: 'hello', current: false, content: <Tickets /> },
    {id: 9, title: 'Documents', subtitle: 'hello', current: false, content: <Wishlist /> },
    {id: 10, title: 'Account History', subtitle: 'hello', current: false, content: <Tickets /> },
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
                <div className="flex flex-col border-r">
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
                                {/* <Tabs className="">
                                    <TabList className="flex text-lg border-b gap-1" items={actions}>
                                        {item => <Tab className="account-Tab">{item.title}</Tab>}
                                    </TabList>
                                    <Collection items={actions}>
                                        {item => (
                                            <TabPanel className="pt-16">
                                                {item.content}
                                            </TabPanel>
                                        )}
                                    </Collection>
                                </Tabs> */}
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
                </div>
                <Tabs className="flex flex-row">
                    <TabList className="flex flex-col" items={actions}>
                        {item => <Tab className="flex flex-row items-center justify-between gap-x-8 new-account-Tab hover:bg-lavender/50 border-b border-r">{item.title}<CaretRight width="1em" /></Tab>}
                    </TabList>
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