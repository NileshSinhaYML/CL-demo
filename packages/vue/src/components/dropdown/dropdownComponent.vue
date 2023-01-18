<script lang="ts">
import { defineComponent } from 'vue';
import { dropDownMenuItems } from '../../constants/views/landing';

export default defineComponent({
  name: 'DropdownComponent',
  data: () => ({
    dropdownText: 'D',
    dropDownMenuItems: dropDownMenuItems,
  }),
});
</script>

<template>
  <div class="dropdown">
    <button
      class="dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <div>{{ dropdownText }}</div>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li
        class="dropdown-item"
        v-for="(item, index) in dropDownMenuItems"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<!--NOTE: Adding scoped styles so as to not override globally-->
<style lang="scss" scoped>
@import '../../styles/_variables';
.dropdown-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33.3333px;
  width: 35px;
  height: 35px;
  color: $white;
  background-color: $avatar-background;
  &::after {
    display: none;
  }
}
</style>
