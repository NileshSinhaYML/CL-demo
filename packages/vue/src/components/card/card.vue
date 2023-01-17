<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CardComponent',
});
</script>
<template>
  <div class="card-main">
    <slot name="cardHeader" />
    <slot name="cardContent" />
    <slot name="cardFooter" />
  </div>
</template>
