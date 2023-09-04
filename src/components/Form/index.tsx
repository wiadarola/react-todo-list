import { useState } from 'react';

interface formProps {
    add: Function;
}

export default function Form({ add }: formProps) {
    const [newItem, setNewItem] = useState('');

    function AddNew(): void {
        if (newItem === '') return;
        add(newItem);
        setNewItem('');
    };

    return (
        <>
            <input type="text" id="textInput" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={AddNew}>Add</button>
        </>
    );
};