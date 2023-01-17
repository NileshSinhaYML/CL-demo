<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from '@/components/card/card.vue';
import InputComponent from '@/components/input-bar/input.vue';
export default defineComponent({
  name: 'AddTodo',
  components: {
    CardComponent,
    InputComponent,
  },
  data: () => ({
    cardHeading: 'Add Todo Item',
  }),
  props: {
    addTodo: {
      type: Function,
    },
    flush: {
      type: Boolean,
    },
  },
});
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center app-add-todo-container"
  >
    <CardComponent>
      <template #cardContent>
        <InputComponent
          :inputLabel="cardHeading"
          :handleInput="addTodo"
          :flush="flush"
        />
      </template>
    </CardComponent>
  </div>
</template>
