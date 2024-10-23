import TicketTable from './ticket-table.tsx';
import { useEffect } from 'react';
import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import TicketContent from './ticket-content.tsx';
import { Link } from 'react-router-dom';

function TicketOpen() {
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
                <div className="px-8 py-4">
                    <Link to={"/tickets"} className="text-black underline text-sm">
                        Return to Tickets
                    </Link>
                </div>
                <div className="px-8">
                    <div className="text-xl font-medium">Ticket #172934</div>
                </div>
                <div className="py-4">
                    <TicketContent />
                </div>
            </div>
        </div>
    )
}

export default TicketOpen;