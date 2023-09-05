import { Key, useState } from "react";
import './index.css';
import NewForm from '../NewForm';
import ListItem from '../ListItem';

interface ListPageProps {
    page: {
        name: string,
        id: Key,
        items: [],
    },
    addItem: Function,
    delItem: Function,
    updateItem: Function,
}

export default function ListPage({ page, addItem, delItem, updateItem }: ListPageProps) {
    const [showCompleted, setShowCompleted] = useState(true);

    const [seed, setSeed] = useState(1);
    const reset = () => {
        setSeed(Math.random());
    }

    function onItemCheckChange(itemId: Number, checked: Boolean) {
        updateItem(itemId, checked);
        reset();
    }

    return (
        <div id="ListPage">
            <div id="header">
                <h1>{page.name}</h1>
                <NewForm addNew={addItem} newWhat={`${page.name.toLowerCase()} item`} />
                <div id="showCompleted"><input type="checkbox" value="Show Completed" checked={showCompleted} onClick={() => setShowCompleted(!showCompleted)} /> <label>Show Completed</label></div>
            </div>
            <ul style={{ padding: "0" }}>
                {page.items.map((item: { id: Key, name: String, checked: boolean }) => {
                    if (!showCompleted && item.checked) return null;
                    return <ListItem item={item} delItem={delItem} onItemCheckChange={onItemCheckChange} />
                })}
            </ul>
        </div>
    );
}