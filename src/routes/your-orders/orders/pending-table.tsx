import samplePDF from "../../../assets/sample-pdf.pdf";
import OrdersTable from './orders-table';

const items = [
    { id: 1, number: "CCORD000004", status: "Pending", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000004", src: samplePDF  },
    { id: 2, number: "CCORD000007", status: "Pending", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000007", src: samplePDF  },
]

function PendingTable() {
    return (
        <div className="">
            <OrdersTable items={items} />
        </div>
    )
}

export default PendingTable;