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

    return (
        <div style={sideBarStyle} id='sideBar'>
            <div style={sideBarHeader}>
                <h1>Lists</h1>
            </div>
            <form id="newListForm" onSubmit={(e) => { e.preventDefault(); setNewListName(''); addNewList(newListName); }}>
                <input type="text" value={newListName} id="newListInput" onChange={(e) => setNewListName(e.target.value)} placeholder="New list..." />
                <img src="https://img.icons8.com/30/16B8F3/plus.png" alt="Website" onClick={(e) => { e.preventDefault(); setNewListName(''); addNewList(newListName) }} />
            </form>

            <ul>
                {lists.map((list: any, index: number) => {
                    return <li key={index}>
                        <span onClick={() => setActiveList(list.id)}>{list.name}</span>
                        <button onClick={() => onDeleteClick(list.id)}>&#x2715;</button>
                    </li>
                })}
            </ul>
        </div>
    );
};
