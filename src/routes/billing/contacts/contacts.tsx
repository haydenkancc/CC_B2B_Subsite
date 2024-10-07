import {
    Button,
    Dialog,
    DialogTrigger, Heading, Input, Label, Modal, ModalOverlay,
    SearchField,
    TextField, ToggleButton

} from 'react-aria-components';


import './contacts.css';

import { SquareSplitVertical, GridNine } from '@phosphor-icons/react';
import {useState} from 'react';
import MyTable from './my-table.tsx';
import MyGrid from './my-grid.tsx';
import NewContactModal from './new-contact-modal.tsx';

const items = [
    { id: 1, first: 'Bugs', last: 'Bunny', role: 'President', phone: '(647) 327-6457', email: 'bugs.bunny@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', primary: true, web: 'Administrator' },
    { id: 2, first: 'Daffy', last: 'Duck', role: 'Accounting Manager', phone: '(416) 674-9248', email: 'daffy.duck@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', billing: true, web: 'Extended Access' },

]

function Contacts() {

    const [ showGrid, setShowGrid ] = useState(false);

    return (
        <div className="pb-32">
            <div className="pb-12 flex justify-between">
                <DialogTrigger>
                    <Button className="contacts-Button">
                        Add New Contact
                    </Button>
                    <NewContactModal />
                </DialogTrigger>
                <span className="flex gap-16">
                    <SearchField>
                        <Input className="pl-3 pr-3 pt-2 pb-2 bg-ghost-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Contacts" />
                    </SearchField>
                    <ToggleButton className="contacts-Button" onChange={(isSelected) => {setShowGrid(isSelected)}}>
                        {showGrid ? (
                            <span className="flex items-center gap-2">
                                <SquareSplitVertical size={24} /> List
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <GridNine size={24} /> Grid
                            </span>
                        )}
                    </ToggleButton>
                </span>
            </div>
            {showGrid ? <MyGrid items={items} /> : <MyTable items={items} />}
        </div>
    )
}

export default Contacts;