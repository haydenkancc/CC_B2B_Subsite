import { useEffect, useState } from "react";
import { Trash, Check, X, Plus, Minus } from "@phosphor-icons/react";
import laptop2 from "../../assets/laptop2.png";
import CheckoutSummary from "./checkout-summary.tsx";
import Recent from "./recent.tsx";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import CartItems from "./cart-items.tsx";

const items = [
    { id: 1, image: laptop2, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", online: "Yes", store: "No", date: "2024-10-02", user: "Porky Pig", price: 17.99},
    { id: 2, image: laptop2, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", online: "Yes", store: "Yes", date: "2024-09-28", user: "Bugs Bunny", price: 24.99 },
    { id: 3, image: laptop2, name: "G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)", code: "HHACMC0612", online: "Yes", store: "No", date: "2024-10-02", user: "Porky Pig", price: 17.99 },
];

function ShoppingCart() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex mb-20">
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
                <div className="px-8 pt-5">
                    <div className="text-2xl">Shopping Cart (3 Items)</div>
                </div>
                <div className="px-8 pt-8">
                    <div className="flex flex-row gap-x-5">
                        <CartItems />
                        <CheckoutSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
