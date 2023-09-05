import './index.css';
import { useState } from "react";

interface NewFormProps {
    addNew: Function,
    newWhat?: string,
}

export default function NewForm({ addNew, newWhat }: NewFormProps) {
    const [newName, setNewName] = useState('');

    return <form autoComplete='off' className="newListForm" onSubmit={(e) => { e.preventDefault(); setNewName(''); addNew(newName) }}>
        <input id='ListPageInput' value={newName} type="text" onChange={(e) => setNewName(e.target.value)} placeholder={`New ${newWhat || "thing"}...`} />
        <img src="https://img.icons8.com/30/16B8F3/plus.png" alt="Website" onClick={(e) => { e.preventDefault(); setNewName(''); addNew(newName) }} />
    </form>
}