import MyTableHeader from '../../../components/table/my-table-header.tsx';
import MyColumn from '../../../components/table/my-column.tsx';
import {Button, Cell, ResizableTableContainer, Table, TableBody} from 'react-aria-components';
import MyRow from '../../../components/table/my-row.tsx';
import {PencilSimple, Trash} from '@phosphor-icons/react';


function MyTable({ items }) {
    return (
        <ResizableTableContainer>

            <Table className="w-full border-separate border-spacing-0" aria-label="Addresses">
                <MyTableHeader>
                    <MyColumn className="pl-4" isRowHeader>Order #</MyColumn>
                    <MyColumn>Date</MyColumn>
                    <MyColumn>Purchaser</MyColumn>
                    <MyColumn>Ship To</MyColumn>
                    <MyColumn>Total</MyColumn>
                    <MyColumn>Status</MyColumn>
                    <MyColumn></MyColumn>
                </MyTableHeader>
                <TableBody items={items}>
                    {item => (
                        <MyRow>
                            <Cell className="pl-4 py-6 text-violet/950 underline font-medium">{item.order_no}</Cell>
                            <Cell>{item.date}</Cell>
                            <Cell>{item.purchaser}</Cell>
                            <Cell>{item.ship_to}</Cell>
                            <Cell>{item.total}</Cell>
                            <Cell>{item.status}</Cell>
                            <Cell>View | Re-Order </Cell>
                        </MyRow>

                    )}
                </TableBody>
            </Table>
        </ResizableTableContainer>
    )
}

export default MyTable;