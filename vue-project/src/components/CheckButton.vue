<template>
  <div class="checkButton">
    <div
      class="checkButton__circle"
      :class="{ 'checkButton__circle--selected': selected }"
    >
      <span class="checkmark">
        <div class="checkmarkStem"></div>
        <div class="checkmarkKick"></div>
      </span>
    </div>
    <div class="checkButton__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
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

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
.checkButton {
  display: flex;
  align-items: center;

  &__circle {
    width: 24px;
    height: 24px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $gray04;
    margin-right: 8px;

    &--selected {
      background-color: $positive01;
    }
  }

  &__text {
    @include sBody2Reg;
    color: $dark01;
  }
}

.checkmark {
  display: inline-block;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
}

.checkmarkStem {
  position: absolute;
  width: 3px;
  height: 9px;
  background-color: $light01;
  left: 11px;
  top: 6px;
}

.checkmarkKick {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: $light01;
  left: 8px;
  top: 12px;
}
</style>
