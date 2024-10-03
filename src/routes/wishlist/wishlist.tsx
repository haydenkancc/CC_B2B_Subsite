import React, { useState } from "react";
import NavbarTop from "../../components/navbar/navbar-top";
import NavbarBottom from "../../components/navbar/navbar-bottom";
import { Trash, Check, X, ShoppingCart, BellRinging } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import MyCheckbox from "../../components/form/my-checkbox";
import Actions from "./actions";

const pages = ['Dashboard', 'Orders', 'Billing', 'Wishlists', 'Tickets', 'Account'];

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: 17.99},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", price: 24.99 },
    { id: 3, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: 17.99 },
];

function Wishlist() {

    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender pb-32">
            <NavbarTop />
            <NavbarBottom pages={pages} />
            <div className="flex justify-center">
                <div className="max-w-[1440px] flex-grow pl-4 pt-4">
                    <div className="pt-8 pb-16">
                        <div className="text-4xl pb-6">
                            Wishlist
                        </div>
                        <table className="w-full bg-transparent border-lavender">
                            <thead>
                                <tr className="text-oxford-blue border-b border-black">
                                    <th></th>
                                    <th className="py-2 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Date Added:</th>
                                    <th className="py-2 px-4 text-left">Price:</th>
                                    <th className="py-2 px-4 text-left">Note:</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id} className="border-b border-black">
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
                                                    <div>{item.onlineIcon}</div>
                                                    <div>{item.onlineText}</div>
                                                    <div className="ml-3">{item.storeIcon}</div>
                                                    <div>{item.storeText}</div>
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
                                            <div className="flex flex-col w-32">
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
                        <div className="flex flex-row justify-between mt-8">
                            <div className="flex flex-row items-center">
                                <div className="font-semibold uppercase">Apply this action to for all items selected:</div>
                                <Actions />
                            </div>
                            <button className="uppercase bg-oxford-blue text-ghost-white px-5 py-1 rounded-sm font-semibold">Add all to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
