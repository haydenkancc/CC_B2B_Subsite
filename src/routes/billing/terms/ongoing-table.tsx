import samplePDF from "../../../assets/sample-pdf.pdf";
import Invoices from "./invoices";

const items = [
    { id: 1, number: "CCINV000004", status: "Partial", date: "2021-03-18", due: "2021-04-04", user: "Wile E. Coyote", total: "$15,500.00", payable: "$7,640.00", src: samplePDF  },
    { id: 2, number: "CCINV000007", status: "Partial", date: "2021-03-17", due: "2021-04-07", user: "Wile E. Coyote", total: "$15,800.00", payable: "$800.00", src: samplePDF  },
]

function OngoingTable() {
    return (
        <div className="mb-20">
            <Invoices items={items} />
        </div>
    )
}

export default OngoingTable;