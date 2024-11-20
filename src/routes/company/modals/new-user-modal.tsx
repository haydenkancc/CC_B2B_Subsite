import {Button, Dialog, Heading, Input, Label, Modal, ModalOverlay, TextField, Text, Key} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';
import MyCheckboxGroup from '../../../components/form/my-checkbox-group.tsx';
import MyCheckbox from '../../../components/form/my-checkbox.tsx';
import MySelectItem from '../../../components/form/my-select-item.tsx';
import MySelect from '../../../components/form/my-select.tsx';
import {useState} from 'react';
import { Question } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const items = [
    { id: 1, location: 'Head Office', first: "Bugs", last: "Bunny", address1: '75 West Wilmot Street', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 1K7', billing: true, shipping: true, permission: "Extended Access" },
    { id: 2, location: 'Aquarium', first: 'Robert', last: 'Ripley', address1: '288 Bremner Boulevard', address2: '', city: 'Toronto', province: 'ON', postal: 'M5V 3L9', permission: "Limited Access" },
    { id: 3, location: 'Vaughan Office', first: 'Barry', last: 'Bonds', address1: '270 West Beaver Creek Road', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 3Z1', permission: "View-Only" },
]

const perms = [
    { id: 1, permission: "Extended Access" },
    { id: 1, permission: "Limited Access" },
    { id: 1, permission: "View-Only" },
]

function NewUserModal() {
    const [selectedKey, setSelectedKey] = useState<Key | null>();
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-3xl py-8">Add New User</Heading>
            <MyTextField label="Name" />
            <MyTextField label="Position" />
            <MyTextField label="Phone" />
            <MyTextField label="Email" />
            <MySelect onSelectionChange={(key) => {setSelectedKey(key)}} items={items} label="Address" className="col-span-2">
                {item => (
                    (<MySelectItem>
                        <Text slot="label" className="flex">{item.location}</Text>
                        <Text slot="description" className="text-xs text-oxford-blue/75">{item.address1} {item.address2}, {item.city} {item.province} {item.postal}</Text>
                    </MySelectItem>)
                )}
            </MySelect>
            <MySelect onSelectionChange={(key) => {setSelectedKey(key)}} items={items} label={
                <span>
                    <Link to="/permissions" target="_blank" className="flex flex-row items-center">
                        <div>Permissions</div>
                        <Question size={18} className="ml-1.5 cursor-pointer" />
                    </Link>
                </span>
            } className="col-span-2">
                {item => (
                    (<MySelectItem>
                        <Text slot="label" className="flex">{item.permission}</Text>
                    </MySelectItem>)
            )}
            </MySelect>
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

export default NewUserModal;