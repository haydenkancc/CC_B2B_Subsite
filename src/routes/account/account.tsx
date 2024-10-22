import NavbarTop from '../../components/navbar/navbar-top.tsx';
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
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
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PortalBody from '../../components/portal-page/portal-body.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';
import { useEffect } from 'react';
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

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

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']


function Account() {

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
                <div className="px-8 pt-8">
                    <div className="text-2xl font-medium">Account Settings</div>
                </div>
                <div className="px-8 pt-8">
                    <PageTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Account;