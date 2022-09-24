import { createStore } from "vuex";
import jsonData from "../static/list.json";

const businessTypes = {
  bank: {
    name: "은행",
    code: "bank",
  },
  capital: {
    name: "캐피탈",
    code: "capital",
  },
  card: {
    name: "카드",
    code: "card",
  },
};

export default createStore({
  modules: {
    link: {
      namespaced: true,
      state: {
        bankList: undefined,
        businessTypes: businessTypes,
        selectedItems: [],
      },
      getters: {
        getListByType: (state) => (code) => {
          if (!state.bankList) return [];
          return state.bankList.filter((x) => x.industryCode === code);
        },
        getList: (state) => {
          if (!state.bankList) return [];
          return state.getList;
        },
        getBusinessTypes(state) {
          return state.businessTypes;
        },
        getBankList(state) {
          if (!state.bankList) return [];
          return state.bankList.filter((x) => x.industryCode === "bank");
        },
        getCapitalList(state) {
          if (!state.bankList) return [];
          return state.bankList.filter((x) => x.industryCode === "capital");
        },
        getCardList(state) {
          if (!state.bankList) return [];
          return state.bankList.filter((x) => x.industryCode === "card");
        },
        isSelected: (state) => (id) => {
          return (
            state.selectedItems.findIndex((x) => x.mdatRprsOrgId === id) !== -1
          );
        },
        count(state) {
          return state.selectedItems.length;
        },
      },
      mutations: {
        initBankList(state) {
          state.bankList = Object.values(jsonData)[0].sort((a, b) => {
            return a.mdatRprsOrgNm > b.mdatRprsOrgNm ? 1 : -1;
          });
          console.dir(jsonData);
        },
        setType(state, type) {
          state.type = type;
        },
        selectAllItems(state, flag) {
          if (!state.bankList) return;

          if (!flag) {
            state.selectedItems = [];
            return;
          }

          state.selectedItems = JSON.parse(JSON.stringify(state.bankList)); //.map((x) => x.mdatRprsOrgId);
        },
        selectItem(state, item) {
          if (!state.bankList) return;

          const index = state.selectedItems.findIndex(
            (x) => x.mdatRprsOrgId === item.mdatRprsOrgId
          );

          if (index === -1) {
            state.selectedItems.push(item);
            return;
          }

          state.selectedItems.splice(index, 1);
        },
        clearSelectedItems(state) {
          state.selectedItems = [];
        },
      },
      actions: {
        todo(context) {
          alert(JSON.stringify(context.state.selectedItems));
        },
      },
    },
  },
});
