import './terms.css';
import Invoices from './invoices.tsx';
import { CaretDown } from '@phosphor-icons/react';
import { Button, DialogTrigger } from 'react-aria-components';
import CreditModal from './credit-modal.tsx';

function Terms() {
    return (
        <div>
            <div className="flex flex-col border rounded-sm px-4 py-8 gap-y-8">
                <div className="flex flex-row justify-between gap-x-10 items-center">
                    <div className="w-1/3">
                        <div className="font-medium mb-2">Terms</div>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">
                                <option value="" disabled selected>Please Select</option>
                                <option value="30">NET30</option>
                                <option value="60">NET60</option>
                                <option value="90">NET90</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-oxford-blue">
                                <CaretDown />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="font-medium mb-2">First Invoice Date</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">2019-04-26</div>
                    </div>
                    <div className="w-1/3">
                        <div className="font-medium mb-2">Last Invoice Date</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">2019-08-26</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-x-10">
                    <div className="w-1/3">
                        <div className="font-medium mb-2">Available Credit</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">$10,916.40</div>
                    </div>
                    <div className="w-1/3">
                        <div className="font-medium mb-2">Credit Limit</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">$12,000.00</div>
                    </div>
                    <div className="w-1/3">
                        <div className="font-medium mb-2">Outstanding Invoice Amount</div>
                        <div className="block appearance-none w-full bg-ghost-white border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">$22,000.00</div>
                    </div>
                </div>
                <DialogTrigger>
                    <Button className="credit-Button w-60 text-center">
                        Request Credit Adjustment
                    </Button>
                    <CreditModal />
                </DialogTrigger>
            </div>

            <div className="mt-16">
                <Invoices />
            </div>
        </div>
    )
}

export default Terms;