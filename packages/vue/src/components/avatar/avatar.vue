<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from '@/components/button/button.vue';
import { AvatarTypes } from '@/constants/components/avatar';

export default defineComponent({
  name: 'AvatarComponent',
  components: {
    ButtonComponent,
  },
  props: {
    type: {
      type: String,
      default: AvatarTypes.Text,
    },
    text: {
      type: String,
      default: 'Avatar',
    },
    source: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    handleClick: {
      type: Function,
    },
  },
  computed: {
    isText: function () {
      return this.type === AvatarTypes?.Text;
    },
  },
});
</script>
<template>
  <div
    :class="`app-avatar d-flex align-items-center justify-content-center ${
      isText ? 'app-avatar-text' : ''
    }`"
  >
    <ButtonComponent @click="handleClick">
      <template #btnContent>
        <div>
          <p v-if="isText">{{ text?.charAt(0) }}</p>
          <img :src="source" :alt="imageAlt" v-else />
        </div>
      </template>
    </ButtonComponent>
  </div>
</template>
