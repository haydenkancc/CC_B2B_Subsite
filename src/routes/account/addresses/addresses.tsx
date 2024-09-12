import {Button, DialogTrigger, Input, SearchField, ToggleButton} from 'react-aria-components';
import NewAddressModal from './new-address-modal.tsx';
import {GridNine, SquareSplitVertical} from '@phosphor-icons/react';
import {useState} from 'react';
import MyTable from './my-table.tsx';
import MyGrid from './my-grid.tsx';

const items = [
    { id: 1, location: 'Head Office', first: "Bugs", last: "Bunny", address1: '75 West Wilmot Street', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 1K7', billing: true, shipping: true },
    { id: 2, location: 'Aquarium', first: 'Robert', last: 'Ripley', address1: '288 Bremner Boulevard', address2: '', city: 'Toronto', province: 'ON', postal: 'M5V 3L9' },
    { id: 3, location: 'Jim Chai Kee Noodles', first: 'Barry', last: 'Bonds', address1: '270 West Beaver Creek Road', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 3Z1' },
]

function Addresses() {
    const [ showGrid, setShowGrid ] = useState(true);
    return (
        <div className="pb-32">
            <div className="pb-12 flex justify-between">
                <DialogTrigger>
                    <Button className="contacts-Button">
                        Add New Address
                    </Button>
                    <NewAddressModal />
                </DialogTrigger>
                <span className="flex gap-16">
                    <SearchField>
                        <Input className="pl-3 pr-3 pt-2 pb-2 bg-ghost-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Addresses" />
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

export default Addresses;