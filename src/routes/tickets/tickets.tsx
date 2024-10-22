import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PortalBody from '../../components/portal-page/portal-body.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';
import Terms from '../billing/terms/terms.tsx';
import Wallet from '../billing/wallet/wallet.tsx';
import TicketTable from './ticket-table.tsx';
import { useEffect } from 'react';
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const tabs = [
    { id: 1, title: 'Wallet', content: <Wallet /> },
    { id: 2, title: 'Terms', content: <Terms /> },
    { id: 3, title: 'Tickets', content: <TicketTable /> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

function Tickets() {
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
                <div className="px-8 py-8">
                    <div className="text-2xl font-medium">Ticket Management</div>
                </div>
                <TicketTable />
            </div>
        </div>
    )
}

export default Tickets;