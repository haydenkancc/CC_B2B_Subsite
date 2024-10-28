import samplePDF from "../../../assets/sample-pdf.pdf";
import OrdersTable from './orders-table';

const items = [
    { id: 1, number: "CCORD000002", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000002", src: samplePDF  },
    { id: 2, number: "CCORD000006", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000006", src: samplePDF  },
    { id: 3, number: "CCORD000008", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000008", src: samplePDF  },
    { id: 4, number: "CCORD000010", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$16,100.00", track: "CCTRK000010", src: samplePDF  },
]

function CancelledTable() {
    return (
        <div className="mb-20">
            <OrdersTable items={items} />
        </div>
    )
}

export default CancelledTable;