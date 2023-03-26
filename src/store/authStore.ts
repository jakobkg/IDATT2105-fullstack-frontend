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
  getters: {
    isLoggedIn(): boolean {
      return this.token.length > 0
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: User) {
      this.user = user;
    }
  }
});
