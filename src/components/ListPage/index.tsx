import { useState } from 'react';
import Form from '../Form'
import List from '../List'

interface ListPageProps {
    list: {
        id: Number;
        name: String;
        items: Array<Object>;
    }
}

export default function ListPage({ list }: ListPageProps) {
    const [todoList, setTodoList] = useState(() => {
        const savedTodoList = localStorage.getItem('todoList');
        return savedTodoList ? JSON.parse(savedTodoList) : [];
    });

    function addTodo(newItem: String): void {
        if (newItem === '') return;

        const todoItem = {
            pageId: list.id,
            id: Math.random(),
            value: newItem,
            isDone: false
        };

        const newTodoList = [...todoList, todoItem];
        setTodoList(newTodoList);
    };

    function deleteTodo(id: Number): void {
        const newTodoList = todoList.filter((todo: any) => todo.id !== id);
        setTodoList(newTodoList);
    }

    return (
        <div>
            <Form add={addTodo} />
            <List todoList={todoList} deleteTodo={deleteTodo} />
        </div>
    );
};