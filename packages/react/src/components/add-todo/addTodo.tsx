import React, { FormEvent } from 'react';
import CardComponent from '../card/card';
import InputBar from '../input-bar/input';
import './_add-todo.scss';

const inputLabel = 'Add Todo Item';

interface AddTodoProps {
  handleInput: (value: string) => void;
  flush?: boolean;
  handleSubmit: (event: FormEvent) => void;
}

const AddTodo = ({
  handleInput,
  flush = false,
  handleSubmit,
}: AddTodoProps) => (
  <div className="d-flex align-items-center justify-content-center app-add-todo-container">
    <CardComponent>
      <form onSubmit={handleSubmit} autoComplete="off">
        <InputBar
          inputLabel={inputLabel}
          handleInput={handleInput}
          flush={flush}
        />
      </form>
    </CardComponent>
  </div>
);

export default AddTodo;
