import {Column, ColumnProps} from 'react-aria-components';
import './my-column.css';

function MyColumn(props: ColumnProps) {
    return (
        <Column className="my-column-Column" {...props}>
        </Column>
    );
}

export default MyColumn;