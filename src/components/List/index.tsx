interface listProps {
    todoList: Array<Object>;
    deleteTodo: Function;
}

export default function List({ todoList, deleteTodo }: listProps) {
    return (
        <>
            <h1>Todo List</h1>
            {todoList.length === 0 && <p>No items in the list</p>}
            <ul>
                {todoList.map((todo: any) => (
                    <li key={todo.id}>
                        <input type="Checkbox" />
                        {todo.value}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}