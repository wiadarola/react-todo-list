import { useState } from 'react';
import SideBar from '../SideBar';
// import ListPage from '../ListPage';

export default function AppContent() {
    const [lists, setLists] = useState(() => {
        const storedLists = localStorage.getItem('lists');
        return storedLists ? JSON.parse(storedLists) : [];
    });

    const [activeList, setActiveList] = useState(-1);

    const contentStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
    };

    function addNewList(name: String) {
        const newList = {
            name,
            items: [],
            id: Math.random(),
        };
        setLists([...lists, newList]);
        setActiveList(lists.length);

        localStorage.setItem('lists', JSON.stringify([...lists, newList]));
    };

    function deleteList(id: number) {
        const newLists = lists.filter((list: any) => list.id !== id);
        setLists(newLists);
        localStorage.setItem('lists', JSON.stringify(newLists));
    };

    return (
        <div style={contentStyle}>
            < SideBar addNewList={addNewList} onDeleteClick={deleteList} lists={lists} />
        </div>
    );
};
