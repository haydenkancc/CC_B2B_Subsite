import MyTableHeader from '../../../components/table/my-table-header.tsx';
import MyColumn from '../../../components/table/my-column.tsx';
import {Button, Cell, Input, SearchField, Table, TableBody} from 'react-aria-components';
import MyRow from '../../../components/table/my-row.tsx';
import {Eye} from '@phosphor-icons/react';

const items = [
    { id: 1, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 2, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 3, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 4, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 5, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 6, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 7, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 8, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
    { id: 9, time: '2021-03-17 04:33:17', action: 'User logged in', user: 'wile.e.coyote@cc.ca', transaction: '1234567' },
]

function Logs() {
    return (
        <div className="pb-20 px-8">
            <div className="pb-12">
                <SearchField>
                    <Input className="pl-3 pr-3 pt-2 pb-2 bg-ghost-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Logs" />
                </SearchField>
            </div>
            <Table className="w-full border-separate border-spacing-0" aria-label="Documents">
                <MyTableHeader>
                    <MyColumn className="pl-4" isRowHeader>Time</MyColumn>
                    <MyColumn>Action</MyColumn>
                    <MyColumn>User</MyColumn>
                    <MyColumn>Transaction ID</MyColumn>
                </MyTableHeader>
                <TableBody items={items}>
                    {item =>
                        <MyRow>
                            <Cell>
                                <div className="pl-4 pt-1 pb-1">
                                    {item.time}
                                </div>
                            </Cell>
                            <Cell className="">
                                {item.action}
                            </Cell>
                            <Cell>
                                {item.user}
                            </Cell>
                            <Cell className="pr-4">
                                {item.transaction}
                            </Cell>
                        </MyRow>
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Logs;