import { Link } from "react-router-dom";
import solutionsblack from "../../../assets/solutionsblack.png";
import bluilding from "../../../assets/bluilding.png";

function BannerLanding() {
    return (
        <div
            className="overflow-hidden h-120 w-full bg-center text-black"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(237, 234, 222, 1) 0%, rgba(237, 234, 222, 1) 30%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%), url(${bluilding})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="contents absolute">
                <div className="max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-col gap-y-5 py-14 w-108">
                        <img src={solutionsblack} className="w-56" />
                        <div className="font-extrabold text-3xl">Your business is our priority. Create an account today.</div>
                        <div className="">Access all the resources your organization needs to grow, with a wide range of products, full-service solutions, and flexible payment options.</div>
                        <div className="inline-block w-auto pt-2.5">
                            <Link to="/create-account" className="bg-black text-center text-white font-bold rounded-sm px-4 py-2.5 hover:bg-stone-700">Apply for a Business Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerLanding;