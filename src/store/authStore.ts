import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      user: {} as User,
    };
  },
});
