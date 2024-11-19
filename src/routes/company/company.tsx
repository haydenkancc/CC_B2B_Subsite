import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import General from './general.tsx';
import Contacts from '../account/contacts/contacts.tsx';
import Addresses from '../account/addresses/addresses.tsx';
import NavigationTabs from '../../components/tab-navigation/navigation-tabs.tsx';
import Credit from './credit.tsx';

const tabs = [
    { id: 1, title: 'General', content: <General /> },
    { id: 2, title: 'Users',  content: <Contacts /> },
    { id: 3, title: 'Shipping Addresses',  content: <Addresses /> },
    { id: 4, title: 'Company Credit Cards',  content: <Credit /> },
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
                </div>
                
                <div className="px-8 pt-5">
                    <div className="text-2xl">Company Information</div>
                </div>
                <div className="px-8">
                    <NavigationTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Company;