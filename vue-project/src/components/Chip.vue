<template>
  <RouterLink class="chip">
    {{ text }}
  </RouterLink>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";

.chip {
  @include sBody2Reg;

  height: 32px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
