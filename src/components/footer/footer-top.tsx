import './footer.css'
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import { Link } from 'react-router-dom';

function FooterTop() {
    return (
        <div className="bg-oxford-blue text-ghost-white flex justify-center border-ghost-white/5 text-sm">
            <div className="flex flex-row justify-center items-center align-middle w-full px-4 max-w-[1440px]">
                <div className="bg-oxford-blue py-8 w-full relative">
                    <div className="flex flex-row justify-between max-w-[1440px] mx-auto">
                        <div className="flex flex-col">
                            <div className="text-3xl text-ghost-white font-bold mb-4">Empower your Workplace Today</div>
                            <h1 className="text-xl text-white">Contact us to get started!</h1>
                        </div>
                        <div className="">
                            <Logo className="h-full w-24"></Logo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop;