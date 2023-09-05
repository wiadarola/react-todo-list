import { Key, useState } from "react";
import './index.css';

interface ListItemProps {
    item: {
        id: Key,
        name: String,
        checked: boolean,
    },
    delItem: Function,
    onItemCheckChange: Function,
}

export default function ListItem({ item, delItem, onItemCheckChange }: ListItemProps) {
    const [checked, setChecked] = useState(item.checked);

    function onCheckChange() {
        setChecked(!checked);
        item.checked = !checked;
        onItemCheckChange(item.id, !checked);
    }

    return <li key={item.id} className="listItem">
        <div>
            <input type="checkbox" checked={checked} onChange={() => onCheckChange()} />
            <span>{item.name}</span>
        </div>
        <button onClick={() => delItem(item.id)}>&#x2715;</button>
    </li>
}