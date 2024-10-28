import { useState } from "react";
import { Plus, Minus, Check, X } from "@phosphor-icons/react";
import laptop2 from "../../assets/laptop2.png";
import { Link } from "react-router-dom";
import { DialogTrigger } from "react-aria-components";

const items = [
    { id: 1, image: laptop2, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", online: "Yes", store: "No", date: "2024-10-02", user: "Porky Pig", price: 17.99},
    { id: 2, image: laptop2, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", online: "Yes", store: "Yes", date: "2024-09-28", user: "Bugs Bunny", price: 24.99 },
    { id: 3, image: laptop2, name: "G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)", code: "HHACMC0612", online: "Yes", store: "No", date: "2024-10-02", user: "Porky Pig", price: 17.99 },
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
        <div className="text-oxford-blue mb-16">
            <div className="flex flex-col pt-8">
                <div className="px-8 flex flex-row gap-x-16">
                    <div className="flex flex-col grow">
                        <div className="text-2xl font-medium pb-6">Wile's List 1</div>
                        <table className="bg-transparent">
                            <thead>
                                <tr className="text-oxford-blue border-b border-slate-300">
                                    <th className="py-2 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Price:</th>
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col w-48">
                        <div>Bundle Price:</div>
                        <div className="font-medium text-lg">${totalPrice.toFixed(2)}</div>
                        <div className="mt-4 mb-2">Quantity:</div>
                        <div className="flex justify-center border border-slate-300 rounded-full">
                            <button onClick={handleDecrease} className="p-3 border-r rounded-l-full hover:bg-slate-100">
                                <Minus size={8} />
                            </button>
                            <input
                                type="number"
                                value={bundleQuantity}
                                readOnly
                                className="w-full pl-3 focus:outline-none text-center"
                            />
                            <button onClick={handleIncrease} className="p-3 border-l rounded-r-full hover:bg-slate-100">
                                <Plus size={8} />
                            </button>
                        </div>
                        <DialogTrigger>
                            <Link to="/cart" className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-4">
                                Add List to Cart
                            </Link>
                        </DialogTrigger>
                        <DialogTrigger>
                            <Link to="/wishlist" className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-2">
                                Edit List
                            </Link>
                        </DialogTrigger>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bundle;
