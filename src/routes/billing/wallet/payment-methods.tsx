import { Plus, DotsThree } from '@phosphor-icons/react';
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";
import { Button, DialogTrigger } from 'react-aria-components';
import PaymentMethodModal from './payment-method-modal.tsx';

const cards1 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
    { id: 3,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2025" },
]
const cards2 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2026" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2027" },
    { id: 3,  image: visa, num: "**** **** **** 9374", expiry: "10/2028" },
]

function PaymentMethods() {

    return (
        <div className="mb-10">
            <div className="flex flex-col border rounded-sm px-4 py-8 gap-y-8">
                <div className="flex flex-row justify-between gap-x-10 items-center">
                    {cards1.map((card, index) => (
                        <div key={index} className="border rounded-lg w-1/3">
                            <div className="flex flex-col p-8">
                                <div className="flex flex-row">
                                    <img src={card.image} className="border border-slate-300 rounded-lg h-14" />
                                    <div className="flex flex-col ml-2.5">
                                        <div>{card.num}</div>
                                        <div>{card.expiry}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-row justify-between">
                                <div>Edit</div>
                                <div>Delete</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-between gap-x-10 items-center">
                    {cards2.map((card, index) => (
                        <div key={index} className="border rounded-lg w-1/3">
                            <div className="flex flex-col p-8">
                                <div className="flex flex-row">
                                    <img src={card.image} className="border border-slate-300 rounded-lg h-14" />
                                    <div className="flex flex-col ml-2.5">
                                        <div>{card.num}</div>
                                        <div>{card.expiry}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-row justify-between">
                                <div>Edit</div>
                                <div>Delete</div>
                            </div>
                        </div>
                    ))}
                </div>
                <DialogTrigger>
                    <Button className="credit-Button w-56 text-center flex flex-row items-center">
                        <Plus size={14} className="mr-2.5" />
                        New Payment Method
                    </Button>
                    <PaymentMethodModal />
                </DialogTrigger>
            </div>
        </div>
    )
}

export default PaymentMethods;