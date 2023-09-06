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

    return (
        <div style={sideBarStyle} id='sideBar'>
            <h1>Lists</h1>
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
