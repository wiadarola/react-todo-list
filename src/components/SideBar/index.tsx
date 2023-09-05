import { useState } from "react";
import './index.css';
import NewForm from "../NewForm";

interface SideBarProps {
    addNewList: Function;
    onDeleteClick: Function;
    setActiveList: Function;
    lists: any[];
}

export default function SideBar({ addNewList, onDeleteClick, setActiveList, lists }: SideBarProps) {

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
            <NewForm addNew={addNewList} newWhat="list" />
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
