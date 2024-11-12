import printer from "../../../assets/printer.png";
import { Link } from "react-router-dom";

const products = [
    { image: printer, name: "Microsoft Surface Printer 6 for Business", description: "Built with the Intel Core Ultra H-series processor, this sleek device is designed for power and performance." },
    { image: printer, name: "Dell Latitude Printer 5450", description: "Combines powerful performance with HD audio and visuals, making it ideal for both work and entertainment." },
    { image: printer, name: "Lexmark CX431ADW Colour MFP", description: "Designed to be secure, sustainable and built to last." },
    { image: printer, name: "Microsoft Surface Printer Copilot+ PC for Business", description: "Designed for advanced AI experiences with the Snapdragon X Elite and Plus processors for powerful performance." },
]

function FeaturedLanding() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black mt-5 w-full">
            <div className="flex flex-col gap-y-5 w-full">
                <div className="text-2xl font-extrabold text-center">Featured Products</div>
                <div className="flex flex-row justify-between gap-x-10">
                    {products.map(item => (
                        <div className="w-1/4">
                            <div className="flex flex-col gap-y-1 mt-5">
                                <div className="flex justify-center">
                                    <img src={item.image} className="w-32" />
                                </div>
                                <div className="font-semibold mt-1.5">{item.name}</div>
                                <div className="text-sm">{item.description}</div>
                                <div className="inline-block w-auto pt-2.5 mt-1.5">
                                    <Link to="/hardware-product" className="text-sm bg-black text-center text-white font-bold rounded-lg px-4 py-2.5 hover:bg-stone-700">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedLanding;