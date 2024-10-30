import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import General from './general.tsx';
import Contacts from '../account/contacts/contacts.tsx';
import Addresses from '../account/addresses/addresses.tsx';
import Documents from '../account/documents/documents.tsx';
import Logs from '../account/logs/logs.tsx';
import NavigationTabs from '../../components/tab-navigation/navigation-tabs.tsx';
import Permissions from './permissions.tsx';

const tabs = [
    { id: 1, title: 'General', content: <General /> },
    { id: 2, title: 'Contacts',  content: <Contacts /> },
    { id: 3, title: 'Addresses',  content: <Addresses /> },
    { id: 4, title: 'Documents',  content: <Documents /> },
    { id: 5, title: 'Logs',  content: <Logs /> },
    { id: 5, title: 'Permissions',  content: <Permissions /> },
]

function Company() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex">
            <div className="">
                <SidebarNav />
            </div>
            <div className="grow">
                <div className="flex flex-row items-center">
                    <div className="sam-title-section grow">
                        <div className="sam-title">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <MagnifyingGlassIcon />
                            </div>
                            <div className="text-[#808080]">
                                Search for anything
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className="pr-10">
                        <ShoppingCart size={20} />
                    </Link>
                </div>
                
                <div className="px-8 pt-5">
                    <div className="text-2xl">Company Settings</div>
                </div>
                <NavigationTabs tabs={tabs} />
            </div>
        </div>
    )
}

export default Company;