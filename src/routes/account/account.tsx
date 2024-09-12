import NavbarTop from '../../components/navbar/navbar-top.tsx';
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
import './account.css';
import Addresses from './addresses/addresses.tsx';
import Logs from './logs/logs.tsx';
import General from './general/general.tsx';
import Contacts from './contacts/contacts.tsx';
import Documents from './documents/documents.tsx';
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';

const items = [
    {
        id: 1,
        title: 'Hardware',
    },
    {
        id: 2,
        title: 'Software',
    },
    {
        id: 3,
        title: 'Orders',
    },
    {
        id: 4,
        title: 'Billing',
    },
    {
        id: 5,
        title: 'Wishlists',
    },
    {
        id: 6,
        title: 'Messages',
    },
    {
        id: 7,
        title: 'Tickets',
    },
    {
        id: 8,
        title: 'Account',
    }
]

const tabs = [
    { id: 1, title: 'General', content: <General /> },
    { id: 2, title: 'Contacts', content: <Contacts /> },
    { id: 3, title: 'Addresses', content: <Addresses /> },
    { id: 4, title: 'Documents', content: <Documents /> },
    { id: 5, title: 'Logs', content: <Logs /> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Wishlists', 'Tickets', 'Account']


function Account() {
    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender">
            <NavbarTop/>
            <NavbarBottom pages={pages} />
            <div className="flex justify-center">
                <div className="max-w-[1440px] flex-grow pl-4 pt-4">
                    <div className="pt-8 pb-16">
                        <div className="text-4xl pb-2">
                            Account
                        </div>
                        <div>
                            View and modify your account details
                        </div>
                    </div>
                    <Tabs className="">
                        <TabList className="flex text-lg border-b gap-1" items={tabs}>
                            {item => <Tab className="account-Tab">{item.title}</Tab>}
                        </TabList>
                        <Collection items={tabs}>
                            {item => (
                                <TabPanel className="pt-16">
                                    {item.content}
                                </TabPanel>
                            )}
                        </Collection>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Account