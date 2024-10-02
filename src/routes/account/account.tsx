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
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PortalBody from '../../components/portal-page/portal-body.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';

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
        <PortalBody>
            <NavbarTop/>
            <NavbarBottom pages={pages} />
            <PageWrap>
                <PortalHeading heading="Account" subheading="View and modify your account details" />
                <PageTabs tabs={tabs} />
            </PageWrap>
        </PortalBody>
    )
}

export default Account