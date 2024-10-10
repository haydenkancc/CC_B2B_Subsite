import './contacts.css';

import {useState} from 'react';
import MyTable from './my-table.tsx';
import MyGrid from './my-grid.tsx';

const items = [
    { id: 1, first: 'Bugs', last: 'Bunny', role: 'President', phone: '(647) 327-6457', email: 'bugs.bunny@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', primary: true, web: 'Administrator' },
    { id: 2, first: 'Daffy', last: 'Duck', role: 'Accounting Manager', phone: '(416) 674-9248', email: 'daffy.duck@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', billing: true, web: 'Extended Access' },
]

function BillingContacts() {

    const [ showGrid, setShowGrid ] = useState(false);

    return (
        <div>
            {showGrid ? <MyGrid items={items} /> : <MyTable items={items} />}
        </div>
    )
}

export default BillingContacts;