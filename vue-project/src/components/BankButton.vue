<template>
  <div class="bankButton" :class="{ 'bankButton--selected': selected }">
    <img :src="imagePath" class="bankButton__image" />
    <div
      class="bankButton__text"
      :class="{ 'bankButton__text--selected': selected }"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";

.bankButton {
  @include sBody2Reg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // max-width: 96px;
  height: 96px;
  background-color: $gray05;
  border-radius: 8px;

  &--selected {
    border: 2px solid $positive01;
  }

  &__image {
    width: 50%;
    max-width: 48px;
    height: 50%;
    max-height: 48px;
  }

  &__text {
    @include sBody2Reg;
    color: $dark01;
  }
}
</style>
