<script lang="ts">
import { defineComponent } from 'vue';
import '@/third-party/index';

export default defineComponent({
  name: 'HeaderElement',
  props: {
    navOptions: {
      type: Object,
      default: null,
    },
    hasSlot: {
      type: Boolean,
      default: false,
    },
    slotName: {
      type: String,
      default: '',
    },
  },
});
</script>

<template>
  <header-component :navOptions="navOptions">
    <!-- eslint-disable vue/no-deprecated-slot-attribute !-->
    <div v-if="hasSlot" :slot="slotName">
      <slot name="header" />
    </div>
  </header-component>
</template>
