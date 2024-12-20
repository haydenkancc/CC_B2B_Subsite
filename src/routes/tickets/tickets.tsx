import TicketTable from './ticket-table.tsx';
import { useEffect } from 'react';
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import PageNavigation from '../../components/page-navigation/page-navigation.tsx';
import OpenTable from './open-table.tsx';
import ClosedTable from './closed-table.tsx';
import ProfileTabs from '../../components/tab-navigation/profile-tabs.tsx';

const tabs = [
    { id: 1, title: 'All', content: <TicketTable /> },
    { id: 2, title: 'Open', content: <OpenTable /> },
    { id: 3, title: 'Closed', content: <ClosedTable /> },
]

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
                <div className="px-8 pt-5 pb-8">
                    <div className="text-2xl">Ticket Management</div>
                </div>
                <div className="flex flex-col gap-y-4 px-8 pb-20">
                    <ProfileTabs tabs={tabs} />
                    <PageNavigation />
                </div>
            </div>
        </div>
    )
}

export default Tickets;