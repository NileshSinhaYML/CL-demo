<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/header/header.vue';
import AvatarComponent from '@/components/avatar/avatar.vue';
import { landingPageConfig } from '@/constants/views/landing.config';

import { AvatarTypes } from '@/constants/components/avatar';
import { NavbarModes } from '@/constants/components/header';
import { imageSources } from '@/constants/views/landing';

export default defineComponent({
  name: 'LandingVue',
  components: {
    HeaderComponent,
    AvatarComponent,
  },
  data: () => ({
    landingPageConfig,
    isDarkMode: true,
    navModes: NavbarModes,
    avatarTypes: AvatarTypes,
  }),
  computed: {
    imageSource() {
      return this.isDarkMode ? imageSources.dark : imageSources.light;
    },
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    checkBtnClick() {
      alert('clicked');
    },
  },
});
</script>
<template>
  <div class="app-landing">
    <div
      v-for="(
        { name, config, hasCustomStyling, hasSlot }, index
      ) in landingPageConfig?.options"
      :key="index"
      :class="`app-landing-variant ${
        hasCustomStyling ? 'app-landing-variant-custom' : ''
      }`"
    >
      <h1>{{ name }}</h1>
      <header class="header">
        <HeaderComponent
          :navOptions="
            name === 'With Right Slot'
              ? {
                  ...config,
                  mode: isDarkMode ? navModes.Dark : navModes.Light,
                }
              : { ...config }
          "
          :hasSlot="hasSlot"
          :slotName="config?.topRightSlot?.slotName"
          @button-click="checkBtnClick"
        >
          <template #header>
            <AvatarComponent
              :type="avatarTypes.Image"
              :source="imageSource"
              @click="toggleMode"
            />
          </template>
        </HeaderComponent>
      </header>
    </div>
  </div>
</template>