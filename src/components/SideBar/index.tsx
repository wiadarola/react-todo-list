import { useState } from "react";

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
        alignItems: 'center',
        backgroundColor: 'grey',
    };

    function onAddNewClick() {
        addNewList(newListName);
        setNewListName('');
    };

    return (
        <div style={sideBarStyle}>
            <h1>SideBar</h1>
            <input type="text" value={newListName} id="newListInput" onChange={(e) => setNewListName(e.target.value)} />
            <button onClick={() => onAddNewClick()}>Add List</button>
            {lists.map((list: any, index: number) => {
                return <div key={index}>
                    <span onClick={() => setActiveList(list.id)}>{list.name}</span>
                    <button onClick={() => onDeleteClick(list.id)}>Delete</button>
                </div>
            })}
        </div>
    );
};
