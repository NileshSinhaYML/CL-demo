<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from '@/components/card/card.vue';
export default defineComponent({
  name: 'TodoList',
  components: {
    CardComponent,
  },
  props: {
    list: [],
    markAsResolved: {
      type: Function,
      default: null,
    },
    deleteItem: {
      type: Function,
      default: null,
    },
  },
  data: () => ({
    title: 'Todo List',
    resolved: 'Mark as done',
    undo: 'Undo',
    deleteText: 'Delete',
  }),
});
</script>

<template>
  <div
    class="d-flex align-items-start justify-content-start app-add-todo-container"
  >
    <CardComponent>
      <template #cardHeader>
        <h2>{{ title }}</h2>
      </template>
      <template #cardContent>
        <ul class="app-todo-list">
          <li
            v-for="({ id, value, isResolved }, index) in list"
            :key="`${id}-${index}`"
            class="d-flex align-items-center justify-content-space-between"
            :class="isResolved && 'app-todo-list-item-done'"
          >
            <span>{{ value }}</span>
            <div class="actions-container">
              <button @click="markAsResolved(id)">
                {{ isResolved ? undo : resolved }}
              </button>
              <button @click="deleteItem(id)">
                {{ deleteText }}
              </button>
            </div>
          </li>
        </ul>
      </template>
    </CardComponent>
  </div>
</template>
