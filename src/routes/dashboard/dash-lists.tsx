import { useState } from "react";
import { Plus, Minus, Check, X, ShoppingCart, BellRinging } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import { Link } from "react-router-dom";
import visa from "../../assets/visa.png";

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: 17.99},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", price: 24.99 },
];

const invoices = [
    { id: 1, number: "CCINV000002", due: "2021-03-18", payable: "$15,300.00" },
    { id: 2, number: "CCINV000006", due: "2021-03-18", payable: "$7,900.00" },
]

function DashLists() {

    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender p-8 w-full">
            <div className="flex flex-row justify-between">
                <div className="text-2xl font-medium">Saved Lists</div>
                <div className="flex flex-row gap-x-2.5">
                    <div className="flex flex-col text-sm text-right">
                        <div>**** **** 9373</div>
                        <div>10/2023</div>
                    </div>
                    <img src={visa} className="w-18" />
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex flex-row justify-between gap-x-2.5">
                    <div className="w-1/2 text-sm">
                        <div className="font-medium mb-2">Available Credit</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-1.5 px-2.5 rounded-sm">$10,916.40</div>
                    </div>
                    <div className="w-1/2 text-sm">
                        <div className="font-medium mb-2">Outstanding Invoice</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-1.5 px-2.5 rounded-sm">$22,023.00</div>
                    </div>
                </div>
                <table className="w-full bg-transparent text-sm mt-2.5">
                    <thead>
                        <tr className="text-oxford-blue border-b border-black">
                            <th className="py-1.5 px-2.5 text-left">Number:</th>
                            <th className="py-1.5 px-2.5 text-left">Due Date:</th>
                            <th className="py-1.5 px-2.5 text-left">Payable:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(item => (
                            <tr key={item.id} className="border-b border-black">
                                <td className="py-1.5 px-2.5 w-28">{item.number}</td>
                                <td className="py-1.5 px-2.5 w-28">{item.due}</td>
                                <td className="py-1.5 px-2.5 w-28">{item.payable}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashLists;
