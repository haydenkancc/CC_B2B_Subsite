import TicketTable from "./ticket-table";

const items = [
    { id: 1, number: "172934", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 2, number: "172141", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 3, number: "172321", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 4, number: "128356", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
]

function OpenTable() {
    return (
        <div className="">
            <TicketTable items={items} />
        </div>
    )
}

export default OpenTable;