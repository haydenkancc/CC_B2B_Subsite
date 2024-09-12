import {Button, Cell, Link, Table, TableBody} from 'react-aria-components';
import MyTableHeader from '../../../components/table/my-table-header.tsx';
import MyColumn from '../../../components/table/my-column.tsx';
import MyRow from '../../../components/table/my-row.tsx';
import samplePDF from '../../../assets/sample-pdf.pdf';
import {Eye} from '@phosphor-icons/react';

const items = [
    { id: 1, name: 'Utility Bill', date: '2024-08-07', src: samplePDF },
    { id: 2, name: 'Bank Statement', date: '2077-01-18', src: samplePDF },
    { id: 3, name: 'Master Business License', date: '2003-10-30', src: samplePDF },
    { id: 4, name: 'Article of Incorporation', date: '1997-02-03', src: samplePDF },
    { id: 5, name: 'Certificate for PST Exemption', date: '1945-09-02', src: samplePDF },
]

function Documents() {
    return (
        <Table className="w-full border-separate border-spacing-0" aria-label="Documents">
            <MyTableHeader>
                <MyColumn className="pl-4" isRowHeader>Date Uploaded</MyColumn>
                <MyColumn>Name</MyColumn>
                <MyColumn></MyColumn>
            </MyTableHeader>
            <TableBody items={items}>
                {item =>
                    <MyRow>
                        <Cell>
                            <div className="pl-4 pt-2 pb-2">
                                {item.date}
                            </div>
                        </Cell>
                        <Cell>
                            {item.name}
                        </Cell>
                        <Cell>
                            <div className="flex justify-end pr-4">
                                <Link className="p-2" href={item.src} target="_blank">
                                    <Eye weight="bold" className="text-oxford-blue/50"/>
                                </Link>
                            </div>
                        </Cell>
                    </MyRow>
                }
            </TableBody>
        </Table>
    )
}

export default Documents;