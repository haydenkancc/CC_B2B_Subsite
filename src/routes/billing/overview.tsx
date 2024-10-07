import { useState } from 'react';

import {
    Button,
    Dialog,
    DialogTrigger, Heading, Input, Label, Modal, ModalOverlay,
    SearchField,
    TextField, ToggleButton

} from 'react-aria-components';


import './billing.css';

import { SquareSplitVertical, GridNine } from '@phosphor-icons/react';

const items = [
    { id: 1, first: 'Bugs', last: 'Bunny', role: 'President', phone: '(647) 327-6457', email: 'bugs.bunny@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', primary: true, web: 'Administrator' },
    { id: 2, first: 'Daffy', last: 'Duck', role: 'Accounting Manager', phone: '(416) 674-9248', email: 'daffy.duck@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', billing: true, web: 'Extended Access' },
    { id: 3, first: 'Porky', last: 'Pig', role: 'Communications Director', phone: '(437) 860-0731', email: 'porky.pig@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', web: 'Extended-Access' },
    { id: 4, first: 'Yosemite', last: 'Sam', role: 'Business Analyst', phone: '(416) 440-7536', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'yosemite.sam@cc.ca', web: 'Limited Access' },
    { id: 5, first: 'Marvin', last: 'the Martian', role: 'Alien', phone: '(416) 104-3642', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'marvin.the.martian@cc.ca', web: 'Limited Access'},
    { id: 6, first: 'Wile E.', last: 'Coyote', role: 'Coyote', phone: '(647) 412-0786', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'wile.e.coyote@cc.ca', web: 'View-Only'},
    { id: 7, first: 'Elmer', last: 'Fudd', role: 'Quantitative Analyst', phone: '(416) 488-7471', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'elmer.fudd@cc.ca', web: 'View-Only'},
    { id: 8, first: 'Tom', last: '', role: 'Cat', phone: '(437) 324-3485', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'tom@cc.ca', web: 'View-Only' },
    { id: 9, first: 'Jerry', last: '', role: 'Mouse', phone: '(416) 992-7455', email: 'jerry@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', web: 'View-Only'},

]

function Overview() {

    const [ showGrid, setShowGrid ] = useState(false);

    return (
        <div className="pb-32">
            <div className="pb-12 flex justify-between">
                <div className="bg-oxford-blue px-4 py-2 text-ghost-white">Hallo</div>
            </div>
        </div>
    )
}

export default Overview;