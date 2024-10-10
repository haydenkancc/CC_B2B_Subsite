import { useState } from "react";
import { Plus, Minus, Check, X } from "@phosphor-icons/react";
import laptop from "../../assets/laptop.png";
import { Link } from "react-router-dom";

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: 17.99},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", price: 24.99 },
    { id: 3, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", price: 17.99 },
];

function Bundle() {
    const [bundleQuantity, setBundleQuantity] = useState(1);

    const handleIncrease = () => {
        setBundleQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setBundleQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Prevent quantity from going below 1
    };

    const totalPrice = items.reduce((total, item) => total + item.price, 0) * bundleQuantity;

    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender mb-16 w-full">
            <div className="flex flex-col pl-4 pt-4">
                <div className="text-2xl font-medium p-2 ml-6">Wishlists</div>
                <div className="pt-8 flex flex-row justify-between">
                    <div className="flex flex-col ml-8">
                        <div className="text-2xl font-medium pb-6">Bugs' Wishlist</div>
                        <table className="w-164 bg-transparent">
                            <thead>
                                <tr className="text-oxford-blue border-b border-black">
                                    <th className="py-2 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Price:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id} className="border-b border-black">
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
                                        <td className="py-2 px-4 text-sm font-medium w-28">${item.price.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col ml-8 w-48 mr-10">
                        <div>Bundle Price:</div>
                        <div className="font-medium text-lg">${totalPrice.toFixed(2)}</div>
                        <div className="mt-4">Quantity:</div>
                        <div className="flex justify-center">
                            <button onClick={handleDecrease} className="p-2 bg-gray-200">
                                <Minus size={10} />
                            </button>
                            <input
                                type="number"
                                value={bundleQuantity}
                                readOnly
                                className="w-full mx-2 pl-3 border border-gray-300 focus:outline-none text-center"
                            />
                            <button onClick={handleIncrease} className="p-2 bg-gray-200">
                                <Plus size={10} />
                            </button>
                        </div>
                        <button className="border border-oxford-blue text-center px-4 py-1 hover:bg-oxford-blue hover:text-ghost-white mt-4">Add Wishlist to Cart</button>
                        <Link to={"/wishlist"} className="border border-oxford-blue text-center px-4 py-1 hover:bg-oxford-blue hover:text-ghost-white mt-2">Edit Wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bundle;
