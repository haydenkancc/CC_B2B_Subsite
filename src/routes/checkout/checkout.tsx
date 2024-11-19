// import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
// import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
// import { useEffect } from 'react';
// import CheckoutItems from './checkout-items.tsx';
// import CheckoutSummary from './checkout-summary.tsx';
// import PaymentDetails from './payment-details.tsx';

// function Checkout() {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);

//     return (
//         <div className="flex">
//             <div className="">
//                 <SidebarNav />
//             </div>
//             <div className="grow">
//                 <div className="sam-title-section">
//                     <div className="sam-title">
//                         <div className="w-8 h-8 flex items-center justify-center">
//                             <MagnifyingGlassIcon />
//                         </div>
//                         <div className="text-[#808080]">
//                             Search for anything
//                         </div>
//                     </div>
//                 </div>
//                 <div className="px-8 pt-5 pb-8">
//                     <div className="text-2xl">Checkout</div>
//                 </div>
//                 <div className="flex px-8 gap-x-5 pb-20">
//                     <div className="flex flex-col grow">
//                         <CheckoutItems />
//                     </div>
//                     <CheckoutSummary />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Checkout;

import { Link } from "react-router-dom";
import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { CaretRight } from "@phosphor-icons/react";
import CheckoutItems from "./checkout-items";
import CheckoutSummary from "./checkout-summary";
import { useEffect } from "react";

function Checkout() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>


            <div className="max-w-[1440px] px justify-center mx-auto px-4 pb-20">
                <div className="pt-8">
                    <div className="flex flex-row items-center gap-x-2.5">
                        <Link to="/landing-new">Home</Link>
                        <CaretRight />
                        <Link to="/cart">Shopping Cart</Link>
                        <CaretRight />
                        <div>Checkout</div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-col grow">
                            <CheckoutItems />
                        </div>
                        <CheckoutSummary />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <FooterTop />
                <FooterBottom />
            </div>
        </div>
    )
}

export default Checkout;