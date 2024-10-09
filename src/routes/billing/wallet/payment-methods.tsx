import { Plus, DotsThree } from '@phosphor-icons/react';
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";

const cards = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
]

function PaymentMethods() {

    return (
        <div>
            <div className="border border-oxford-blue rounded-sm flex flex-col w-full">
                {cards.map((card, index) => (
                    <div key={index}>
                    <div className="flex justify-between items-center p-10">
                        <div className="flex flex-row items-center">
                            <img src={card.image} className="border border-slate-300 rounded-lg h-14 ml-4" />
                            <div className="flex flex-col ml-2.5">
                                <div>{card.num}</div>
                                <div>{card.expiry}</div>
                            </div>
                        </div>
                        <DotsThree size={24} weight="bold" />
                    </div>
                    {index < cards.length - 1 && (
                        <hr className="border-t border-gray-400 my-2" />
                    )}
                    </div>
                ))}
            </div>
            <div className="border border-oxford-blue rounded-lg px-4 py-2 w-60 flex flex-row items-center mt-4">
                <Plus size={14} />
                <button className="ml-2.5">New Payment Method</button>
            </div>
        </div>
    )
}

export default PaymentMethods;