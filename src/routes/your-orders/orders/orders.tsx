import '../../billing/billing.css'
import OrdersTable from "./orders-table.tsx";
import SidebarNav from "../../sidebar-nav/sidebar-nav.tsx";
import OrdersOverview from './orders-overview.tsx';
import OrdersTabs from '../../../components/tab-navigation/orders-tabs.tsx';
import CompletedTable from './completed-table.tsx';
import PendingTable from './pending-table.tsx';
import CancelledTable from './cancelled-table.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const tabs = [
    { id: 1, title: 'All Orders', number: "10", content: <OrdersTable /> },
    { id: 2, title: 'Completed', number: "4",  content: <CompletedTable /> },
    { id: 3, title: 'In Progress', number: "2",  content: <PendingTable /> },
    { id: 4, title: 'Cancelled', number: "4",  content: <CancelledTable /> },
]

function Orders() {
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
                    <div className="text-2xl font-medium">Order Management</div>
                </div>
                <div className="px-8 pt-8">
                    <OrdersOverview />
                </div>
                <OrdersTabs tabs={tabs} />
            </div>
        </div>
    )
}

export default Orders;