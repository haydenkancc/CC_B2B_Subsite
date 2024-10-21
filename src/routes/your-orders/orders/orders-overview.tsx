import SmallWidget from "../../sam/small-widget";

const overview = [
    { id: 1, title: "Total Orders", body: "10" },
    { id: 2, title: "Average Order Value", body: "$15,650" },
    { id: 3, title: "Total Order Amount", body: "$156,500" },
]

function OrdersOverview() {
    return (
        <div className="grid grid-cols-3 gap-x-4 mb-10">
            {overview.map(item => (
                <div>
                    <SmallWidget title={item.title} value={item.body} />
                </div>
            ))}
        </div>
    )
}

export default OrdersOverview;