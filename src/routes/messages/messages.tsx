import '../billing/billing.css'
import MessageTable from "./message-table.tsx";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import NotificationTabs from "../../components/tab-navigation/notification-tabs.tsx";
import PromotionsTable from './promotions-table.tsx';
import SystemTable from './system-table.tsx';
import { useEffect } from 'react';

const tabs = [
    { id: 1, title: 'All', content: <MessageTable /> },
    { id: 2, title: 'Promotions', content: <PromotionsTable /> },
    { id: 3, title: 'System', content: <SystemTable /> },
]

function Messages() {

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
                    <div className="text-2xl">Notifications</div>
                </div>
                <div className="">
                    <NotificationTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Messages;