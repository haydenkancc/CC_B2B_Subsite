import { DotsThree, Star, CaretUp, CaretDown, Funnel, Eye, X } from '@phosphor-icons/react';
import './billing.css';
import { SearchField, Input } from 'react-aria-components';
import samplePDF from "../../assets/sample-pdf.pdf"
import { Link } from 'react-router-dom';

const titles = [
    { id: 1, name: "Number" },
    { id: 2, name: "Status" },
    { id: 3, name: "User" },
    { id: 4, name: "Total" },
    { id: 5, name: "Issued" },
    { id: 6, name: "Due Date" },
    { id: 7, name: "Payable" },
]

const items = [
    { id: 1, number: "CCINV000001", status: "Paid", date: "2021-03-17", due: "2021-04-01", user: "Wile E. Coyote", total: "$15200.00", src: samplePDF  },
    { id: 2, number: "CCINV000002", status: "Overdue", date: "2021-03-18", due: "2021-04-02", user: "Wile E. Coyote", total: "$15300.00", src: samplePDF  },
    { id: 3, number: "CCINV000003", status: "Paid", date: "2021-03-17", due: "2021-04-03", user: "Wile E. Coyote", total: "$15400.00", src: samplePDF  },
    { id: 4, number: "CCINV000004", status: "Partial", date: "2021-03-18", due: "2021-04-04", user: "Wile E. Coyote", total: "$15500.00", src: samplePDF  },
    { id: 5, number: "CCINV000005", status: "Paid", date: "2021-03-17", due: "2021-04-05", user: "Wile E. Coyote", total: "$15600.00", src: samplePDF  },
    { id: 6, number: "CCINV000006", status: "Overdue", date: "2021-03-18", due: "2021-04-06", user: "Wile E. Coyote", total: "$15700.00", src: samplePDF  },
    { id: 7, number: "CCINV000007", status: "Partial", date: "2021-03-17", due: "2021-04-07", user: "Wile E. Coyote", total: "$15800.00", src: samplePDF  },
    { id: 8, number: "CCINV000008", status: "Overdue", date: "2021-03-18", due: "2021-04-08", user: "Wile E. Coyote", total: "$15900.00", src: samplePDF  },
    { id: 9, number: "CCINV000009", status: "Paid", date: "2021-03-17", due: "2021-04-09", user: "Wile E. Coyote", total: "$16000.00", src: samplePDF  },
    { id: 10, number: "CCINV000010", status: "Overdue", date: "2021-03-18", due: "2021-04-10", user: "Wile E. Coyote", total: "$16100.00", src: samplePDF  },
]

function Invoices() {

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
                    <Input className="pl-3 pr-3 pt-2 pb-2 bg-ghost-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Invoices" />
                </SearchField>
            </div>
            <table className="w-full bg-transparent border-lavender">
                <thead>
                    <tr className="text-oxford-blue border-b border-black">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-2">
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
                            <td className="w-12">
                                <div className="px-4">
                                    <Star size={18} />
                                </div>
                            </td>
                            <td className="py-2 font-medium">{item.number}</td>
                            <td className="py-2 font-medium">
                                {item.status === "Paid" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-green-200 text-black rounded-sm">
                                        Paid
                                    </div>
                                }
                                {item.status === "Partial" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-yellow-200 text-black rounded-sm">
                                        Partial
                                    </div>
                                }
                                {item.status === "Overdue" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-red-200 text-black rounded-sm">
                                        Overdue
                                    </div>
                                }
                            </td>
                            <td className="py-6 font-medium">{item.user}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="py-6 font-medium">{item.date}</td>
                            <td className="py-6 font-medium">{item.due}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="w-12">
                                <Link to={item.src} target="_blank">
                                    <Eye size={20} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Invoices;