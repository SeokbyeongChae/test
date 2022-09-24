<template>
  <div class="testApp">
    <!-- <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header> -->
    <header class="header">
      <div class="header__title">자산정보 연동하기</div>
      <div class="header__message1">연동할 금융사를 선택해 주세요</div>
      <div class="header__message2">
        금융사에서 제공되는 천체 서비스가 선택됩니다.
      </div>
      <div class="header__type">
        <Chip
          v-for="(type, index) in types"
          :key="index"
          :text="type.name"
          :class="{ 'header__chip--selected': selectedIndex === type.index }"
          class="header__chip"
          :to="type.path"
          @click="onClickChipHandler(type.index)"
        />
      </div>
    </header>
    <section class="content">
      <RouterView />
    </section>
    <footer class="footer">
      <Button
        class="footer__button"
        :text="buttonText"
        :disabled="!count"
        @click="onClickButtonHandler"
      ></Button>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Button from "./components/Button.vue";
import Chip from "./components/Chip.vue";
</script>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      types: [
        {
          name: "업권별",
          index: 0,
          path: "/",
        },
        {
          name: "이름순",
          index: 1,
          path: "/name",
        },
      ],
      selectedIndex: 0,
    };
  },
  computed: {
    ...mapGetters("link", ["count"]),
    buttonText() {
      return `${this.count}개 금융사 연동하기`;
    },
  },
  mounted() {
    this.initBankList();
  },
  methods: {
    ...mapMutations("link", ["initBankList"]),
    ...mapActions("link", ["todo"]),
    onClickChipHandler(index) {
      this.selectedIndex = index;
    },
    onClickButtonHandler() {
      if (!this.count) return;

      this.todo();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";

.testApp {
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

.header {
  padding: 8px;

  &__title {
    @include sH4Bold;

    width: 100%;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 8px;
  }

  &__message1 {
    @include sH3Bold;

    margin-bottom: 8px;
  }

  &__message2 {
    @include sBody3Reg;

    margin-bottom: 8px;
  }

  &__type {
    padding: 8px;
    display: flex;
  }

  &__chip {
    margin-right: 8px;

    background-color: $gray02;
    color: $dark01;

    &--selected {
      background-color: $positive01;
      color: $light03;
    }
  }
}

.footer {
  position: absolute;
  bottom: 0;

  height: 64px;
  width: 100%;

  &__button {
    height: 100%;
    width: 100%;
  }
}

.content {
  height: calc(100% - 246px);
}
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/
</style>
