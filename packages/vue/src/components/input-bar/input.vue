<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputComponent',
  data: () => ({
    inputValue: '',
  }),
  props: {
    inputLabel: {
      type: String,
      default: '',
    },
    handleInput: {
      type: Function,
      default: null,
    },
    flush: {
      type: Boolean,
    },
  },
  methods: {
    handleInputChange(event: KeyboardEvent) {
      this.handleInput(event, this.inputValue);
    },
  },
  watch: {
    flush(oldVal) {
      if (oldVal) {
        this.inputValue = '';
      }
    },
  },
});
</script>

<template>
  <div class="app-input-bar">
    <label for="inputBar">{{ inputLabel }} </label>
    <input
      v-model="inputValue"
      id="inputBar"
      @keyup="handleInputChange"
      autocomplete="off"
    />
  </div>
</template>
