<template>
  <div class="indexView">
    <div>slidermenu..</div>
    <div class="indexView__body">
      <CheckButton
        :text="'전체선택'"
        :selected="checkAll"
        class="indexView__checkButton"
        @click="onClickCheckAllHandler"
      />
      <div class="indexView__contents">
        <div
          v-for="(type, index) in getBusinessTypes"
          :key="index"
          class="indexView__content"
        >
          <div class="indexView__typeText">
            {{ type.name }}
          </div>
          <div class="indexView__items">
            <div
              v-for="(item, index) in getListByType(type.code)"
              :key="index"
              class="indexView__itemFrame"
            >
              <BankButton
                :text="item.mdatRprsOrgNm"
                :imagePath="`/src/static/images/${item.mdatOrgId}_L.png`"
                :selected="isSelected(item.mdatRprsOrgId)"
                @click="onClickItemHandler(item)"
                class="indexView__item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckButton from "../components/CheckButton.vue";
import BankButton from "../components/BankButton.vue";
</script>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      checkAll: false,
    };
  },
  computed: {
    ...mapGetters("link", [
      "getBusinessTypes",
      "getListByType",
      "isSelected",
      "count",
    ]),
  },
  methods: {
    ...mapMutations("link", ["selectItem", "selectAllItems"]),
    onClickCheckAllHandler() {
      // if (!this.checkAll && this.count) {
      //   this.checkAll = true;
      //   this.selectAllItems(this.checkAll);
      //   return;
      // }

      this.checkAll = !this.checkAll;
      this.selectAllItems(this.checkAll);
    },
    onClickItemHandler(item) {
      this.selectItem(item);
    },
  },
};
</script>

<style lang="scss">
.indexView {
  height: 100%;
  position: relative;

  &__body {
    padding: 8px;
    height: 100%;
  }

  &__checkButton {
    margin-bottom: 16px;
  }

  &__typeText {
    margin-bottom: 8px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // justify-content: space-evenly;
  }

  &__itemFrame {
    padding: 4px;
    margin-bottom: 8px;
    // width: 96px;

    width: 33.3%;

    @media (min-width: 768px) {
      width: 25%;
    }

    @media (min-width: 992px) {
      width: 96px;
    }
  }

  &__item {
    width: 100%;
  }

  &__contents {
    position: absolute;
    top: 50px;
    width: calc(100% - 16px);
    height: calc(100% - 66px);
    overflow: scroll;
  }
}
</style>
