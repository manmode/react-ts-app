import classnames from 'classnames';
import ListItem from "../ListItem/ListItem";
function List({
    className
}) {
    return (
        <div className={classnames('divide-y divide-slate-200', className)}>
            <ListItem>HMButton</ListItem>
            <ListItem>HMAccordian</ListItem>
            <ListItem>HMText</ListItem>
            <ListItem>HMCheckbox</ListItem>
            <ListItem>HMRadioset</ListItem>
            <ListItem>HMPanel</ListItem>
            <ListItem>HMHeader</ListItem>
        </div>
    )
}
export default List;