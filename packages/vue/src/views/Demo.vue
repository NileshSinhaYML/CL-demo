<script lang="ts">
import { defineComponent } from 'vue';
import { v4 as uuid } from 'uuid';
import HeaderComponent from '@/components/header/header.vue';
import TodoList from '@/components/todo-list/todoList.vue';
import AddTodo from '@/components/add-todo/addTodo.vue';
import { KeyboardKeys } from '@/constants/keyboard';
import { TodoListItem } from '@/types/views/appView';

import { options } from '@/components/header/header.constants';

export default defineComponent({
  name: 'DemoView',
  components: {
    HeaderComponent,
    AddTodo,
    TodoList,
  },
  data: () => ({ todoList: [] as TodoListItem[], flush: false, options }),
  methods: {
    addTodo(event: KeyboardEvent, value: string) {
      if (this.flush) {
        this.flush = false;
      }
      if (event.key === KeyboardKeys.Enter && !!value) {
        this.todoList.push({
          id: uuid(),
          value,
          isResolved: false,
        });
        this.flush = true;
      }
    },
    markAsResolved(listId: string) {
      const index = this.todoList.findIndex(({ id }) => id === listId);
      this.todoList.splice(index, 1, {
        ...this.todoList[index],
        isResolved: !this.todoList[index]?.isResolved,
      });
    },
    deleteItem(listId: string) {
      const index = this.todoList.findIndex(({ id }) => id === listId);
      this.todoList.splice(index, 1);
    },
  },
});
</script>
<template>
  <main class="app-main">
    <header className="app-header">
      <HeaderComponent :navOptions="options" />
    </header>
    <section class="app-content d-flex">
      <AddTodo :addTodo="addTodo" :flush="flush" />
      <TodoList
        :list="todoList"
        :markAsResolved="markAsResolved"
        :deleteItem="deleteItem"
        v-if="!!todoList.length"
      />
    </section>
  </main>
</template>
