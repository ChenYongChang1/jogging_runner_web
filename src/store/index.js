import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {},
  }),
  getters: {
    getUserInfo() {
      return this.userInfo || {};
    },
  },
  actions: {
    async fetchUserInfo() {
      this.userInfo = { name: "cyc" };
    },
  },
});
