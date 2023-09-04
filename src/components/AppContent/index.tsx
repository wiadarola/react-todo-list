import { useState } from 'react';
import SideBar from '../SideBar';
import ListPage from '../ListPage';

export default function AppContent() {
    const [lists, setLists] = useState(() => {
        const storedLists = localStorage.getItem('lists');
        return storedLists ? JSON.parse(storedLists) : [];
    })

    const [activeList, setActiveList] = useState(-1);

    const contentStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
    };

    type ListType = {
        id: Number;
        name: String;
        items: Array<Object>;
    }

    return (
        <div style={contentStyle}>
            < SideBar lists={lists} setLists={setLists} setActiveList={setActiveList} />
            {activeList !== -1 ? <ListPage list={lists.find((list: ListType) => list.id === activeList)} /> : null}
        </div>
    );
};
