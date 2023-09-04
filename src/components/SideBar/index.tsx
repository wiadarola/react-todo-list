import Form from "../Form";

interface SideBarProps {
    lists: Array<Object>;
    setLists: Function;
    setActiveList: Function;
}

export default function SideBar({ lists, setLists, setActiveList }: SideBarProps) {
    function addList(name: String) {
        const newList = {
            id: Math.random(),
            name: name,
            items: [],
        };
        setLists([...lists, newList]);
        localStorage.setItem('lists', JSON.stringify([...lists, newList]));
    }

    const sideBarStyle: React.CSSProperties = {
        display: 'grid',
        gridAutoColumns: 'auto',
        backgroundColor: 'gray',
    };

    return (
        <div style={sideBarStyle}>
            <div>< Form add={addList} /></div>
            {lists.map((list: any) => {
                return (
                    <div onClick={() => setActiveList(list.id)} key={list.id} >
                        {list.name}
                        <span onClick={() => console.log("poop")}>&#10005;</span>
                    </div>
                );
            })}
        </div >
    );
};
