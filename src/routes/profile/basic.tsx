import { useRef } from "react";
import { Pen } from "@phosphor-icons/react";
import wile from "../../assets/wile.png"

const basic = [
    { image: wile, name: "Wile E. Coyote", role: "Coyote", phone: "(647) 412-0786", email: "wile.e.coyote@cc.ca", location: "75 West Wilmot Street", access: "View-Only" },
]

const fields = [
    { field: "Name", placeholder: "Wile E. Coyote" },
    { field: "Position", placeholder: "Coyote" },
    { field: "Work Address", placeholder: "75 West Wilmot Street" },
    { field: "City", placeholder: "Richmond Hill" },
    { field: "Province", placeholder: "Ontario" },
    { field: "Postal Code", placeholder: "L4B 1K7" },
    { field: "Phone Number", placeholder: "(647) 412-0786" },
    { field: "Fax Number", placeholder: "(000) 000-0000" },
    { field: "Email Address", placeholder: "wile.e.coyote@cc.ca" },
]

function Basic() {

    const editRef = useRef(null);

    return (
        <div className="flex flex-col gap-y-8 mb-20">
            <div className="border rounded-lg p-6">
                {basic.map(item => (
                    <div className="flex flex-row items-center gap-x-14">
                        <img src={item.image} className="rounded-full w-24" />
                        <div className="flex flex-col gap-y-5 w-full">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-x-10">
                                    <div className="text-2xl">{item.name}</div>
                                    <div className="text-sm font-medium">View-Only Access</div>
                                </div>
                                <button className="flex flex-row items-center border rounded-full bg-slate-100 border-slate-300 hover:bg-slate-200 gap-x-1.5 px-3 py-1.5">
                                    <button className="text-sm" onClick={() => {
                                        editRef.current.scrollIntoView({ behavior: 'smooth' });
                                    }}>Edit Info</button>
                                    <Pen size={18} weight="light" />
                                </button>
                            </div>
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
                                <div className="flex flex-col gap-y-0.5">
                                    <div className="text-sm">Address</div>
                                    <div className="font-medium">{item.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={editRef} className="border rounded-lg p-6">
                <div className="flex flex-wrap gap-5">
                    {fields.map(item => (
                        <div style={{ width: '17.79rem' }}>
                            <label className="text-left text-black mb-1">{item.field}</label>
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
                    <button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-2.5 px-4 mt-8">
                        Save Account Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Basic;