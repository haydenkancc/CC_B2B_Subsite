import { Button, DialogTrigger } from "react-aria-components";
import CreditModal from "./terms/credit-modal";

const info = [
    { title: "Net Terms", body: "NET30" },
    { title: "Newest Invoice to Arrive", body: "2024-11-11" },
    { title: "Next Invoice Due Date", body: "Overdue" },
    { title: "Outstanding Invoice Balance", body: "$22,000.00" },
    { title: "Credit Limit", body: "$10,000.00" },
]

function Cards() {
    return (
        <div className="border rounded-lg p-5">
            <div className="flex flex-row items-center justify-between">
                {info.map(item => (
                    <div className="flex flex-col gap-y-1">
                        {item.title !== "Credit Limit" &&
                            <div className="text-sm text-secondary-color">{item.title}</div>
                        }
                        {item.title === "Credit Limit" &&
                            <div className="flex flex-row items-center gap-x-1.5">
                                <div className="text-sm text-secondary-color">{item.title}</div>
                                <DialogTrigger>
                                    <Button className="focus:outline-none hover:tabs-gray px-1.5 py-0.5 border rounded-lg text-center">
                                        <div className="text-xs text-secondary-color">Adjust</div>
                                    </Button>
                                    <CreditModal />
                                </DialogTrigger>
                            </div>
                        }
                        <div className="text-2xl font-light">{item.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
