const items = [
    { id: 1, title: "Return Period", time: "15 Days" },
    { id: 2, title: "Defective Exchange Period", time: "30 Days" },
    { id: 3, title: "Manufacturer Warranty", time: "1 Year" },
]

function HardwareWarranty() {
    return (
        <div className="flex flex-col">
            <div className="py-5 border-b">Returns for refunds must include complete original packaging and contents, including accessories, manuals, software, and any gifts or codes from the initial purchase. All items must be in original, re-salable condition including original software and operating system and accompanied by the original invoice.  Incomplete or physically damaged products will not be accepted. Refunds will be processed onto the original payment method, excluding shipping and handling fees if applicable. </div>
            {items.map(item => (
                <div className="flex flex-row justify-between items-center border-b py-5 font-medium">
                    <div>{item.title}</div>
                    <div>{item.time}</div>
                </div>
            ))}
            
        </div>
    )
}

export default HardwareWarranty;