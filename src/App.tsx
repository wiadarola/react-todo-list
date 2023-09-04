import { useState } from 'react';

import Form from './components/Form'
import List from './components/List'

export default function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('todoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  function addTodo(newItem: String): void {
    if (newItem === '') return;

    const todoItem = {
      id: Math.random(),
      value: newItem,
      isDone: false
    };

    const newTodoList = [...todoList, todoItem];
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  function deleteTodo(id: Number): void {
    const newTodoList = todoList.filter((todo: any) => todo.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

  return (
    <>
      <Form addTodo={addTodo} />
      <List todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
};