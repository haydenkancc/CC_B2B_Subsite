import { CaretDown } from "@phosphor-icons/react";
import { Button, DialogTrigger } from "react-aria-components";
import CreditModal from "../terms/credit-modal";
import { useState } from "react";

function RealTerms() {

    const [hoveredSide, setHoveredSide] = useState('terms-locked');

    return (
        <div
            className="flex flex-col border grow p-6 gap-y-5 relative"
        >
            {hoveredSide === 'terms-locked' && (
                <button className="absolute font-bold text-lg border w-56 p-2.5 rounded-md bg-slate-100 hover:bg-slate-200 border-slate-400 z-10"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => setHoveredSide('terms-unlocked')}
                >
                    Apply for Net Terms
                </button>
            )}

            <div className={`${hoveredSide === 'terms-locked' ? 'opacity-30' : 'opacity-100'}`}>
                <div className="text-xl font-semibold my-1.5 pb-3">Net Terms</div>
                <div className="flex flex-row gap-x-2.5">
                    <div className="w-full">
                        <div className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">NET30</div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-2.5 mt-5">
                    <div className="w-full">
                        <div className="font-medium mb-2">Outstanding Invoice Balance</div>
                        <div className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">$22,023.00</div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-row gap-x-5 justify-between items-center ${hoveredSide === 'terms-locked' ? 'opacity-30' : 'opacity-100'}`}>
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
        </div>
    )
}

export default RealTerms;