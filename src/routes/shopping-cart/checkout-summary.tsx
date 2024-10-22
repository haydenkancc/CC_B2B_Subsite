import { Button, DialogTrigger } from "react-aria-components";
import samplePDF from "../../assets/sample-pdf.pdf";
import { Link } from "react-router-dom";

const infos = [
    { id: 1, name: "Wile E. Coyote", phone: "(647) 412-0786", email: "wile.e.coyote@cc.ca", address: "75 West Wilmot Street", postal: "Toronto, ON L4B 1K7" },
];

function CheckoutSummary() {

    return (
        <div className="text-oxford-blue border rounded-sm px-4 py-8 w-full">
            <div className="flex flex-row justify-between gap-x-10">
                <div className="flex flex-col w-1/3 gap-y-2.5">
                    <div className="flex flex-row items-center">
                        <div className="text-xl font-medium">Subtotal</div>
                        <div className="ml-10 text-sm">10 Items</div>
                        <div className="ml-5 text-sm">2021-09-23</div>
                    </div>
                    <div className="text-sm">Delivery expected in 4 days on 2021-09-27</div>
                    <div className="text-sm">Tax and shipping will be calculated at checkout.</div>
                </div>
                <div className="flex flex-col w-1/3">
                    {infos.map(info => (
                        <div className="flex flex-col text-sm gap-y-1.5">
                            <div>{info.name}</div>
                            <div>{info.phone}</div>
                            <div>{info.address}, {info.postal}</div>
                            <div>{info.email}</div>
                        </div>
                    ))}
                </div>
                <div className="1/3 flex flex-col">
                    <div className="text-2xl text-center font-semibold mb-4">$60.97</div>
                    <div className="flex flex-row gap-x-2.5">
                        <Link to="/checkout" className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-2">
                            Checkout
                        </Link>
                        <DialogTrigger>
                            <Link to={samplePDF} target="_blank" className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-2">
                                Print Quote
                            </Link>
                        </DialogTrigger>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutSummary;
