import NavbarTop from '../../components/navbar/navbar-top.tsx';
import tall from "../../assets/tall.png";
import FooterBottom from "../../components/footer/footer-bottom.tsx";
import ProcurementBanner from "./procurement-banner.tsx";
import mitigation from "../../assets/mitigation.png"
import supplychain from "../../assets/supplychain.png"
import compliant from "../../assets/compliant.png"
import { Check } from '@phosphor-icons/react';
import business from "../../assets/business.png"

const risk = [
    { image: mitigation, title: "Risk Identification and Assessment", body: "By analyzing the likelihood and potential impact of each risk, we prioritize them based on severity, ensuring that critical risks are addressed." },
    { image: supplychain, title: "Supplier Risk Management", body: "We ensure ethical sourcing by partnering only with suppliers who adhere to stringent ethical standards, actively avoiding those involved in unethical practices." },
    { image: compliant, title: "Regulatory Compliance", body: "We'll keep your business aligned with legal requirements by staying updated on relevant regulations and industry standards and conducting regular compliance audits." },
]

const relationship  = [
    { title: "Industry Expertise", body: "We stay updated on market trends and consumer demands, allowing us to tailor our solutions to help retailers navigate challenges and seize opportunities." },
    { title: "Scale and Buying Power", body: "By consolidating purchases and fostering strong relationships with suppliers, we ensure that our clients benefit from competitive pricing and favorable contract terms, enhancing their profitability." },
    { title: "Supply Chain Expertise", body: "We implement best practices and innovative strategies to enhance efficiency, streamline processes, and maintain flexibility, helping businesses adapt to evolving market conditions and disruptions." },
]

const supply = [
    { number: "01", title: "Risk Assessment and Planning", body: "Enhance supply chain resilience by assessing vulnerabilities and creating tailored contingency plans." },
    { number: "02", title: "Diversification", body: "Implement supplier diversification to reduce dependence on single sources for critical components." },
    { number: "03", title: "Inventory Management", body: "Maintain safety stock levels to buffer against unexpected disruptions and utilize forecasting to optimize inventory and minimize stockouts." },
    { number: "04", title: "Supplier Relationship Management", body: "Foster strong relationships with suppliers to enhance communication and collaboration during crises." },
    { number: "05", title: "Technology", body: "Utilize technology for real-time supply chain visibility to identify potential disruptions early, while enhancing supply chain agility and resilience." },
    { number: "06", title: "Insurance", body: "Consider purchasing business interruption insurance to cover lost revenue and expenses during disruptions." },
    { number: "07", title: "Early Warning System", body: "Utilize monitoring tools to track global events, political instability, and natural disasters that may impact your supply chain." },
    { number: "08", title: "Placeholder", body: "" },
]

function Optimize() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);

    return (
        <>
            {/* NavBar */}
            <div className="w-full">
                <NavbarTop />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden bg-cover h-120 bg-top"
                style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 75%), url(${tall})`,
                }}
            >
                <div className="text-ghost-white h-full">
                    <div className="max-[1440px] px-6 h-full flex justify-center items-center">
                        <div>
                            <div className="text-4xl font-bold">The Problems and Solutions to Optimize Your Supply Chain</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-ghost-white py-20">
                <div className="max-w-[1440px] px-4 mx-auto flex flex-col">
                    <div className="text-center text-black text-2xl">Driving Transformation: Our Promise to Global Enterprises</div>
                    <div className="text-center text-black text-xl font-light mt-6">We equip businesses with transformative technology solutions designed to meet their evolving needs. Through our dedication to transparency and partnership, we ensure our clients have the resources necessary to excel in a rapidly changing marketplace.</div>
                </div>
            </div>

            {/* Supply Chain Disruptions */}
            <div className="bg-white">
                <div className="max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-col pt-20 pb-5 text-center">
                        <div className="font-semibold text-2xl">Supply Chain Disruptions</div>
                        <div className="uppercase mt-1">Planning Ahead and Diversifying to Build a Stronger Supply Chain</div>
                        <div className="grow border border-black mt-4" />
                    </div>
                    <div className="flex flex-wrap justify-between pb-20">
                        {supply.map((item, index) => (
                            <div className="flex flex-col w-1/4 gap-y-2.5">
                                {item.title === "Placeholder" &&
                                    <div />
                                }
                                {item.title !== "Placeholder" &&
                                    <div className={`flex flex-col gap-y-2.5 ${index % 4 === 0 ? 'py-4 pr-6' : ''} ${index % 4 === 3 ? 'py-4 pl-6' : ''} ${index % 4 !== 0 && index % 4 !== 3 ? 'py-4 px-6' : ''}`}>
                                        <div className="bg-slate-100 border rounded-full w-14 h-14 flex justify-center">
                                            <div className="flex flex-col justify-center font-bold">{item.number}</div>
                                        </div>
                                        <div className="font-medium text-lg mt-2.5">{item.title}</div>
                                        <div className="text-sm">{item.body}</div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Supplier Relationship Management */}
            <div className="bg-gradient-to-b from-white to-ghost-white">
                <div className="max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row items-center justify-between pt-10 pb-20">
                        <div className="flex flex-row gap-x-20 items-center">
                            <img src={business} className="h-72 rounded-sm" />
                            <div className="flex flex-col">
                                {relationship.map((item, index) => (
                                    <div className="flex flex-row gap-x-6">
                                        <Check size={32} weight="light" className="shrink-0" />
                                        <div className={`flex flex-col ${index < relationship.length - 1 ? 'mb-5' : ''}`}>
                                            <div className="text-black font-semibold mb-0.5">{item.title}</div>
                                            <div className="text-black text-sm">{item.body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-ghost-white">
                <div className="max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row items-center">
                        <div className="grow border border-black" />
                        <div className="font-semibold text-2xl text-center px-8 py-10">Risk Mitigation</div>
                        <div className="grow border border-black" />
                    </div>
                    <div className="flex flex-row">
                        {risk.map(item => (
                            <div className="flex flex-row justify-center w-1/3 px-10 pb-20">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-40 h-40 border-2 border-black rounded-full items-center">
                                        <img src={item.image} className="p-6" />
                                    </div>
                                    <div className="font-semibold text-lg pt-6 pb-3">{item.title}</div>
                                    <div className="text-sm">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ProcurementBanner />
            <FooterBottom />

        </>
    );
}

export default Optimize;
