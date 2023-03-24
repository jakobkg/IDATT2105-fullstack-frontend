import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      user: {} as User,
    };
  },
  persist: {
    storage: localStorage
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: User) {
      this.user = user;
    },
    isLoggedIn(): boolean {
      return this.token.length > 0;
    }
  }
});
