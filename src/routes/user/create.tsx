import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import solutionsblue from "../../assets/solutionsblue.png";
import { UploadSimple } from "@phosphor-icons/react";

function Create() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-ghost-white">
            <div className="w-full max-w-[1440px] px-4 mx-auto">
                <div className="flex flex-col">
                    <img src={solutionsblue} className="bg-contain w-40 mt-14" />
                    <div className="font-bold text-2xl mt-4">Corporate Account Application</div>
                    <div className="mt-4">To help Canada Computers serve you as a corporate customer, please fill out the form below. Thank you for joining our corporate family and enjoy the associated benefits and discounts!</div>
                    <div className="mt-4 font-semibold">Please note that upon being accepted as a corporate customer, you will be contacted by a member of our corporate sales team.</div>
                    
                    <div className="font-bold text-xl mt-8">Basic Information</div>
                    <div className="mt-3">If you'd like to purchase products online from us in the future, please use the same address as you would for your credit card bill or monthly bank statement. Otherwise, your order may not be processed.</div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Trade Company Name</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Legal Company Name</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Type of Company</label>
                            <div className="relative w-full">
                                <select className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none">
                                    <option value="" disabled selected>Please Select</option>
                                    <option>Corporate</option>
                                    <option>Reseller</option>
                                    <option>Government</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Business Since</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Primary Business Address</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">City</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Province</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Postal Code</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Phone Number</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>

                    <div className="font-bold text-xl mt-12">Primary Contact</div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Name</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Position</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Work Address</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">City</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Province</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Postal Code</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Phone Number</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Fax Number</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Business Email</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>

                    <div className="flex flex-row mt-12 justify-between">
                        <div className="font-bold text-xl">Accounts Payable Contact</div>
                        <div className="flex items-center">
                            <input type="checkbox" className="bg-white border border-black w-5 h-5" />
                            <label className="ml-4 text-black">Same address as primary business address above</label>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Name</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Position</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Work Address</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">City</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Province</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Postal Code</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-10">
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Phone Number</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                            <label className="text-left text-black mb-1">Fax Number</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5 mt-1.5 focus:outline-none" />
                        </div>
                        <div className="mt-5 w-1/3">
                        </div>
                    </div>

                    <div className="font-bold text-xl mt-12">Supporting Documentation</div>
                    <div className="mt-3">Please upload any supporting documentation here (Master Business License, Articles of Incorporation, Utility Bills, etc.)</div>
                    <label for="file-upload" class="flex cursor-pointer items-center bg-ghost-white text-black rounded">
                        <div className="flex flex-row items-center bg-ghost-white rounded-sm px-4 py-2.5 my-4 border border-oxford-blue hover:bg-slate-200">
                            <UploadSimple size={24} />
                            <div className="font-semibold ml-2.5 text-oxford-blue">Upload Document</div>
                        </div>
                    </label>
                    <input id="file-upload" type="file" className="hidden" />
                    <div className="mt-6">Please note that additional users can be set up upon account confirmation.</div>
                    <Link to={"/sign-in"} className="bg-oxford-blue text-ghost-white py-2 rounded-sm text-center w-44 font-semibold text-lg mt-6 mb-14">Create Account</Link>
                </div>
            </div>
        </div>
    );
}

export default Create;
