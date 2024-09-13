import "./solutions.css"

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import header from "../../assets/header.png"

const pages = ['Partners', 'Industry', 'About'];

function HealthcareSolutions() {
    return (
        <>

            {/* NavBar */}
            <div className="w-screen overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div>
                <div className="overflow-hidden bg-cover h-[85vh]" style={{backgroundImage:`url(${header})`}}>
                    <div className="contents absolute">
                        <div className="px-32 py-16">
                            <h1 className="text-5xl font-bold text-ghost-white mt-10">Simplified Sourcing</h1>
                            <h1 className="text-5xl font-bold text-ghost-white mt-3">for Healthcare</h1>
                            <p className="text-xl text-ghost-white font-mono mt-6">Elevate your business to the next level</p>
                            <button className="text-lg bg-ghost-white hover:bg-slate-300 text-oxford-blue font-bold py-2 px-8 my-8 rounded-sm">
                                FIND YOUR SOLUTION
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="bg-ghost-white items-center">Benefits Buyers Trust</div>
            <div className="bg-ghost-white items-center">Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blah</div>

        </>
    );
}

export default HealthcareSolutions;