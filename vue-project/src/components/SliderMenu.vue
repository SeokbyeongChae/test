<template>
  <div class="sliderMenu">
    <div
      v-for="(menu, index) of menus"
      :key="index"
      :width="100 / menu.length + '%'"
      @click="$emit('select', index)"
    >
      {{ menu.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sliderMenu {
}
</style>
