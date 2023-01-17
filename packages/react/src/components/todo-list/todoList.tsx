import React, { MouseEvent } from 'react';
import { TodoListItem } from '../../types/app';
import Button from '../button/button';
import CardComponent from '../card/card';
import './_todo-list.scss';

interface TodoListProps {
  title?: string;
  list: TodoListItem[];
  markAsResolved: (id: string) => void;
  deleteItem: (id: string) => void;
}

const TodoList = ({
  title = 'Todo List',
  list,
  markAsResolved,
  deleteItem,
}: TodoListProps) => {
  return (
    <div className="d-flex align-items-start justify-content-start app-add-todo-container">
      <CardComponent>
        <>
          <h2>{title}</h2>
          <ul className="app-todo-list">
            {list?.map(
              ({ id, value, isResolved }: TodoListItem, index: number) => (
                <li
                  key={`${id}-${index}`}
                  className={`d-flex align-items-center justify-content-space-between ${
                    isResolved && 'app-todo-list-item-done'
                  }`}
                >
                  <span>{value}</span>
                  <div className="actions-container">
                    <Button
                      btnText={isResolved ? 'Undo' : 'Mark as done'}
                      handleClick={(event: MouseEvent) => {
                        markAsResolved(id);
                      }}
                    />
                    <Button
                      btnText="Delete"
                      handleClick={(event: MouseEvent) => {
                        deleteItem(id);
                      }}
                    />
                  </div>
                </li>
              )
            )}
          </ul>
        </>
      </CardComponent>
    </div>
  );
};

export default TodoList;
