import { Cardholder, ChartLineUp, ClipboardText, HandCoins, UserCircleGear, UserFocus } from "@phosphor-icons/react";
import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import working from "../../assets/working.png";

const services = [
    { icon: <ClipboardText size={60} weight="light" />, title: "Access to an Account Manager", body: "Enjoy personalized support from a dedicated account manager." },
    { icon: <HandCoins size={60} weight="light" />, title: "Savings on Products", body: "Receive exclusive discounts and special pricing tailored to your business." },
    { icon: <UserFocus size={60} weight="light" />, title: "Tailored Solutions for Clients", body: "Get customized solutions specializied for your business and clients." },
    { icon: <Cardholder size={60} weight="light" />, title: "Flexible Payment Options", body: "Benefit from a variety of payment methods to suit your financial preferences." },
    { icon: <UserCircleGear size={60} weight="light" />, title: "Support throughout Product Cycle", body: "Access ongoing support at every stage, from setup to optimization and maintenance." },
    { icon: <ChartLineUp size={60} weight="light" />, title: "Performance Analytics", body: "Gain valuable insights into performance and business metrics that drive analytical thinking." },
]

const options = [
    { image: working, title: "Solutions", body: "Solutions super cool" },
    { image: working, title: "Sourcing", body: "Sourcing super cool" },
]


function LandingNew() {
    return (
        <div>
            <NavigationBar />

            <div className="max-w-[1440px] justify-center mx-auto px-4 py-10">
                <div className="flex flex-col gap-y-10">
                    <div className="text-2xl font-black text-center">Why Canada Computers Business?</div>
                    <div className="columns-3">
                        {services.map(item => (
                            <div className="mb-5">
                                <div className="flex flex-col gap-y-2 items-center text-center border p-5 bg-tabs-gray">
                                    <div>{item.icon}</div>
                                    <div className="font-black">{item.title}</div>
                                    <div className="font-medium">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-2xl font-black text-center">Why Canada Computers Business?</div>
                    <div className="columns-2">
                        {options.map(item => (
                            <div className="mb-5">
                                <div className="flex flex-col gap-y-2 border p-5 bg-tabs-gray">
                                    <img src={item.image} className="w-full h-56" />
                                    <div className="font-black">{item.title}</div>
                                    <div className="font-medium">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

            <FooterTop />
            <FooterBottom />
        </div>
    )
}

export default LandingNew;