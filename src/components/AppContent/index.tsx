import { useState } from 'react';
import SideBar from '../SideBar';
import ListPage from '../ListPage';

export default function AppContent() {
    const [lists, setLists] = useState(() => {
        const storedLists = localStorage.getItem('lists');
        return storedLists ? JSON.parse(storedLists) : [];
    });

    const [activeList, setActiveList] = useState(-1);
    const activeListPage = lists.find((list: any) => list.id === activeList);

    const contentContainerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
    };

    const contentStyle: React.CSSProperties = {
        border: '1px solid black',
        borderRadius: '5px',
        margin: '10px',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
        backgroundColor: 'white',
    };

    function addNewList(name: String) {
        if (name === '') { return; }

        const newList = {
            id: Math.random(),
            name,
            items: [],
        };
        setLists([...lists, newList]);
        setActiveList(newList.id);

        localStorage.setItem('lists', JSON.stringify([...lists, newList]));
    };

    function addListItem(name: String) {
        if (name === '') { return; }

        const updateItems = [...activeListPage.items, { id: Math.random(), name }];
        activeListPage.items = updateItems;

        const newLists = [...lists.filter((list: any) => list.id !== activeListPage.id), activeListPage];

        setLists(newLists);
        localStorage.setItem('lists', JSON.stringify(newLists));
    }

    function deleteList(id: number) {
        const newLists = lists.filter((list: any) => list.id !== id);
        if (newLists.length === 0) { setActiveList(-1); }
        else if (activeList === id) { setActiveList(newLists[0].id); }

        setLists(newLists);
        localStorage.setItem('lists', JSON.stringify(newLists));
    };

    function deleteListItem(itemId: Number) {
        const updateItems = activeListPage.items.filter((listItem: any) => listItem.id !== itemId);
        activeListPage.items = updateItems;

        const newLists = [...lists.filter((list: any) => list.id !== activeListPage.id), activeListPage];

        setLists(newLists);
        localStorage.setItem('lists', JSON.stringify(newLists));
    }

    return (
        <div style={contentContainerStyle}>
            <div style={contentStyle}>
                < SideBar addNewList={addNewList} setActiveList={setActiveList} onDeleteClick={deleteList} lists={lists} />
            </div>
            <div style={contentStyle}>
                {activeList === -1 ? <h1>Click on a list to get started</h1> :
                    <> <h1>List: {activeListPage.name}</h1> < ListPage page={activeListPage} addItem={addListItem} delItem={deleteListItem} /> </>}
            </div>
        </div>
    );
};
