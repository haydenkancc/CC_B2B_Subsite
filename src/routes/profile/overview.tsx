import { useRef, useState } from "react";
import { City, Envelope, Eye, EyeSlash, MapPin, MapTrifold, Numpad, Pen, Phone } from "@phosphor-icons/react";
import wile from "../../assets/wile.png"

const basic = [
    { image: wile, name: "Wile E. Coyote", role: "Business Analyst", access: "Purchaser Access" },
]

const about = [
    { icon: <Phone size={18} weight="light" />, title: "Phone:", content: "(647) 412-0786" },
    { icon: <Envelope size={18} weight="light" />, title: "Email:", content: "wile.e.coyote@cc.ca" },
]

const address = [
    { icon: <MapTrifold size={18} weight="light" />, title: "Address:", content: "75 West Wilmot Street" },
    { icon: <City size={18} weight="light" />, title: "City:", content: "Richmond Hill ON" },
    { icon: <MapPin size={18} weight="light" />, title: "Postal Code:", content: "L4B 1K7" },
]

function Overview() {

    return (
        <div className="mb-20">
            <div className="px-5">
                <div className="flex flex-col w-60">
                    {basic.map(item => (
                        <div className="flex flex-col pb-5 border-b">
                            <img src={item.image} className="rounded-full w-20 mb-2.5" />
                            <div className="text-lg">{item.name}</div>
                            <div className="text-sm text-secondary-color mb-0.5">{item.role}</div>
                            <div className="text-sm text-green-600 flex items-center">
                                <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                {item.access}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-y-1.5 py-5 border-b">
                        {about.map(item => (
                            <div className="flex flex-row gap-x-2 items-center text-sm">
                                <div>{item.icon}</div>
                                <div className="text-secondary-color">{item.title}</div>
                                <div>{item.content}</div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-col gap-y-1.5 py-5 border-b">
                        {address.map(item => (
                            <div className="flex flex-row gap-x-2 items-center text-sm">
                                <div>{item.icon}</div>
                                <div className="text-secondary-color">{item.title}</div>
                                <div>{item.content}</div>
                            </div>
                        ))}
                    </div> */}
                    <div className="flex flex-col gap-y-1.5 py-5 w-60">
                        <div className="text-sm">To update information, contact your primary user or administrator.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;