import './billing.css'
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import OutstandingTable from './terms/outstanding-table.tsx';
import Cards from './cards.tsx';
import Terms from './terms.tsx';
import PageNavigation from '../../components/page-navigation/page-navigation.tsx';
import AllTable from './terms/all-table.tsx';
import InvoicesTabs from '../../components/tab-navigation/invoices-tabs.tsx';

const tabs = [
    { id: 1, title: 'Outstanding', content: <OutstandingTable /> },
    { id: 2, title: 'All',  content: <AllTable /> },
]

function Billing() {

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
                <div className="px-8 pt-5 pb-8">
                    <div className="text-2xl">Invoices</div>
                </div>
                {/* <div className="px-8 pb-8">
                    <Cards />
                </div> */}
                <div className="px-8 pb-8">
                    <Terms />
                </div>
                <div className="flex flex-col gap-y-4 px-8 pb-20">
                    <InvoicesTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Billing;