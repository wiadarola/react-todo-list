import { useState } from 'react';
import SideBar from '../SideBar';
import ListPage from '../ListPage';

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
            id: Math.random(),
            name,
            items: [],
        };
        setLists([...lists, newList]);
        setActiveList(newList.id);

        localStorage.setItem('lists', JSON.stringify([...lists, newList]));
    };

    function deleteList(id: number) {
        const newLists = lists.filter((list: any) => list.id !== id);
        if (newLists.length === 0) { setActiveList(-1); }
        else if (activeList === id) { setActiveList(newLists[0].id); }
        setLists(newLists);
        localStorage.setItem('lists', JSON.stringify(newLists));
    };

    const activeListPage = lists.find((list: any) => list.id === activeList);

    return (
        <div style={contentStyle}>
            < SideBar addNewList={addNewList} setActiveList={setActiveList} onDeleteClick={deleteList} lists={lists} />
            {activeList === -1 ? <h1>Click on a list to get started</h1> : <><h1>{activeListPage.name}</h1>< ListPage page={activeListPage} /></>}
        </div>
    );
};
