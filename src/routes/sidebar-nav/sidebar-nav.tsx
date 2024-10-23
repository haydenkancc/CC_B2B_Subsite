import {
    ArchiveIcon, AvatarIcon,
    BellIcon, BookmarkIcon, CaretDownIcon,
    ChatBubbleIcon, DashboardIcon, DesktopIcon, ExitIcon,
    IdCardIcon,
    MixerVerticalIcon,
    ReaderIcon
} from '@radix-ui/react-icons';
import martianSrc from '../../assets/martian.jpg';
import logoSrc from '../../assets/ACME-Logo.webp';
import './sidebar-nav.scss'
import { Link } from 'react-router-dom';
import solutionsblue from "../../assets/solutionsblue.png"

function SidebarNav() {
    return (
        <div className="h-lvh w-64">
            <div className="sn-container px-2.5">
                <div>
                    <div className="w-full border-b py-2.5 flex flex-col gap-0.5">
                        <div className="pl-1.5 flex flex-row justify-betweengap-2.5 border-b py-1.5">
                            <img src={solutionsblue} className="w-32" />
                            <div className="text-oxford-blue ml-2.5 text-xl font-semibold">Portal</div>
                        </div>
                        <div className="pl-1.5 flex gap-2.5 items-center pt-1.5">
                            <div className="h-10 w-10">
                                <img src={logoSrc} className="h-full w-full rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium flex items-center gap-0.5">Acme Corporation<CaretDownIcon className="h-5 w-5"/></span>
                                <span className="text-xs">Wile E. Coyote</span>
                            </div>
                        </div>
                    </div>
                    <div className="sn-list-box">
                        <span className="sn-list-box--header">
                            Overview
                        </span>
                        <div className="sn-list-box--list">
                            <Link to="/dashboard" className="sn-list-box-item--wrapper">
                                <DashboardIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Dashboard</span>
                            </Link>
                            <Link to="/catalogue" className="sn-list-box-item--wrapper">
                                <ReaderIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Catalogue</span>
                            </Link>
                            <Link to="/account" className="sn-list-box-item--wrapper">
                                <MixerVerticalIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Account Settings</span>
                            </Link>
                            <Link to="/orders" className="sn-list-box-item--wrapper">
                                <ArchiveIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Order Management</span>
                            </Link>
                            <Link to="/temp" className="sn-list-box-item--wrapper">
                                <DesktopIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Subscription Management</span>
                            </Link>
                            <Link to="/saved-lists" className="sn-list-box-item--wrapper">
                                <BookmarkIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Saved Lists</span>
                            </Link>
                            <Link to="/billing" className="sn-list-box-item--wrapper">
                                <IdCardIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Billing and Payment</span>
                            </Link>
                            <Link to="/tickets" className="sn-list-box-item--wrapper">
                                <ChatBubbleIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Ticket Management</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full py-6 flex flex-col border-b">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium px-4">Your Account Manager</span>
                            <div className="flex gap-3 mt-4 mb-1 px-4">
                                <img src={martianSrc} className="h-10 w-10 rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="sn-list-box-item--content">Marvin the Martian</span>
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="sn-list-box">
                    <span className="sn-list-box--header">
                        Account
                    </span>
                    <div className="sn-list-box--list">
                        <Link to="/message-center" className="sn-list-box-item--wrapper">
                            <BellIcon className="sn-list-box-item--icon"/>
                            <span className="sn-list-box-item--content">Notifications</span>
                        </Link>
                        <div className="sn-list-box-item--wrapper">
                            <AvatarIcon className="sn-list-box-item--icon"/>
                            <span className="sn-list-box-item--content">Profile</span>
                        </div>
                        <Link to="/sign-in" className="sn-list-box-item--wrapper">
                            <ExitIcon className="sn-list-box-item--icon -scale-x-100"/>
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