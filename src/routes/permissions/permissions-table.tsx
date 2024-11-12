const titles = [
    { title: "Administrator" },
    { title: "Extended Access" },
    { title: "Limited Access" },
    { title: "View-Only" },
];

function PermissionsTable() {
    return (
        <table className=" w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">Company Information and Setting</th>
                    {titles.map((item, index) => (
                        <th key={index} className="border border-gray-300 px-4 py-2 text-center text-sm font-medium">{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {renderRow("View Company Info", ["Yes", "Yes", "Yes", "Yes"])}
                {renderRow("Edit Company Info", ["Yes", "No", "No", "No"])}
                {renderRow("View All Company Users Address Book", ["Yes", "Yes", "Yes", "Yes"])}
                {renderRow("Edit All Company Users Address Book", ["Yes", "Yes", "No", "No"])}
                {renderSection("Net Term")}
                {renderRow("Apply for Net Term Account", ["Yes", "No", "No", "No"])}
                {renderRow("Pay With Company's Net Term Account", ["Yes", "No", "Yes", "No"])}
                {renderSection("Manage Company Users")}
                {renderRow("Create Users", ["Yes", "No", "No", "No"])}
                {renderRow("Edit User Status", ["Yes", "Yes", "No", "No"])}
                {renderRow("Delete User", ["Yes", "No", "No", "No"])}
                {renderRow("Change/Switch Primary", ["Yes", "No", "No", "No"])}
                {renderSection("Orders")}
                {renderRow("View All Company's Order History", ["Yes", "Yes", "No", "No"])}
                {renderRow("Check All Company's Order Status", ["Yes", "Yes", "No", "No"])}
                {renderSection("RMA")}
                {renderRow("View All Company Users' RMA Status", ["Yes", "Yes", "No", "No"])}
                {renderRow("View All Company Users' RMA History", ["Yes", "Yes", "No", "No"])}
                {renderSection("Shopping Cart")}
                {renderRow("View All Company Users' Saved Shopping Cart", ["Yes", "Yes", "No", "No"])}
            </tbody>
        </table>
    );
}

function renderRow(label, permissions) {
    return (
        <tr className="border-t border-gray-300">
            <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-sm">{label}</td>
            {permissions.map((permission, index) => (
                <td key={index} className="border border-gray-300 px-4 py-2 text-center text-sm">{permission}</td>
            ))}
        </tr>
    );
}

function renderSection(title) {
    return (
        <tr>
            <td colSpan={titles.length + 1} className="border-t border-gray-300 bg-gray-200 px-4 py-2 text-sm">
                {title}
            </td>
        </tr>
    );
}

export default PermissionsTable;
