import React, { useState, useEffect } from "react";
import NavbarTop from "../../components/navbar/navbar-top";
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import { Trash, Check, X, ShoppingCart, BellRinging } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import MyCheckbox from "../../components/form/my-checkbox";
import Actions from "./actions";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, DialogTrigger } from "react-aria-components";
import { Link } from "react-router-dom";
import ListItems from "./list-items.tsx";

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", quantity: "1", price: "$17.99"},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", quantity: "1", price: "$24.99" },
    { id: 3, image: laptop, name: "G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)", code: "HHACMC0612", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", quantity: "1", price: "$17.99" },
];

function Wishlist() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [isHovered, setIsHovered] = useState(false);
    
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
                    <div className="text-2xl">Wile's List 1</div>
                </div>
                <div className="flex flex-col gap-y-8 px-8 pt-8">
                    <ListItems />
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <div className="font-semibold">Apply to Selected Items:</div>
                            <Actions />
                        </div>
                        <Link to="/checkout" className="text-sm font-medium text-center bg-black hover:bg-stone-700 text-white py-1.5 rounded px-2.5">Add All to Cart</Link>
                    </div>
                </div>
            </div>        
        </div>
    );
}

export default Wishlist;
