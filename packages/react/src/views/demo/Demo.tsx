import React, { FormEvent, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import AddTodo from '../../components/add-todo/addTodo';
import TodoList from '../../components/todo-list/todoList';
import Header from '../../components/header/header';

import { KeyboardKeys } from '../../constants/keyboard';
import { TodoListItem } from '../../types/app';

import { options } from '../../components/header/header.constants';

const Demo = () => {
  const [todoList, updateTodoList] = useState<TodoListItem[]>([]);
  const [flush, flushInput] = useState<boolean>(false);
  const [inputVal, updateInputVal] = useState<string>('');

  const handleInput = (value: string) => {
    updateInputVal(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    updateTodoList([
      ...todoList,
      {
        id: uuid(),
        value: inputVal,
        isResolved: false,
      },
    ]);
  };

  const markAsResolved = (listId: string) => {
    const index = [...todoList].findIndex(({ id }) => id === listId);
    let newList = [...todoList] as TodoListItem[];
    if (!index) {
      newList.unshift({
        ...todoList[index],
        isResolved: !todoList[index]?.isResolved,
      });
      newList.splice(index + 1, 1);
    } else {
      newList.splice(index, 1, {
        ...todoList[index],
        isResolved: !todoList[index]?.isResolved,
      });
    }

    updateTodoList(newList);
  };

  const deleteItem = (listId: string) => {
    updateTodoList([...todoList].filter(({ id }) => id !== listId));
  };

  useEffect(() => {
    if (flush) {
      flushInput(false);
    }
  }, [flush]);

  useEffect(() => {
    flushInput(true);
  }, [todoList]);
  return (
    <>
      <header className="app-header">
        <Header options={{ ...options }} />
      </header>
      <section className="app-content d-flex">
        <AddTodo
          handleInput={handleInput}
          flush={flush}
          handleSubmit={handleSubmit}
        />
        {!!todoList?.length && (
          <TodoList
            list={todoList}
            markAsResolved={markAsResolved}
            deleteItem={deleteItem}
          />
        )}
      </section>
    </>
  );
};

export default Demo;
