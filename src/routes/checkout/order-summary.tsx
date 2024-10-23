import laptop from "../../assets/laptop.png";
import { CaretDown, Check, CreditCard, X } from "@phosphor-icons/react";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import { Button, DialogTrigger } from "react-aria-components";
import fedex from "../../assets/fedex.png";
import NewContactModal from "../account/contacts/new-contact-modal";
import PaymentDetails from "./payment-details";

const items = [
    { id: 1, image: laptop, name: "Macally Lightning USB Cable White (MISYNCABLEL10W)", code: "HHACMC0612", onlineIcon: <X weight="bold" />, onlineText: "Unavailable Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", quantity: "1", price: "$17.99"},
    { id: 2, image: laptop, name: "ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)", code: "NAFOX00001", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <Check weight="bold" />, storeText: "Available In-Store", date: "2024-09-28", user: "Bugs Bunny", quantity: "1", price: "$24.99" },
    { id: 3, image: laptop, name: "G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)", code: "HHACMC0612", onlineIcon: <Check weight="bold" />, onlineText: "Available Online", storeIcon: <X weight="bold" />, storeText: "Unavailable In-Store", date: "2024-10-02", user: "Porky Pig", quantity: "1", price: "$17.99" },
];

const shipping = [
    {id: 1, image:fedex, name: "Fedex Delivery", time: "Delivery: 2-3 days", cost: "Free" },
    {id: 2, image:fedex, name: "Fedex Delivery", time: "Delivery: 1-2 days", cost: "$12.00" },
]

const cards1 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023", default: "Default" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
    { id: 3,  image: mastercard, num: "**** **** **** 9375", expiry: "10/2025" },
]

const pays = [
    { id: 1, image: laptop, name: "Subtotal",  total: "$60.97"},
    { id: 2, image: laptop, name: "HST",  total: "$7.93" },
    { id: 3, image: laptop, name: "Total",  total: "$68.90" },
];

function OrderSummary() {
    return (
        <div className="flex flex-row gap-x-6 mb-20">
            <div className="flex flex-col gap-y-6 grow">
                <div className="flex flex-col border rounded-sm p-6">
                    <div className="font-semibold mb-4">Order Information</div>
                    {items.map(item => (
                        <div className="py-2 flex flex-row items-center justify-between">
                            <div className="flex flex-row">
                                <img src={item.image} className="border w-32" />
                                <div className="flex flex-col gap-y-1 ml-4 w-80 text-sm">
                                    <div>Item Code: {item.code}</div>
                                    <div>{item.name}</div>
                                </div>
                            </div>
                            <div className="font-medium text-sm px-2">{item.quantity}</div>
                            <div className="py-2 px-4 text-sm font-medium px-4">{item.price}</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col border rounded-sm p-6 gap-y-2">
                    <div className="font-semibold mb-4">Shipping Method</div>
                        {shipping.map(item => (
                            <button className="flex flex-row items-center justify-between border hover:bg-slate-100 rounded p-4 text-left">
                                <div className="flex flex-row items-center">
                                    <img src={item.image} className="p-2 h-14" />
                                    <div className="flex flex-col gap-y-1 ml-4 w-80 text-sm">
                                        <div className="font-semibold">{item.name}</div>
                                        <div>{item.time}</div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                <div className="py-2 px-4 text-sm font-medium">{item.cost}</div>
                                </div>
                            </button>
                        ))}
                </div>
                <PaymentDetails />
            </div>
            <div className="flex flex-col border rounded-sm p-6 w-80 h-108">
                <div className="flex flex-row justify-between">
                    <div className="font-semibold mb-4">Summary</div>
                    <DialogTrigger>
                        <Button className="text-sm font-semibold mb-4 border-b-2 border-white hover:border-b-2 hover:border-black focus:outline-none">
                            Export Quote
                        </Button>
                    </DialogTrigger>
                </div>
                <div className="flex flex-col text-sm gap-y-2">
                    <div className="flex flex-row justify-between">
                        <div>Total Items:</div>
                        <div className="font-semibold">3</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>Shipping:</div>
                        <div className="font-semibold">Free</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>Net Terms</div>
                        <div className="font-semibold">30 Days</div>
                    </div>
                    <div className="flex flex-col py-2.5 gap-y-1">
                        <div>Billing Address:</div>
                        <div className="border rounded mt-1">
                            <div className="p-2 border-b">75 West Wilmot Street</div>
                            <div className="flex flex-row">
                                <div className="p-2">Toronto, ON, L4B 1K7</div>
                            </div>
                        </div>
                    </div>
                    {pays.map(item => (
                        <div className="flex flex-row justify-between">
                            <div>{item.name}</div>
                            <div className="font-semibold">{item.total}</div>
                        </div>
                    ))}
                    <DialogTrigger>
                        <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-2">
                            Send to Authorized Buyer
                        </Button>
                    </DialogTrigger>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;