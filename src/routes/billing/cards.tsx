import card from "../../assets/card.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import { CaretLeft, CaretRight, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, DialogTrigger } from "react-aria-components";
import PaymentMethodModal from "./wallet/payment-method-modal";

const cards = [
    { id: 1, image: visa, num: "**** **** **** 9373", expiry: "10/2023" },
    { id: 2, image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
];

function Cards() {
    const [changeCard, setChangeCard] = useState(false);
    const [hoveredCardId, setHoveredCardId] = useState(null);

    return (
        <div className="flex flex-row gap-x-8">
            <div className="border rounded-lg p-5">
                <div className="flex flex-row gap-x-5">
                    <div className="flex flex-col justify-between gap-y-1.5 py-2.5 pr-5">
                        <div className="text-sm">Default Card</div>
                        {!changeCard &&
                            <button className="w-52 text-sm bg-black hover:bg-stone-700 text-white p-2 rounded" onClick={() => setChangeCard(true)}>Change Payment Card</button>
                        }
                        {changeCard &&
                            <button className="w-52 text-sm bg-black hover:bg-stone-700 text-white p-2 rounded" onClick={() => setChangeCard(false)}>Cancel</button>
                        }
                    </div>
                    <img src={card} className="h-40" />
                </div>
            </div>
            <div className="flex flex-col gap-y-2.5 grow">
                {cards.map((card) => (
                    <div>
                        {!changeCard &&
                            <div key={card.id} className="border rounded-lg">
                                <div className="flex flex-col p-4">
                                    <div className="w-full">
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-row items-center">
                                                <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                                <div className="flex flex-col text-sm ml-2.5">
                                                    <div>{card.num}</div>
                                                    <div>{card.expiry}</div>
                                                </div>
                                            </div>
                                            <div>
                                                {hoveredCardId !== card.id ? (
                                                    <Trash size={20} onMouseEnter={() => setHoveredCardId(card.id)} className="cursor-pointer" />
                                                ) : (
                                                    <Trash size={20} weight="fill" onMouseLeave={() => setHoveredCardId(null)} className="cursor-pointer" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {changeCard &&
                            <div key={card.id} className="border rounded-lg hover:bg-slate-100 cursor-pointer shadow" onClick={() => setChangeCard(false)}>
                                <div className="flex flex-col p-4">
                                    <div className="w-full">
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-row items-center">
                                                <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                                <div className="flex flex-col text-sm ml-2.5">
                                                    <div>{card.num}</div>
                                                    <div>{card.expiry}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-x-5">
                        <CaretLeft className="cursor-pointer" />
                        <div className="flex flex-row items-center gap-x-2 py-1">
                            <div className="text-sm">Page</div>
                            <input type="text" placeholder="1" className="text-sm text-black focus:outline-none w-12 text-center border rounded-lg py-0.5" />
                            <div className="text-sm">of 2</div>
                        </div>
                        <CaretRight className="cursor-pointer" />
                    </div>
                    <DialogTrigger>
                        <Button className="focus:outline-none hover:bg-tabs-gray px-2.5 py-1.5 border rounded-lg text-center">
                            <div className="text-sm">New Card</div>
                        </Button>
                        <PaymentMethodModal />
                    </DialogTrigger>
                </div>
            </div>
        </div>
    );
}

export default Cards;
