import { useState } from 'react';

interface formProps {
    addTodo: Function;
}

export default function Form({ addTodo }: formProps) {
    const [newItem, setNewItem] = useState('');

    function addNewTodo(): void {
        if (newItem === '') return;
        addTodo(newItem);
        setNewItem('');
    };

    return (
        <>
            <input type="text" id="textInput" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={addNewTodo}>Add</button>
        </>
    );
};