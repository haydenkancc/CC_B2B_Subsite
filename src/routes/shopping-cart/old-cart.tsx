import { useEffect, useState } from "react";
import { Trash, Check, X, Plus, Minus } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import CheckoutSummary from "./checkout-summary.tsx";
import Recent from "./recent.tsx";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: "$17.99"},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", price: "$24.99" },
    { id: 3, image: laptop, name: "G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)", code: "HHACMC0612", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: "$17.99" },
];

function OldCart() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Initialize item quantities
    const [itemQuantities, setItemQuantities] = useState(
        items.reduce((acc, item) => {
            acc[item.id] = 1; // Start each item quantity at 1
            return acc;
        }, {})
    );

    const handleIncrease = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    const handleDecrease = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(prevQuantities[id] - 1, 1), // Ensure quantity doesn't go below 1
        }));
    };

    const totalPrice = items.reduce((total, item) => {
        return total + parseFloat(item.price.replace('$', '')) * itemQuantities[item.id];
    }, 0);

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
                <div className="px-8">
                    <table className="w-full bg-transparent border-lavender mt-8">
                        <thead>
                            <tr className="text-oxford-blue border-b border-slate-300">
                                <th className="py-2 text-left">Product:</th>
                                <th className="py-2 px-4 text-center">Quantity:</th>
                                <th className="py-2 px-4 text-center pl-10">Subtotal:</th>
                                <th className="py-2 px-4 text-center">Actions:</th>
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
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-sm text-center font-medium w-48">
                                        <div className="flex justify-center border border-slate-300 rounded-full">
                                            <button onClick={() => handleDecrease(item.id)} className="p-3 border-r rounded-l-full hover:bg-slate-100">
                                                <Minus size={10} />
                                            </button>
                                            <input
                                                type="number"
                                                value={itemQuantities[item.id]} // Display the quantity
                                                readOnly
                                                className="w-full pl-3 focus:outline-none text-center"
                                            />
                                            <button onClick={() => handleIncrease(item.id)} className="p-3 border-l rounded-r-full hover:bg-slate-100">
                                                <Plus size={10} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-sm text-center w-40 pl-10">
                                        <div className="flex flex-col">
                                            <div className="font-medium">{`$${(parseFloat(item.price.replace('$', '')) * itemQuantities[item.id]).toFixed(2)}`}</div>
                                            <div>({item.price} each)</div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 w-40">
                                        <button className="flex flex-row justify-center items-center gap-x-2 mx-auto">
                                            <Trash weight="light" size={24} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-10 px-8">
                    <CheckoutSummary totalPrice={totalPrice} />
                </div>
                <div className="mt-10 px-8">
                    <Recent />
                </div>
            </div>
        </div>
    );
}

export default OldCart;
