import { defineStore } from "pinia";
import { API } from "@/util/API";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categories: [] as Array<Category>,
    };
  },
  persist: {
    storage: localStorage
  },
  actions: {
    populate() {
      API.Loftet.getCategories()
        .then((categories:Array<Category>)=>{
        this.categories=categories;
        console.log("weeeeeewwww")
      })
    },
  }
});