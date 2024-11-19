import '../../billing/billing.css'
import SidebarNav from "../../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import DetailItems from './detail-items.tsx';
import DetailSummary from './detail-summary.tsx';

function OrderDetails() {
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
                    <div className="text-2xl">Order Details</div>
                </div>
                <div className="flex flex-row gap-x-5 px-8 pb-20">
                    <DetailItems />
                    <DetailSummary />
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;