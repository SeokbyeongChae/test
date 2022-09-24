<template>
  <div class="nameView">
    <div class="nameView__groups">
      <div class="nameView__groupName"></div>
      <div class="nameView__groupItems">
        <div class="nameView__groupItem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("link", "getList"),
  },
};
</script>

<style></style>
