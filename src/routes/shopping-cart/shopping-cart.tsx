import { useState } from "react";
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import { Trash, Check, X, Plus, Minus } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import MyCheckbox from "../../components/form/my-checkbox";
import CheckoutSummary from "./checkout-summary.tsx";
import Recent from "./recent.tsx";

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account'];

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: "$17.99"},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", price: "$24.99" },
    { id: 3, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: "$17.99" },
];

function ShoppingCart() {
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
        <div className="bg-lavender/10 text-oxford-blue border-lavender pb-32">
            <NavbarTopAccount />
            <NavbarBottom pages={pages} />
            <div className="flex justify-center">
                <div className="max-w-[1440px] flex-grow pl-4 pt-4">
                    <div className="pt-8 pb-16">
                        <div className="text-4xl pb-6">Wile's Shopping Cart</div>
                        <table className="w-full bg-transparent border-lavender mt-8">
                            <thead>
                                <tr className="text-oxford-blue border-b border-black">
                                    <th></th>
                                    <th className="py-2 text-left">Product:</th>
                                    <th className="py-2 px-4 text-center">Quantity:</th>
                                    <th className="py-2 px-4 text-center pl-10">Subtotal:</th>
                                    <th className="py-2 px-4 text-center">Actions:</th>
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
                                            <img src={item.image} className="border w-32" alt={item.name} />
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
                                        <td className="py-2 px-4 text-sm text-center font-medium w-40">
                                            <div className="flex justify-center">
                                                <button onClick={() => handleDecrease(item.id)} className="p-2 bg-gray-200">
                                                    <Minus size={10} />
                                                </button>
                                                <input
                                                    type="number"
                                                    value={itemQuantities[item.id]} // Display the quantity
                                                    readOnly
                                                    className="w-full mx-2 pl-3 border border-gray-300 focus:outline-none text-center"
                                                />
                                                <button onClick={() => handleIncrease(item.id)} className="p-2 bg-gray-200">
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
                        <div className="mt-10">
                            <CheckoutSummary totalPrice={totalPrice} />
                        </div>
                        <div className="mt-10">
                            <Recent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
