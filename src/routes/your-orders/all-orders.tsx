function AllOrders() {
    return (
        <div className="flex-grow m-4">
            <div className="font-display text-2xl pl-4 border-b">
                All Orders
            </div>
            <div className="flex">
                <div className="mt-4 flex flex-col">
                    <span className="font-semibold">Order Approval Request</span>
                    <span className="">Review pending order</span>
                </div>
            </div>
        </div>
    );
}

export default AllOrders;