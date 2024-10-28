import MyTextField from '../../../components/form/my-text-field.tsx';
import {Button, ListBox, ListBoxItem} from 'react-aria-components';
import './general.css';

function General() {
    return (
        <div className="pb-20 px-8">
            <div className="pb-8 flex justify-between">
                <Button className="general-Button">
                    Save Changes
                </Button>
                <Button className="general-Button--cancel">
                    Discard Changes
                </Button>
            </div>
            <div className="pl-4 pr-4 pt-8 pb-8 bg-white border rounded-sm">
                <ListBox layout="grid" orientation="horizontal" className="grid w-full grid-cols-3 gap-x-8 gap-y-8">
                    <ListBoxItem>
                        <MyTextField label="Legal Company Name"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="Trade Company Name"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="Date of Application"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="Business Since"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="Business Number"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="HST / PST Number"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="Date of Application"/>
                    </ListBoxItem>
                    <ListBoxItem>
                        <MyTextField label="Date of Application"/>
                    </ListBoxItem>
                </ListBox>
            </div>
        </div>
    )
}

export default General;