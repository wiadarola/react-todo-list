import { useState } from "react";
import './index.css';

interface SideBarProps {
    addNewList: Function;
    onDeleteClick: Function;
    setActiveList: Function;
    lists: any[];
}

export default function SideBar({ addNewList, onDeleteClick, setActiveList, lists }: SideBarProps) {
    const [newListName, setNewListName] = useState('');

    const sideBarStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    };

    const sideBarHeader: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
    };

    function onAddNewClick() {
        addNewList(newListName);
        setNewListName('');
    };

    function openListPanel() { }

    return (
        <div style={sideBarStyle} id='sideBar'>
            <div style={sideBarHeader}>
                <h1>Poop</h1>
                <img src="https://img.icons8.com/30/16B8F3/plus.png" alt="Website" onClick={openListPanel} />
            </div>

            <input type="text" value={newListName} id="newListInput" onChange={(e) => setNewListName(e.target.value)} placeholder="New list..." />
            <button onClick={() => onAddNewClick()}>Add List</button>
            <ul>
                {lists.map((list: any, index: number) => {
                    return <li key={index}>
                        <span onClick={() => setActiveList(list.id)}>{list.name}</span>
                        <button onClick={() => onDeleteClick(list.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
};
