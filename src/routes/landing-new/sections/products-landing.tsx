import server from "../../../assets/server.png";
import businesslaptop from "../../../assets/businesslaptop.png";
import printer from "../../../assets/printer.png";
import headset from "../../../assets/headset.png";
import { Link } from "react-router-dom";
import chair from "../../../assets/chair.png";
import keyboard from "../../../assets/keyboard.png";

const products = [
    { image: keyboard, title: "Keyboards & Mice", },
    { image: printer, title: "Printers & Scanners" },
    { image: businesslaptop, title: "Business Laptops" },
    { image: chair, title: "Office Essentials" },
    { image: headset, title: "PC Headsets" },
    { image: server, title: "Servers & Workstations" },
]

function ProductsLanding() {
    return (
        <div className="max-w-[1024px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-5 mt-5">
                <div className="text-2xl font-extrabold text-center">Popular Categories</div>
                <div className="columns-3 mt-5">
                    {products.map(item => (
                        <Link to="/hardware">
                            <div className="border p-5 mb-4">
                                <img src={item.image} className="h-32 mx-auto" />
                                <div className="text-xl font-bold text-center mt-2.5">{item.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsLanding;