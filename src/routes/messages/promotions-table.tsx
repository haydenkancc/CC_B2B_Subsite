import MessageTable from "./message-table";

const items = [
    { id: 1, message: "AWDIAHDI9000 is having a promotion sale from 2024-10-25 to 2024-11-25.", name: "Canada Computers & Electronics", time: "3 Hours Ago", type: "Promotion" },
    { id: 2, message: "AWDIAHDI9000 is having a promotion sale from 2024-10-25 to 2024-11-25.", name: "Canada Computers & Electronics", time: "10 Hours Ago", type: "Promotion" },
];

function PromotionsTable() {
    return (
        <div className="">
            <MessageTable items={items} />
        </div>
    )
}

export default PromotionsTable;