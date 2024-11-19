import { useRef, useState } from "react";
import { Eye, EyeSlash, Numpad, Pen } from "@phosphor-icons/react";
import wile from "../../assets/wile.png"

const basic = [
    { image: wile, name: "Wile E. Coyote", role: "Coyote", phone: "(647) 412-0786", email: "wile.e.coyote@cc.ca", access: "View-Only" },
]

const fields = [
    { field: "Name", placeholder: "Wile E. Coyote" },
    { field: "Position", placeholder: "Business Analyst" },
    { field: "Work Address", placeholder: "75 West Wilmot Street" },
    { field: "City", placeholder: "Richmond Hill" },
    { field: "Province", placeholder: "Ontario" },
    { field: "Postal Code", placeholder: "L4B 1K7" },
    { field: "Phone Number", placeholder: "(647) 412-0786" },
    { field: "Fax Number", placeholder: "(000) 000-0000" },
    { field: "Email Address", placeholder: "wile.e.coyote@cc.ca" },
]

const change = [
    { field: "Current Password" },
    { field: "New Password" },
    { field: "Confirm New Password" },
]

function Basic() {

    const editRef = useRef(null);
    const passRef = useRef(null);

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const toggleCurrentVisibility = () => {
        setShowCurrent(prevState => !prevState);
    };
    const toggleNewVisibility = () => {
        setShowNew(prevState => !prevState);
    };
    const toggleConfirmVisibility = () => {
        setShowConfirm(prevState => !prevState);
    };

    return (
        <div className="mb-20">
            <div className="pb-4">
                <div className="border rounded-sm p-6">
                    {basic.map(item => (
                        <div className="flex flex-row items-center gap-x-14">
                            <img src={item.image} className="rounded-full w-24" />
                            <div className="flex flex-col gap-y-5 w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center gap-x-10">
                                        <div className="text-2xl">{item.name}</div>
                                        <span className="text-sm text-green-600 flex items-center">
                                            <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                            {item.access}
                                        </span>
                                    </div>
                                    <button className="flex flex-row items-center border rounded-full bg-slate-100 border-slate-300 hover:bg-slate-200 gap-x-1.5 px-3 py-1.5 h-9">
                                        <button className="text-sm" onClick={() => {
                                            editRef.current.scrollIntoView({ behavior: 'smooth' });
                                        }}>Edit Info</button>
                                        <Pen size={18} weight="light" />
                                    </button>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-x-20 items-center">
                                        <div className="flex flex-col gap-y-0.5">
                                            <div className="text-sm">Position</div>
                                            <div className="font-medium">{item.role}</div>
                                        </div>
                                        <div className="flex flex-col gap-y-0.5">
                                            <div className="text-sm">Phone Number</div>
                                            <div className="font-medium">{item.phone}</div>
                                        </div>
                                        <div className="flex flex-col gap-y-0.5">
                                            <div className="text-sm">Email Address</div>
                                            <div className="font-medium">{item.email}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <button className="flex flex-row items-center border rounded-full bg-red-200 border-red-400 hover:bg-red-300 gap-x-1.5 px-3 py-1.5 h-9">
                                            <button className="text-sm" onClick={() => {
                                                passRef.current.scrollIntoView({ behavior: 'smooth' });
                                            }}>Change Password</button>
                                            <Numpad size={18} weight="light" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                
            <div ref={editRef} className="py-4">
                <div className="border rounded-sm p-6">
                    <div className="columns-3 gap-8">
                        {fields.map(item => (
                            <div className="mb-5">
                                <label className="text-left text-black mb-1 text-sm text-sm">{item.field}</label>
                                {item.field === "Email Address" &&
                                    <input className="text-sm w-full bg-slate-100 text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none cursor-default"
                                    placeholder={item.placeholder} />
                                }
                                {item.field !== "Email Address" &&
                                    <input className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none"
                                    placeholder={item.placeholder} />
                                }
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-2.5 px-4 mt-2.5">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

            <div ref={passRef} className="pt-4">
                <div className="border rounded-sm p-6">
                    <div className="columns-3 gap-8">
                        {change.map(item => (
                            <div className="mb-5">
                                {item.field === "Current Password" &&
                                    <div className="mb-5">
                                        <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                        <div className="relative">
                                            <input type={showCurrent ? "text" : "password"} className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none" />
                                            <button 
                                                onClick={toggleCurrentVisibility}
                                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 mt-0.5"
                                            >
                                                {showCurrent ? (
                                                    <EyeSlash size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                }
                                {item.field === "New Password" &&
                                    <div className="mb-5">
                                        <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                        <div className="relative">
                                            <input type={showNew ? "text" : "password"} className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none" />
                                            <button 
                                                onClick={toggleNewVisibility}
                                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 mt-0.5"
                                            >
                                                {showNew ? (
                                                    <EyeSlash size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                }
                                {item.field === "Confirm New Password" &&
                                    <div className="mb-5">
                                        <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                        <div className="relative">
                                            <input type={showConfirm ? "text" : "password"}  className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none" />
                                            <button 
                                                onClick={toggleConfirmVisibility}
                                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 mt-0.5"
                                            >
                                                {showConfirm ? (
                                                    <EyeSlash size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-red-200 hover:bg-red-300 border border-red-400 rounded-md text-center text-sm font-semibold py-2.5 px-4 mt-2.5">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basic;