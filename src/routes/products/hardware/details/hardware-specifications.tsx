const titles = [
    { title: "General Information", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Processor", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Chipset", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Memory", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Storage", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Display & Graphics", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Netowork & Communication", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Built-In Devices", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Interfaces/Ports", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Operating System", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Input Devices", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Battery Information", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Power Description", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Physical Characteristics", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Miscellaneous", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
    { title: "Warranty", one: "Placeholder1", two: "Placeholder2", three: "Placeholder3", four: "Placeholder4" },
]

function HardwareSpecifications() {
    return (
        <div className="flex flex-col">
            {titles.map(item => (
                <div className="flex flex-col justify-between">
                    <div className="text-lg font-medium py-5">{item.title}</div>
                    <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-slate-100">
                            <td className="py-2.5 px-5">{item.one}</td>
                            <td className="py-2.5 px-5">{item.two}</td>
                            <td className="py-2.5 px-5">{item.three}</td>
                            <td className="py-2.5 px-5">{item.four}</td>
                            </tr>
                            <tr>
                            <td className="py-2.5 px-5">{item.one}</td>
                            <td className="py-2.5 px-5">{item.two}</td>
                            <td className="py-2.5 px-5">{item.three}</td>
                            <td className="py-2.5 px-5">{item.four}</td>
                            </tr>
                            <tr className="bg-slate-100">
                            <td className="py-2.5 px-5">{item.one}</td>
                            <td className="py-2.5 px-5">{item.two}</td>
                            <td className="py-2.5 px-5">{item.three}</td>
                            <td className="py-2.5 px-5">{item.four}</td>
                            </tr>
                            <tr>
                            <td className="py-2.5 px-5">{item.one}</td>
                            <td className="py-2.5 px-5">{item.two}</td>
                            <td className="py-2.5 px-5">{item.three}</td>
                            <td className="py-2.5 px-5">{item.four}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            
        </div>
    )
}

export default HardwareSpecifications;