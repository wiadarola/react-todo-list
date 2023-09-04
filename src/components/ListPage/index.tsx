import { Key, useState } from "react";
interface ListPageProps {
    page: {
        name: string,
        id: Key,
        items: [],
    },
    addItem: Function,
    delItem: Function,
}

export default function ListPage({ page, addItem, delItem }: ListPageProps) {
    const [newItemName, setNewItemName] = useState('');

    return (
        <div>
            <input id='ListPageInput' value={newItemName} type="text" onChange={(e) => setNewItemName(e.target.value)} />
            <button onClick={() => addItem(newItemName)}>Add</button>
            <ul>
                {page.items.map((item: { id: Key, name: String }) =>
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => delItem(item.id)}>U+274C</button>
                    </li>
                )}
            </ul>
        </div>
    );
}