const infos = [
    { id: 1, name: "Daffy Duck", phone: "(647) 327-6457", email: "bugs.bunny@cc.ca", address: "75 West Wilmost Street", postal: "Toronto, ON L4B 1K7" },
];

function CheckoutSummary() {

    return (
        <div className="bg-lavender/10 text-oxford-blue border rounded-sm px-4 py-8 w-full">
            <div className="flex flex-row justify-between gap-x-10">
                <div className="flex flex-col w-1/3 gap-y-2.5">
                    <div className="flex flex-row items-center">
                        <div className="text-xl font-medium">Subtotal</div>
                        <div className="ml-10 text-sm">10 Items</div>
                        <div className="ml-5 text-sm">2021-09-23</div>
                    </div>
                    <div>Delivery expected in 4 days on 2021-09-27</div>
                    <div>Tax and shipping will be calculated at checkout.</div>
                </div>
                <div className="flex flex-col w-1/3">
                    {infos.map(info => (
                        <div className="flex flex-col text-sm gap-y-1.5">
                            <div>{info.name}</div>
                            <div>{info.phone}</div>
                            <div>{info.address}, {info.postal}</div>
                            <div>{info.email}</div>
                        </div>
                    ))}
                </div>
                <div className="1/3 flex flex-col">
                    <div className="text-2xl text-center font-semibold mb-4">$12,069.89</div>
                    <div className="flex flex-row gap-x-2.5">
                        <button className="text-ghost-white bg-oxford-blue text-center border px-4 py-1.5 w-32">Checkout</button>
                        <button className="text-ghost-white bg-oxford-blue text-center border px-4 py-1.5 w-32">Print Quote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutSummary;
