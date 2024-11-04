import {Button, Dialog, Heading, Input, Label, Modal, ModalOverlay, TextField, Text, Key} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import './new-contact-modal.css';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';
import MyCheckboxGroup from '../../../components/form/my-checkbox-group.tsx';
import MyCheckbox from '../../../components/form/my-checkbox.tsx';
import MySelectItem from '../../../components/form/my-select-item.tsx';
import MySelect from '../../../components/form/my-select.tsx';
import {useState} from 'react';

const items = [
    { id: 1, location: 'Head Office', first: "Bugs", last: "Bunny", address1: '75 West Wilmot Street', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 1K7', billing: true, shipping: true },
    { id: 2, location: 'Aquarium', first: 'Robert', last: 'Ripley', address1: '288 Bremner Boulevard', address2: '', city: 'Toronto', province: 'ON', postal: 'M5V 3L9' },
    { id: 3, location: 'Jim Chai Kee Noodles', first: 'Barry', last: 'Bonds', address1: '270 West Beaver Creek Road', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 3Z1' },
    { id: 4, other: true }
]

function NewContactModal() {
    const [selectedKey, setSelectedKey] = useState<Key | null>();
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-3xl pt-8 pb-8">Add New Contact</Heading>
            <MyTextField label="Name" />
            <MyTextField className="" label="Role" />
            <MyTextField label="Phone" />
            <MyTextField label="Email" />
            <MySelect onSelectionChange={(key) => {setSelectedKey(key)}} items={items} label="Address" className="col-span-2">
                {item => (
                    item.other ?
                        (<MySelectItem>
                            <Text slot="label" className="flex">Custom Address</Text>
                        </MySelectItem>)
                        :
                        (<MySelectItem>
                            <Text slot="label" className="flex">{item.location}</Text>
                            <Text slot="description" className="text-xs text-oxford-blue/75">{item.address1} {item.address2}, {item.city} {item.province} {item.postal}</Text>
                        </MySelectItem>)

                )}
            </MySelect>
            {(selectedKey == 4) && (
                <>
                    <MyTextField className="col-span-2" label="Address Line 1" />
                    <MyTextField className="col-span-2" label="Address Line 2" />
                    <MyTextField label="City" />
                    <MyTextField label="Province" />
                </>
            )}
            <div className="flex flex-col pt-2">
                <MyCheckbox>
                    Make My Primary Contact
                </MyCheckbox>
                <MyCheckbox>
                    Make My Billing Contact
                </MyCheckbox>
            </div>
        </MyDialogForm>
    )
}

export default NewContactModal;