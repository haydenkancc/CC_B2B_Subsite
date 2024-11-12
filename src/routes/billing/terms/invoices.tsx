import { CaretUp, CaretDown, Eye, FilePdf } from '@phosphor-icons/react';
import samplePDF from "../../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./terms.css"
import InvoiceDropdown from './invoice-dropdown';

const titles = [
    { id: 1, name: "Invoice Number:" },
    { id: 2, name: "Invoice Date:" },
    { id: 3, name: "Due Date:" },
    { id: 4, name: "Invoice Status:" },
    { id: 5, name: "Ordered By:" },
    { id: 6, name: "Invoice Amount:" },
    { id: 7, name: "Balance:" },
]

function Invoices({ items=[
    { id: 1, number: "CCINV000001", status: "Paid", date: "2021-03-17", due: "2021-04-01", user: "Wile E. Coyote", total: "$15,200.00", payable: "$0.00", src: samplePDF  },
    { id: 2, number: "CCINV000002", status: "Overdue", date: "2021-03-18", due: "2021-04-02", user: "Wile E. Coyote", total: "$15,300.00", payable: "$15,300.00", src: samplePDF  },
    { id: 3, number: "CCINV000003", status: "Paid", date: "2021-03-17", due: "2021-04-03", user: "Wile E. Coyote", total: "$15,400.00", payable: "$0.00", src: samplePDF  },
    { id: 4, number: "CCINV000004", status: "Current", date: "2021-03-18", due: "2021-04-04", user: "Wile E. Coyote", total: "$15,500.00", payable: "$15,500.00", src: samplePDF  },
    { id: 5, number: "CCINV000005", status: "Paid", date: "2021-03-17", due: "2021-04-05", user: "Wile E. Coyote", total: "$15,600.00", payable: "$0.00", src: samplePDF  },
    { id: 6, number: "CCINV000006", status: "Overdue", date: "2021-03-18", due: "2021-04-06", user: "Wile E. Coyote", total: "$15,700.00", payable: "$9,700.00", src: samplePDF  },
    { id: 7, number: "CCINV000007", status: "Partial", date: "2021-03-17", due: "2021-04-07", user: "Wile E. Coyote", total: "$15,800.00", payable: "$800.00", src: samplePDF  },
    { id: 8, number: "CCINV000008", status: "Overdue", date: "2021-03-18", due: "2021-04-08", user: "Wile E. Coyote", total: "$15,900.00", payable: "$7,900.00", src: samplePDF  },
    { id: 9, number: "CCINV000009", status: "Paid", date: "2021-03-17", due: "2021-04-09", user: "Wile E. Coyote", total: "$16,000.00", payable: "$0.00", src: samplePDF  },
    { id: 10, number: "CCINV000010", status: "Overdue", date: "2021-03-18", due: "2021-04-10", user: "Wile E. Coyote", total: "$16,100.00", payable: "$12,100.00", src: samplePDF  },
] })  {

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(prevState => (prevState === id ? null : id));
    };

    return (
        <div className="mb-20">
            <table className="w-full bg-transparent border">
                <thead>
                    <tr className="text-black border border-slate-300 bg-tabs-gray">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-4 text-xs">
                                {title.name === "Number:" &&
                                    <div className="flex flex-row items-center">
                                        <div>{title.name}</div>
                                        <div className="flex flex-col ml-2.5">
                                            <CaretUp size={10} />
                                            <CaretDown size={10} />
                                        </div>
                                    </div>
                                }
                                {title.name !== "Number:" &&
                                    <div className="flex flex-row items-center">
                                        <div>{title.name}</div>
                                    </div>
                                }
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <React.Fragment key={item.id}>
                        <tr key={item.id} className="border-t border-slate-300 text-xs">
                            <div className="pr-2.5" />
                            <td className="py-2 font-medium">{item.number}</td>
                            <td className="py-6 font-medium">{item.date}</td>
                            <td className="py-6 font-medium">{item.due}</td>
                            <td className="py-6 font-medium">
                                {item.status === "Paid" &&
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Paid
                                    </span>
                                }
                                {item.status === "Partial" &&
                                    <span className="text-xs text-yellow-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-yellow-600 mr-1.5 ml-0.5"/>
                                        Partially Paid
                                    </span>
                                }
                                {item.status === "Overdue" &&
                                    <span className="text-xs text-red-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-red-600 mr-1.5 ml-0.5"/>
                                        Overdue
                                    </span>
                                }
                                {item.status === "Current" &&
                                    <span className="text-xs text-blue-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                        Current
                                    </span>
                                }
                            </td>
                            <td className="py-6 font-medium">{item.user}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="py-6 font-medium">{item.payable}</td>
                            <td className="py-6 flex flex-row items-center gap-x-2.5">
                                <Eye size={18} onClick={() => toggleDropdown(item.id)} className="cursor-pointer" />
                                <Link to={item.src} target="_blank">
                                    <FilePdf size={18} />
                                </Link>
                            </td>
                        </tr>

                        {openDropdown === item.id && (
                            <InvoiceDropdown />
                        )}

                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Invoices;
