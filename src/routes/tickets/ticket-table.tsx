import { Star, CaretUp, CaretDown, Funnel, Eye, X } from '@phosphor-icons/react';
import { SearchField, Input } from 'react-aria-components';
import samplePDF from "../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import { DialogTrigger, Button } from 'react-aria-components';
import PaymentMethodModal from '../billing/wallet/payment-method-modal';

const titles = [
    { id: 1, name: "Number" },
    { id: 2, name: "Modified" },
    { id: 3, name: "Status" },
    { id: 4, name: "Subject" },
    { id: 5, name: "Department" },
]

const items = [
    { id: 1, number: "172934", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 2, number: "172933", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
    { id: 3, number: "172141", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 4, number: "123435", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 5, number: "172321", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 6, number: "128372", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
    { id: 7, number: "128353", status: "Closed", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 8, number: "128332", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
    { id: 9, number: "128356", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 10, number: "1285423", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
]

function TicketTable() {

    return (
        <div className="">
            <div className="flex flex-row justify-between items-center mb-10">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row border border-slate-300 rounded-sm px-4 py-2 items-center">
                        <div className="font font-bold">Active Filters</div>
                        <Funnel size={24} weight="light" className="ml-2.5" />
                    </div>
                    <div className="flex flex-row ml-4 border rounded-full border-slate-300 px-4 py-2 items-center">
                        <div className="font-semibold">Due Date:</div>
                        <div className="ml-2.5">2021-04-01 to 2021-04-10</div>
                        <X size={14} weight="light" className="ml-2.5" />
                    </div>
                    <div className="flex flex-row ml-4 border rounded-full border-slate-300 px-4 py-2 items-center">
                        <div className="font-semibold">User:</div>
                        <div className="ml-2.5">Wile E. Coyote</div>
                        <X size={14} weight="light" className="ml-2.5" />
                    </div>
                </div>
                <SearchField>
                    <Input className="pl-3 pr-3 pt-2 pb-2 bg-ghost-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Tickets" />
                </SearchField>
            </div>
            <table className="w-full bg-transparent border-lavender">
                <thead>
                    <tr className="text-oxford-blue border-b border-black">
                        {titles.map(title => (
                            <th key={title.id} className="px-4 py-2">
                                <div className="flex flex-row items-center">
                                    <div>{title.name}</div>
                                    <div className="flex flex-col ml-2.5">
                                        <CaretUp size={10} />
                                        <CaretDown size={10} />
                                    </div>
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-b border-black text-sm">
                            <td className="px-4 py-2 font-medium">{item.number}</td>
                            <td className="px-4 py-6 font-medium">{item.date}</td>
                            <td className="px-4 py-2 font-medium">
                                {item.status === "Open" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-green-200 text-black rounded-sm">
                                        Open
                                    </div>
                                }
                                {item.status === "Closed" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-red-200 text-black rounded-sm">
                                        Closed
                                    </div>
                                }
                            </td>
                            <td className="px-4 py-6 font-medium">{item.subject}</td>
                            <td className="px-4 py-6 font-medium">{item.department}</td>
                            <td className="w-12">
                                <Link to={item.src} target="_blank">
                                    <Eye size={18} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-row justify-between items-center mt-5">
                <DialogTrigger>
                    <Button className="credit-Button w-40 text-center">
                        Open New Ticket
                    </Button>
                    <PaymentMethodModal />
                </DialogTrigger>
                <div className="flex flex-row">
                    <div className="border px-4 py-2.5">Previous</div>
                    <div className="border px-4 py-2.5">Next</div>
                </div>
            </div>
        </div>
    )
}

export default TicketTable;