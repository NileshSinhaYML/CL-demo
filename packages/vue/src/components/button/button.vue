<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ButtonComponent',
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    customClassName: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
  },
});
</script>
<template>
  <button
    :class="`app-button ${isLink ? 'app-button-link' : ''} ${customClassName}`"
    @click="$emit('click')"
  >
    {{ btnText }}
    <slot name="btnContent" />
  </button>
</template>
