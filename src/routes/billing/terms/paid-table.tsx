import samplePDF from "../../../assets/sample-pdf.pdf";
import Invoices from "./invoices";

const items = [
    { id: 1, number: "CCINV000001", status: "Paid", date: "2021-03-17", due: "2021-04-01", user: "Wile E. Coyote", total: "$15,200.00", payable: "$0.00", src: samplePDF  },
    { id: 2, number: "CCINV000003", status: "Paid", date: "2021-03-17", due: "2021-04-03", user: "Wile E. Coyote", total: "$15,400.00", payable: "$0.00", src: samplePDF  },
    { id: 3, number: "CCINV000005", status: "Paid", date: "2021-03-17", due: "2021-04-05", user: "Wile E. Coyote", total: "$15,600.00", payable: "$0.00", src: samplePDF  },
    { id: 4, number: "CCINV000009", status: "Paid", date: "2021-03-17", due: "2021-04-09", user: "Wile E. Coyote", total: "$16,000.00", payable: "$0.00", src: samplePDF  },
]

function PaidTable() {
    return (
        <div className="mb-20">
            <Invoices items={items} />
        </div>
    )
}

export default PaidTable;