<template>
  <div class="button" :class="{ 'button--disabled': disabled }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";

.button {
  @include sBody2Reg;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  color: $light01;
  background-color: $positive01;

  &--disabled {
    background-color: $gray05;
  }
}
</style>
