import { Link } from "react-router-dom";
import { Circle, MapPin, RadioButton } from "@phosphor-icons/react";
import { useState } from "react";

function CheckoutSummary() {

    const [deliver, setDeliver] = useState('deliver-yes');

    return (
        <div className="flex flex-col gap-y-2.5 w-84">
            <div className="border rounded-sm p-5 bg-tabs-gray w-84">
                <div className="flex flex-col gap-y-2.5">
                    <div className="font-medium">How would you like your order?</div>
                    {deliver === 'deliver-yes' &&
                        <div className="flex flex-col gap-y-1.5">
                            <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                <RadioButton size={20} weight="fill" />
                                <div className="text-sm">Get it delivered</div>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setDeliver('deliver-no')}>
                                <Circle size={20} />
                                <div className="text-sm">Pick up at Richmond Hill</div>
                            </div>
                        </div>
                    }
                    {deliver === 'deliver-no' &&
                        <div className="flex flex-col gap-y-1.5">
                            <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setDeliver('deliver-yes')}>
                                <Circle size={20} />
                                <div className="text-sm">Get it delivered</div>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                <RadioButton size={20} weight="fill" />
                                <div className="text-sm">Pick up at Richmond Hill</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {deliver === 'deliver-yes' &&
                <div className="border rounded-sm p-5 bg-tabs-gray">
                    <div className="flex flex-col gap-y-2.5">
                        <div className="flex flex-row items-center gap-x-1.5">
                            <MapPin size={20} weight="fill" />
                            <div className="font-medium">What is your postcode?</div>
                        </div>
                        <div className="text-sm font-light">This information helps us estimate shipping and delivery.</div>
                        <div className="flex flex-row items-center">
                            <input type="text" placeholder="" className="border text-sm text-black focus:outline-none grow px-3 py-1.5" />
                            <button className="font-semibold text-white text-sm bg-blue-900 px-4 py-1.5">Search</button>
                        </div>
                    </div>
                </div>
            }
            <div className="border rounded-sm p-5 bg-tabs-gray">
                <div className="flex flex-col gap-y-2.5">
                    <div className="font-medium border-b pb-2.5">Order Summary</div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Product Subtotal:</div>
                        <div className="text-sm font-light">$100.00</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Environmental Handling Fees (EHF):</div>
                        <div className="text-sm font-light">$1.80</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Taxes:</div>
                        <div className="text-sm font-light">$13.00</div>
                    </div>
                    <div className="flex flex-row justify-between items-center border-y py-2.5">
                        <div className="font-medium">Total:</div>
                        <div className="text-sm font-medium text-red-600">$114.80</div>
                    </div>
                    <Link to="/checkout" className="text-sm font-medium text-center bg-black hover:bg-stone-700 text-white py-2 rounded mt-2.5">Proceed to Checkout</Link>
                </div>
            </div>
        </div>
    );
}

export default CheckoutSummary;
