import NavbarTop from '../../components/navbar/navbar-top.tsx';
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import MyOrders from './my-orders.tsx';
import CompanyOrders from './company-orders.tsx';
import AllOrders from './all-orders.tsx';

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

const tabs = [
    {id: 1, title: 'My Orders', current: true, content: <MyOrders /> },
    {id: 2, title: 'Company Orders', current: false, content: <CompanyOrders /> },
    {id: 3, title: 'All Orders', current: false, content: <AllOrders /> },
]

function Orders() {
    return (
        <>
            <div className="bg-ghost-white text-oxford-blue border-lavender">
                <NavbarTop />
                <NavbarBottom  pages={pages} />
            </div>

            <div className="flex-grow m-4">
                <Tabs className="w-224">
                    <TabList className="flex border-b gap-1" items={tabs}>
                        {item => <Tab className="account-Tab">{item.title}</Tab>}
                    </TabList>
                    <Collection items={tabs}>
                            {item => (
                                <TabPanel className="mt-6">
                                    {item.content}
                                </TabPanel>
                            )}
                        </Collection>
                </Tabs>
            </div>
        </>
    );
}

export default Orders;