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

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account'];

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
                <table className="w-full bg-transparent border-lavender mt-8">
                    <thead>
                        <tr className="text-oxford-blue border-b border-slate-300">
                            <th></th>
                            <th className="py-2 text-left">Product:</th>
                            <th className="py-2 px-4 text-left">Date Added:</th>
                            <th className="py-2 px-4 text-left">Price:</th>
                            <th className="py-2 px-4 text-left">Note:</th>
                            <th className="py-2 px-4 text-left">Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className="border-b border-slate-300">
                                <td className="w-12">
                                    <div className="ml-4">
                                        <MyCheckbox />
                                    </div>
                                </td>
                                <td className="py-2 flex flex-row">
                                    <img src={item.image} className="border w-32" />
                                    <div className="flex flex-col gap-y-1 ml-4 w-80 text-sm">
                                        <div>Item Code: {item.code}</div>
                                        <div>{item.name}</div>
                                        <div className="flex flex-row items-center gap-x-1">
                                            {/* <div>{item.onlineIcon}</div>
                                            <div>{item.onlineText}</div>
                                            <div className="ml-3">{item.storeIcon}</div>
                                            <div>{item.storeText}</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-sm font-medium w-40">
                                    <div className="flex flex-col gap-y-1">
                                        <div>{item.date}</div>
                                        <div>{item.user}</div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-sm font-medium w-28">{item.price}</td>
                                <td className="px-4 text-sm font-medium w-40">
                                    <div className="flex flex-col w-32 border rounded-md">
                                        <textarea
                                            placeholder="Add a note..."
                                            className="p-2 focus:outline-none bg-lavendar h-20"
                                        />
                                    </div>
                                </td>
                                <td className="py-2 px-4 w-40">
                                    <button className="flex flex-row justify-center items-center gap-x-2"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <ShoppingCart weight="light" size={24} />
                                        <BellRinging weight="light" size={24} />
                                        <Trash weight="light" size={24} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-row justify-between mt-6 px-8">
                    <div className="flex flex-row items-center">
                        <div className="font-semibold">Apply to Selected Items:</div>
                        <Actions />
                    </div>
                    <DialogTrigger>
                        <Link to="/cart" className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-8 ml-4">
                            Add All to Cart
                        </Link>
                    </DialogTrigger>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
