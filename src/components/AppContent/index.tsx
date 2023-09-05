import { useState } from 'react';
import SideBar from '../SideBar';
import ListPage from '../ListPage';
import WelcomePage from '../WelcomePage';
import './index.css';

export default function AppContent() {
    const [lists, setLists] = useState(() => {
        const storedLists = localStorage.getItem('lists');
        return storedLists ? [...JSON.parse(storedLists)] : [{
            id: Math.random(),
            name: "Groceries",
            items: [{ id: Math.random(), name: "Apples", checked: true }, { id: Math.random(), name: "Bananas", checked: false }]
        }];
    });

    const [activeList, setActiveList] = useState(-1);
    const activeListPage = lists.find((list: any) => list.id === activeList);

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

        const updateItems = [...activeListPage.items, { id: Math.random(), name, checked: false }];
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

    function updateListState(itemId: Number, checked: boolean) {
        const updateItems = activeListPage.items.map((listItem: any) => {
            if (listItem.id === itemId) { listItem.checked = checked; }
            return listItem;
        });
        activeListPage.items = updateItems;

        const newLists = [...lists.filter((list: any) => list.id !== activeListPage.id), activeListPage];

        setLists(newLists);
        localStorage.setItem('lists', JSON.stringify(newLists));
    }

    return (
        <div className="content-container">
            <div className="content">
                <SideBar
                    addNewList={addNewList}
                    setActiveList={setActiveList}
                    onDeleteClick={deleteList}
                    lists={lists}
                />
            </div>
            <div className="content">
                {activeList === -1
                    ? <WelcomePage />
                    : <ListPage
                        page={activeListPage}
                        updateItem={updateListState}
                        addItem={addListItem}
                        delItem={deleteListItem}
                    />
                }
            </div>
        </div>
    );
};
