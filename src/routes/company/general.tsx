const fields = [
    { field: "Trade Company Name", placeholder: "Acme Corporation" },
    { field: "Legal Company Name", placeholder: "Acme Corporation" },
    { field: "Business Address 2 (Optional)", placeholder: "1999-01-01" },
    { field: "Business Address 1", placeholder: "75 West Wilmot Street" },
    { field: "City", placeholder: "Richmond Hill" },
    { field: "Province", placeholder: "Ontario" },
    { field: "Postal Code", placeholder: "L4B 1K7" },
    { field: "Phone Number", placeholder: "(647) 799-2019" },
    { field: "Date of Application", placeholder: "2024-05-05" },
]

function General() {
    return (
        <div className="mb-20">
            <div className="py-4">
                <div className="border rounded-sm p-6">
                    <div className="columns-3 gap-8">
                        {fields.map(item => (
                            <div className="mb-5">
                                <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                {item.field === "Date of Application" &&
                                    <input className="text-sm w-full bg-slate-100 text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none cursor-default"
                                    placeholder={item.placeholder} />
                                }
                                {item.field !== "Date of Application" &&
                                    <input className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none"
                                    placeholder={item.placeholder} />
                                }
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-2.5 px-4 mt-2.5">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General;