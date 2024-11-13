import samplePDF from "../../../assets/sample-pdf.pdf";
import Invoices from "./invoices";

const items = [
    { id: 1, number: "CCINV000002", status: "Overdue", date: "2021-03-18", due: "2021-04-02", user: "Wile E. Coyote", total: "$15,300.00", payable: "$15,300.00", src: samplePDF  },
    { id: 2, number: "CCINV000004", status: "Current", date: "2021-03-18", due: "2021-04-04", user: "Wile E. Coyote", total: "$15,500.00", payable: "$15,500.00", src: samplePDF  },
    { id: 3, number: "CCINV000006", status: "Overdue", date: "2021-03-18", due: "2021-04-06", user: "Wile E. Coyote", total: "$15,700.00", payable: "$9,700.00", src: samplePDF  },
    { id: 4, number: "CCINV000007", status: "Partial", date: "2021-03-17", due: "2021-04-07", user: "Wile E. Coyote", total: "$15,800.00", payable: "$800.00", src: samplePDF  },
    { id: 5, number: "CCINV000008", status: "Overdue", date: "2021-03-18", due: "2021-04-08", user: "Wile E. Coyote", total: "$15,900.00", payable: "$7,900.00", src: samplePDF  },
    { id: 6, number: "CCINV000010", status: "Overdue", date: "2021-03-18", due: "2021-04-10", user: "Wile E. Coyote", total: "$16,100.00", payable: "$12,100.00", src: samplePDF  },
]

function OutstandingTable() {
    return (
        <div className="">
            <Invoices items={items} />
        </div>
    )
}

export default OutstandingTable;