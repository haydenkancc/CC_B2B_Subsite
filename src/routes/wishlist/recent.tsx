import { useState } from "react";
import { Plus, Minus, Check, X, ShoppingCart, BellRinging } from "@phosphor-icons/react";
import laptop2 from "../../assets/laptop2.png";
import { Link } from "react-router-dom";
import { Button, DialogTrigger } from "react-aria-components";

const items = [
    { id: 1, image: laptop2, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 17.99},
    { id: 2, image: laptop2, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", online: "Yes", store: "Yes", date: "2024-09-28", user: "Bugs Bunny", price: 24.99 },
    { id: 3, image: laptop2, name: "G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)", code: "HHACMC0612", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 17.99 },
];

function Recent() {

    return (
        <div className="text-oxford-blue mb-8 w-full">
            <div className="flex flex-col pt-4">
                <div className="text-2xl font-medium p-2 ml-6">Recently Viewed Items</div>
                <div className="flex flex-col px-8">
                    <table className="w-full bg-transparent">
                        <thead>
                            <tr className="text-oxford-blue border-b border-slate-300">
                                <th className="py-2 text-left">Product:</th>
                                <th className="py-2 px-4 text-left">Price:</th>
                                <th className="py-2 px-4 text-left">Actions:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id} className="border-b border-slate-300">
                                    <td className="py-2 flex flex-row">
                                        <img src={item.image} className="border w-32" alt={item.name} />
                                        <div className="flex flex-col gap-y-1 ml-4 w-80 text-sm">
                                            <div>Item Code: {item.code}</div>
                                            <div>{item.name}</div>
                                            <div className="flex flex-row items-center gap-x-5">
                                                {item.online === "Yes" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <Check weight="bold" color="#16a34a" />
                                                        <div className="text-sm text-green-600">Available Online</div> 
                                                    </div>
                                                }
                                                {item.online === "No" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <X weight="bold" color="#ef4444" />
                                                        <div className="text-sm text-red-500">Unavailable Online</div> 
                                                    </div>
                                                }
                                                {item.store === "Yes" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <Check weight="bold" color="#16a34a" />
                                                        <div className="text-sm text-green-600">Available In-Store</div> 
                                                    </div>
                                                }
                                                {item.store === "No" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <X weight="bold" color="#ef4444" />
                                                        <div className="text-sm text-red-500">Unavailable In-Store</div> 
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-sm font-medium w-28">${item.price.toFixed(2)}</td>
                                    <td className="py-2 px-4 w-40">
                                        <button className="flex flex-row justify-center items-center gap-x-2"
                                        >
                                            <ShoppingCart weight="light" size={24} />
                                            <BellRinging weight="light" size={24} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-end">
                        <DialogTrigger>
                            <Link to="/cart" className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-4">
                                Add All to Cart
                            </Link>
                        </DialogTrigger>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recent;
