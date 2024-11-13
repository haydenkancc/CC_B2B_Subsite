
const Actions = () => {
    return (
        <div className="flex flex-row items-center">
            <select
                className="bg-transparent text-oxford-blue font-semibold ml-6 border-b border-oxford-blue pr-7 focus:outline-none"
            >
                <option className="font-semibold" value="cart">Add to Cart</option>
                <option className="font-semibold" value="promo">Notify when on Promotion</option>
                <option className="font-semibold" value="remove">Remove Item</option>
            </select>
            <div className="text-sm font-medium text-center bg-blue-900 hover:bg-blue-800 text-white py-1.5 rounded px-2.5 ml-5 cursor-pointer">Apply</div>
        </div>
    );
};

export default Actions;
