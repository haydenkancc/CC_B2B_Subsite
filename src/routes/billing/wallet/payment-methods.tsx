import { Plus, DotsThree, CreditCard, CaretDown } from '@phosphor-icons/react';
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";
import { Button, DialogTrigger } from 'react-aria-components';
import PaymentMethodModal from './payment-method-modal.tsx';
import CreditModal from '../terms/credit-modal.tsx';
import "../billing.css"
import { useState } from 'react';
import RealTerms from './real-terms.tsx';

const cards1 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023", default: "Default" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
    { id: 3,  image: mastercard, num: "**** **** **** 9375", expiry: "10/2025" },
]

function PaymentMethods() {

    return (
        <div className="mb-10">
            <div className="flex flex-row gap-x-4">
                <div className="flex flex-row gap-x-10 w-2/5">
                    <div className="flex flex-col gap-y-2.5 border grow p-6">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <CreditCard size={40} weight="light" />
                                <div className="text-xl font-semibold ml-2.5">Wallet</div>
                            </div>
                            <div>
                                <DialogTrigger>
                                    <Button className="bg-slate-100 hover:bg-slate-200 font-semibold p-2.5 border border-slate-400 rounded-md text-center flex flex-row items-center">
                                        <div className="text-sm rounded-md">New Card</div>
                                        <Plus size={14} className="ml-2.5" weight="bold" />
                                    </Button>
                                    <PaymentMethodModal />
                                </DialogTrigger>
                            </div>
                        </div>
                        {cards1.map((card, index) => (
                            <div key={index} className={`border border-slate-300 rounded-sm bg-slate-100 cursor-pointer ${index === cards1.length - 1 ? 'fade-out' : ''}`}>
                                <div className="flex flex-col p-4">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                            <div className="flex flex-col text-sm ml-2.5">
                                                <div>{card.num}</div>
                                                <div>{card.expiry}</div>
                                            </div>
                                        </div>
                                        {card.default && <div className="text-sm font-semibold">{card.default}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="relative flex-1">
                            <div className="bg-slate-100 border border-slate-400 rounded-full p-2.5 text-center mx-auto caret-wrapper cursor-pointer">
                                <CaretDown />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col border grow p-6 gap-y-5">
                    <div>
                        <div className="text-xl font-semibold my-1.5 pb-3">Terms</div>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">
                                <option value="" disabled selected>Please Select</option>
                                <option value="30">NET30</option>
                                <option value="60">NET60</option>
                                <option value="90">NET90</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-oxford-blue">
                                <CaretDown />
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-2.5 mt-5">
                            <div className="w-1/2">
                                <div className="font-medium mb-2">First Invoice Date</div>
                                <div className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">2024-04-26</div>
                            </div>
                            <div className="w-1/2">
                                <div className="font-medium mb-2">Last Invoice Date</div>
                                <div className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">2024-05-26</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-5 justify-between items-center">
                        <div>
                            <div className="absolute bg-white p-2.5 mt-10 ml-10 rounded-full border border-slate-400" />
                            <div className="flex flex-row">
                                <svg width="100" height="100">
                                <circle cx="50" cy="50" r="40" fill="oxford-blue" />
                                <path
                                    d="M50,10 A40,40 0 0,1 90,50 L50,50 Z"
                                    fill="white"
                                />
                                </svg>
                                <div className="flex flex-col mt-4 ml-2.5">
                                    <div className="text-lg font-bold">Credit Limit</div>
                                    <div className="font-medium">$7,500 /
                                        <span className="text-slate-500 font-medium text-sm">$10,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DialogTrigger>
                            <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold p-2.5">
                                Request Credit Adjustment
                            </Button>
                            <CreditModal />
                        </DialogTrigger>
                    </div>
                </div> */}
                
                <RealTerms />
            </div>
        </div>
    )
}

export default PaymentMethods;