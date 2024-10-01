import {
    Button,
    Dialog,
    DialogTrigger, 
    Heading, 
    Input, 
    Label, 
    Modal, 
    ModalOverlay,
    SearchField,
    TextField, 
    ToggleButton
} from 'react-aria-components';
import { MagnifyingGlass, FileMagnifyingGlass } from '@phosphor-icons/react';
import samplePDF from '../../../assets/sample-pdf.pdf';

const items = [
    { id: 1, date: '01 July 24', number:"ORD-57G8JK2Q", status: 'Delivered', purchaser: 'Wile E. Coyote', view: samplePDF },
    { id: 2, date: '02 July 24', number:"ORD-57G8JK2Q", status: 'Delivered', purchaser: 'Wile E. Coyote', view: samplePDF },
    { id: 3, date: '03 July 24', number:"ORD-57G8JK2Q", status: 'Delivered', purchaser: 'Wile E. Coyote', view: samplePDF },
]

function MyOrders() {
    return (
        <>
            <div className="bg-slate-200 flex flex-row justify-between items-center">
                <div className="flex flex-row items-center border border-1 border-oxford-blue rounded-full bg-white">
                    <Input className="pl-3 pr-3 pt-2 pb-2 text-oxford-blue flex-grow rounded-l-full focus:outline-none" placeholder="Search" />
                    <div className="flex items-center pr-3 cursor-pointer">
                        <MagnifyingGlass size={20} />
                    </div>
                </div>
                <div className="flex flex-row px-10">
                    <div>Year to Date</div>
                </div>
            </div>

            <table className="table-auto w-full text-left bg-white">
                <thead className="border-b">
                    <tr>
                        <th>Order Date</th>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Purchaser</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr className="border-b" key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.number}</td>
                            <td>{item.status}</td>
                            <td>{item.purchaser}</td>
                            <td>
                                <a href={item.view}>
                                    <FileMagnifyingGlass size={24} />    
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default MyOrders;