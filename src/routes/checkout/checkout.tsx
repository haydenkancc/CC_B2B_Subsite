import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import CheckoutItems from './checkout-items.tsx';
import CheckoutSummary from './checkout-summary.tsx';
import PaymentDetails from './payment-details.tsx';

function Checkout() {

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
                    <div className="text-2xl">Checkout</div>
                </div>
                <div className="flex px-8 gap-x-5 pb-20">
                    <div className="flex flex-col grow">
                        <CheckoutItems />
                    </div>
                    <CheckoutSummary />
                </div>
            </div>
        </div>
    )
}

export default Checkout;