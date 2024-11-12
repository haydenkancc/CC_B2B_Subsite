import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Overview from './overview.tsx';
import TwoFactor from './two-factor.tsx';
import ChangePassword from './change-password.tsx';

function Profile() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex">
            <div className="">
                <SidebarNav />
            </div>
            <div className="grow">
                <div className="flex flex-row items-center">
                    <div className="sam-title-section grow">
                        <div className="sam-title">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <MagnifyingGlassIcon />
                            </div>
                            <div className="text-[#808080]">
                                Search for anything
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-row px-8 gap-x-10 pt-8">
                    <div className="flex flex-col gap-y-5 grow">
                        <div className="flex flex-col mb-3">
                            <div className="text-2xl">Profile</div>
                            <div className="text-slate-600 text-sm">Manage settings related to signing in to your account and account security.</div>
                        </div>
                        <div className="flex flex-row gap-x-10">
                            <Overview />
                            <div className="flex flex-col gap-y-5 grow">
                                <TwoFactor />
                                <ChangePassword />
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;