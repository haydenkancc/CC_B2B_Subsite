const titles = [
    { title: "General Information" },
    { title: "Processor" },
    { title: "Chipset" },
    { title: "Memory" },
    { title: "Storage" },
    { title: "Display & Graphics" },
    { title: "Netowork & Communication" },
    { title: "Built-In Devices" },
    { title: "Interfaces/Ports" },
    { title: "Operating System" },
    { title: "Input Devices" },
    { title: "Battery Information" },
    { title: "Power Description" },
    { title: "Physical Characteristics" },
    { title: "Miscellaneous" },
    { title: "Warranty" },
]

function HardwareSpecifications() {
    return (
        <div className="flex flex-col">
            {titles.map(item => (
                <div className="text-lg font-medium py-5">{item.title}</div>
            ))}
            
        </div>
    )
}

export default HardwareSpecifications;