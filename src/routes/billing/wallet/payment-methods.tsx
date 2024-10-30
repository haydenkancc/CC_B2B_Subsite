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
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024", default: "Set" },
    { id: 3,  image: mastercard, num: "**** **** **** 9375", expiry: "10/2025", default: "Set" },
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
                                    <div className="w-full">
                                        {/* <div className="flex flex-row">
                                            <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                            <div className="flex flex-col text-sm ml-2.5">
                                                <div>{card.num}</div>
                                                <div>{card.expiry}</div>
                                            </div>
                                        </div> */}
                                        {card.default === "Default" &&
                                            <div className="flex flex-row justify-between">
                                                <div className="flex flex-row items-center">
                                                    <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                                    <div className="flex flex-col text-sm ml-2.5">
                                                        <div>{card.num}</div>
                                                        <div>{card.expiry}</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm font-semibold w-16 flex justify-end">{card.default}</div>
                                            </div>
                                        }
                                        {card.default === "Set" &&
                                            <div className="flex flex-row justify-between">
                                                <div className="flex flex-row items-center">
                                                    <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                                    <div className="flex flex-col text-sm ml-2.5">
                                                        <div>{card.num}</div>
                                                        <div>{card.expiry}</div>
                                                    </div>
                                                </div>
                                                <div className="text-transparent hover:text-black text-sm font-semibold w-16 flex justify-end">{card.default}</div>
                                            </div>
                                        }
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
                <RealTerms />
            </div>
        </div>
    )
}

export default PaymentMethods;