import {
    ArchiveIcon, AvatarIcon, BookmarkIcon, ExitIcon, IdCardIcon, MixerVerticalIcon,
} from '@radix-ui/react-icons';
import logoSrc from '../../assets/ACME-Logo.webp';
import './sidebar-nav.scss'
import { Link } from 'react-router-dom';
import { Clock, Envelope, Phone } from '@phosphor-icons/react';
import anthony from "../../assets/anthony.png";

const about = [
    { icon: <Phone size={16} weight="light" />, title: "Phone:", content: "(905) 780-2632 Ext.414" },
    { icon: <Envelope size={16} weight="light" />, title: "Email:", content: "anthony.greenidge@cc.ca" },
    { icon: <Clock size={16} weight="light" />, title: "Hours of Availability:", content: "" },
]

function SidebarNav() {
    return (
        <div className="h-lvh w-[16.25rem]">
            <div className="sn-container px-2.5">
                <div>
                    <div className="w-full border-b py-2.5 flex flex-col gap-0.5">
                        <div className="pl-1.5 flex gap-2.5 items-center">
                            <div className="h-10 w-10">
                                <img src={logoSrc} className="h-full w-full rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium flex items-center gap-0.5">Acme Corporation</span>
                            </div>
                        </div>
                    </div>
                    <div className="sn-list-box">
                        <span className="sn-list-box--header">
                            Account
                        </span>
                        <div className="sn-list-box--list">
                            <Link to="/company" className="sn-list-box-item--wrapper">
                                <MixerVerticalIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Company Information</span>
                            </Link>
                            <Link to="/orders" className="sn-list-box-item--wrapper">
                                <ArchiveIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Orders</span>
                            </Link>
                            <Link to="/saved-lists" className="sn-list-box-item--wrapper">
                                <BookmarkIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Wishlists</span>
                            </Link>
                            <Link to="/billing" className="sn-list-box-item--wrapper">
                                <IdCardIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Invoices</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full pb-6 flex flex-col border-b">
                        <div className="flex flex-col">
                            <span className="sn-list-box--header">
                                Your Account Manager
                            </span>
                            <div className="flex flex-row items-center gap-x-4 py-2.5 px-4">
                                <img src={anthony} className="h-10 w-10 rounded-full"/>
                                <div className="flex flex-col gap-y-0.5">
                                    <div className="text-sm">Anthony Greenidge</div>
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Available
                                    </span>
                                </div>
                            </div>
                            {about.map(item => (
                                <div className="flex flex-row gap-x-2 items-center text-sm px-4 text-xs mt-1.5">
                                    <div>{item.icon}</div>
                                    <div className="text-secondary-color">{item.title}</div>
                                    <div>{item.content}</div>
                                </div>
                            ))}
                            <div className="px-4 ml-0.5 text-xs mt-1.5">9am-6pm EST. Monday to Friday.</div>
                        </div>
                    </div>
                    <div className="sn-list-box">
                        <div className="sn-list-box--list pt-2">
                            <Link to="/profile" className="sn-list-box-item--wrapper">
                                <AvatarIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Profile</span>
                            </Link>
                            <Link to="/sign-in" className="sn-list-box-item--wrapper">
                                <ExitIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Sign Out</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarNav;

// import {
//     ArchiveIcon, BookmarkIcon, CaretDownIcon, ExitIcon, IdCardIcon, MixerVerticalIcon,
// } from '@radix-ui/react-icons';
// import logoSrc from '../../assets/ACME-Logo.webp';
// import './sidebar-nav.scss'
// import { Link } from 'react-router-dom';

// function SidebarNav() {
//     return (
//         <div className="h-lvh w-64">
//             <div className="sn-container px-2.5">
//                 <div className="flex flex-col justify-between">
//                     <div className="w-full border-b py-2.5 flex flex-col gap-0.5">
//                         <div className="pl-1.5 flex gap-2.5 items-center pt-1.5">
//                             <div className="h-10 w-10">
//                                 <img src={logoSrc} className="h-full w-full rounded-full" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-sm font-medium flex items-center gap-0.5">Acme Corporation<CaretDownIcon className="h-5 w-5"/></span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="sn-list-box">
//                         <span className="sn-list-box--header">
//                             Account
//                         </span>
//                         <div className="sn-list-box--list">
//                             <Link to="/company" className="sn-list-box-item--wrapper">
//                                 <MixerVerticalIcon className="sn-list-box-item--icon"/>
//                                 <span className="sn-list-box-item--content">Company Information</span>
//                             </Link>
//                             <Link to="/orders" className="sn-list-box-item--wrapper">
//                                 <ArchiveIcon className="sn-list-box-item--icon"/>
//                                 <span className="sn-list-box-item--content">Orders</span>
//                             </Link>
//                             <Link to="/billing" className="sn-list-box-item--wrapper">
//                                 <IdCardIcon className="sn-list-box-item--icon"/>
//                                 <span className="sn-list-box-item--content">Payment</span>
//                             </Link>
//                             <Link to="/saved-lists" className="sn-list-box-item--wrapper">
//                                 <BookmarkIcon className="sn-list-box-item--icon"/>
//                                 <span className="sn-list-box-item--content">Favorite Lists</span>
//                             </Link>
//                             <Link to="/sign-in" className="sn-list-box-item--wrapper">
//                                 <ExitIcon className="sn-list-box-item--icon"/>
//                                 <span className="sn-list-box-item--content">Sign Out</span>
//                             </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SidebarNav;