import { useState } from "react";
import { Plus, Minus, Check, X, ShoppingCart, BellRinging, User, UserCircle } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import { Link } from "react-router-dom";
import visa from "../../assets/visa.png";

const logs = [
    { id: 1, log: "Utility Bill", date: "2024-08-07" },
    { id: 2, log: "Bank Statement", date: "2024-01-18" },
]

function DashAccount() {

    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender p-8 w-full">
            <div className="flex flex-row justify-between">
                <div className="text-2xl font-medium">Account</div>
                <div className="flex flex-row gap-x-2.5">
                    <div className="flex flex-col text-sm text-right">
                        <div>Wile E. Coyote</div>
                        <div>ACME Corporation</div>
                    </div>
                    <UserCircle size={40} />
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                    <div className="text-sm flex flex-row items-center">
                        <div className="font-medium">Default Shipping Address:</div>
                        <div className="bg-ghost-white border border-slate-300 text-oxford-blue py-1 px-2 rounded-sm ml-1.5">Head Office</div>
                    </div>
                    <div className="text-sm flex flex-row mt-2.5 items-center">
                        <div className="font-medium">Default Billing Address:</div>
                        <div className="bg-ghost-white border border-slate-300 text-oxford-blue py-1 px-2 rounded-sm ml-1.5">Head Office</div>
                    </div>
                </div>
                <table className="w-full bg-transparent text-sm mt-2.5">
                    <thead>
                        <tr className="text-oxford-blue border-b border-black">
                        <th className="py-1.5 px-2.5 text-left">Log:</th>
                            <th className="py-1.5 px-2.5 text-left">Date Uploaded:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map(item => (
                            <tr key={item.id} className="border-b border-black">
                                <td className="py-1.5 px-2.5 w-28">{item.log}</td>
                                <td className="py-1.5 px-2.5 w-28">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashAccount;
