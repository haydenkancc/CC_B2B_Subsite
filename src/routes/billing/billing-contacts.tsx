import './billing.css'

const contacts = [
    { id: 1, name: "Mario Mario", email: "mario.mario@nintendo.com", department: "Nintendo", phone: "(647) 111-1111", province: "Ontario", access: "View-Only" },
    { id: 1, name: "Luigi Luigi", email: "luigi.luigi@nintendo.com", department: "Nintendo", phone: "(647) 222-2222", province: "Ontario", access: "Limited Access" },
    { id: 1, name: "Wario Wario", email: "wario.wario@nintendo.com", department: "Nintendo", phone: "(647) 333-3333", province: "Ontario", access: "Extended Access" },
    { id: 1, name: "Bowser Bowser", email: "bowser.bowser@nintendo.com", department: "Nintendo", phone: "(647) 444-4444", province: "Ontario", access: "Administrator" },
];

function BillingContacts() {
    
    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender pb-32">
            <div className="pt-8 pb-16">
                <div className="text-2xl">
                    Billing Contacts
                </div>
                <table className="w-full bg-transparent border-lavender mt-6">
                    <thead>
                        <tr className="text-oxford-blue border border-black">
                            <th className="py-2 px-4 text-left">Name:</th>
                            <th className="py-2 px-4 text-left">Email:</th>
                            <th className="py-2 px-4 text-left">Phone:</th>
                            <th className="py-2 px-4 text-left">Department:</th>
                            <th className="py-2 px-4 text-left">Access:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(item => (
                            <tr key={item.id} className="border border-black">
                                <td className="py-2 px-4 text-sm font-medium w-44">{item.name}</td>
                                <td className="py-2 px-4 text-sm font-medium w-72">{item.email}</td>
                                <td className="py-2 px-4 text-sm font-medium w-44">{item.phone}</td>
                                <td className="py-2 px-4 text-sm font-medium w-44">{item.department}</td>
                                <td className="py-2 px-4 text-sm font-medium w-44">{item.access}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BillingContacts;
