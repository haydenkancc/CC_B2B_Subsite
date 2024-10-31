import './billing.css'
import Terms from "./terms/terms.tsx";
import Wallet from './wallet/wallet.tsx';
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import NavigationTabs from '../../components/tab-navigation/navigation-tabs.tsx';
import PaymentMethods from './wallet/payment-methods.tsx';
import BillingContacts from '../account/contacts/billing-contacts.tsx';
import Invoices from './terms/invoices.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import OrdersTabs from '../../components/tab-navigation/orders-tabs.tsx';
import PaidTable from './terms/paid-table.tsx';
import OngoingTable from './terms/ongoing-table.tsx';
import OverdueTable from './terms/overdue-table.tsx';

const tabs = [
    { id: 1, title: 'All', content: <Invoices /> },
    { id: 2, title: 'Paid',  content: <PaidTable /> },
    { id: 3, title: 'Ongoing',  content: <OngoingTable /> },
    { id: 4, title: 'Overdue',  content: <OverdueTable /> },
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
                    <div className="text-2xl">Billing and Payment</div>
                </div>
                <div className="px-8">
                    <PaymentMethods />
                </div>
                <div className="px-8">
                    <OrdersTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Billing;