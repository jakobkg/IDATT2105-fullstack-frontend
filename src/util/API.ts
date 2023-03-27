import axios, { type AxiosResponse } from "axios";
import { useAuthStore } from "@/store/authStore";
import jwt_decode from "jwt-decode";
import router from "@/router/index";

export namespace API {
  export namespace Loftet {
    /**
     * API method to send a login request.
     * If login succeeds, the logged in User and their token
     * is saved to the Pinia AuthStore
     *
     * @param email email address of the user to log in as
     * @param password password to log in with
     * @returns a Result with whether the login attempt succeeded
     */
    export async function login(request: LoginRequest): Promise<void> {
      const authStore = useAuthStore();
      let token: string;

      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        request,
      )
        .then(async (response: AxiosResponse<string>) => {
          token = response.data;
          const id = (jwt_decode(token) as TokenBody).id;

          return getUser(id)
            .then((user: User) => {
              authStore.setUser(user);
              authStore.setToken(token);
              return;
            })
            .catch(() => {
              throw new Error();
            });
        })
        .catch(() => {
          throw new Error();
        });
    }

    /**
     * API method to get a user by their ID
     * @param id ID number of the user to retrieve
     * @returns A promise that resolves to a User if the API call succeeds,
     * or is rejected if the API call fails
     */
    export async function getUser(id: number): Promise<User> {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
        .then((response: AxiosResponse<User>) => {
          return response.data;
        })
        .catch(() => {
          throw new Error("User not found or not accessible");
        });
    }

    /**
     * API method to create a new user
     * @param request Request object containing the user data to submit to the back-end server
     * @returns a promise that resolves to Success or Failure based on the response from the server
     */
    export async function createUser(
      request: CreateUserRequest,
    ): Promise<User> {
      return axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, request)
        .then((response: AxiosResponse<User>) => {
          return response.data;
        })
        .catch(() => {
          throw new Error();
        });
    }

    /**
     * API method for updating user
     * @param id
     * @param request
     */
    export async function updateUser(
      id: number,
      request: UpdateUserRequest,
    ): Promise<User> {

      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
        throw new Error();
      }

      return axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/user/${id}`,
        request, {
          headers: { Authorization: `Bearer ${authStore.token}` },
        }
      )
        .then((response: AxiosResponse<User>) => {
          return response.data;
        })
        .catch(() => {
          throw new Error();
        });
    }

    export async function deleteUser(id: number): Promise<void> {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
        throw new Error();
      }

      return axios.delete(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        headers: { Authorization: `Bearer ${authStore.token}` },
      })
        .then(() => {
          return;
        })
        .catch(() => {
          throw new Error();
        });
    }

    export async function createItem(
      request: CreateItemRequest,
    ): Promise<Item> {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
        throw new Error();
      }

      return axios.post(`${import.meta.env.VITE_BACKEND_URL}/item`, request, {
        headers: { Authorization: `Bearer ${authStore.token}` },
      }).then((response: AxiosResponse<Item>) => {
        return response.data;
      }).catch(() => {
        throw new Error();
      });
    }

    /**
     * API method for updating item
     * @param id
     * @param UpdateItemRequest
     */
    export async function updateItem(
      id: number,
      request: UpdateItemRequest,
    ): Promise<void> {

      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
        throw new Error();
      }

      return axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/item/${id}`,
        request, {
          headers: { Authorization: `Bearer ${authStore.token}` },
        }
      )
        .then(() => {
          return;
        })
        .catch(() => {
          throw new Error();
        });
    }

    export async function getCategories(): Promise<Category[]> {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}/category`)
        .then((response: AxiosResponse<Category[]>) => {
          return response.data;
        }).catch(() => {
          throw new Error();
        });
    }

    /**
     * A function used for listing items. It only returns one page of max 24 items
     * @param pageNumber The page number in the items list
     * @param user id (optional)
     * @param category id (optional)
     * @returns an array of item objects from specified list
     */
    export async function listItems(pageNumber: number=1): Promise<any[]> {
      return axios.get(
        import.meta.env.VITE_BACKEND_URL + "/item?page=" + pageNumber,
      )
        .then((response: AxiosResponse) => {
          return response.data.content;
        }).catch(() => {
          throw new Error();
        });
    }

    /**
     * Goes to a detailed view of an item
     * @param id the id of the item
     */
    export async function goToItem(id: number) {
      router.push("/item/" + id);
    }

    /**
     * Gets information about a specified item
     * @param id the id of the item
     * @returns the item or an error if it fails
     */
    export async function getItem(id: number): Promise<Item> {
      return axios.get(import.meta.env.VITE_BACKEND_URL + "/item/" + id)
        .then((response: AxiosResponse) => {
          return response.data;
        }).catch(() => {
          throw new Error();
        });
    }

    /**
     * A function used for listing items based on user id. It only returns one page of max 24 items
     * @param pageNumber The page number in the items list
     * @param userId (optional)
     * @returns an array of item objects from specified list
     */

    export async function listItemsBasedOnUserId(
      pageNumber: number,
      userId: number,
    ): Promise<any[]> {
      return axios.get(
        import.meta.env.VITE_BACKEND_URL + "/item?page=" + pageNumber + "&userId=" + userId,
      )
        .then((response: AxiosResponse) => {
          return response.data;
        }).catch(() => {
          throw new Error();
        });
    }

    /**
     * A function used for listing items based on category id. It only returns one page of max 24 items
     * @param pageNumber The page number in the items list
     * @param categoryId (optional)
     * @returns an array of item objects from specified list
     */
    export async function listItemsBasedOnCategoryId(
      pageNumber: number,
      categoryId: number,
    ): Promise<any[]> {
      return axios.get(
        import.meta.env.VITE_BACKEND_URL + "/item?page=" + pageNumber +
          "&categoryId=" + categoryId,
      )
        .then((response: AxiosResponse) => {
          return response.data;
        }).catch(() => {
          throw new Error();
        });
    }

    /**
     * Performs a full-text search in the titles and descriptions of items stored in the database
     * @param searchterm the term to search for
     * @param pagenumber the page in the search results to retreive
     * @returns a list of items baserd on the provided parameters
     */
    export async function searchItems(searchterm: string, pagenumber: number = 1): Promise<Item[]> {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}/item/search/${searchterm}?page=${pagenumber}`)
      .then((response: AxiosResponse<Item[]>) => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      })
    }


    export async function addToBookmarks(itemId: number): Promise<any[]> {
      const authStore = useAuthStore();

      if (!authStore.isLoggedIn) throw new Error();
      
      return axios.post((import.meta.env.VITE_BACKEND_URL + "/bookmark/" + itemId), '', {
        headers: { Authorization: "Bearer " + authStore.token},
      })
      .then(response => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
    }

    export async function deleteBookmark(itemId: number): Promise<any[]> {
      const authStore = useAuthStore();

      if (!authStore.isLoggedIn) throw new Error();
      
      return axios.delete((import.meta.env.VITE_BACKEND_URL + "/bookmark/" + itemId), {
        headers: { Authorization: "Bearer " + authStore.token},
      })
      .then(response => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
    }

    export async function isBookmarked(itemId: number): Promise<boolean> {
        const authStore = useAuthStore();

        if (!authStore.isLoggedIn) throw new Error();
        return axios.get((import.meta.env.VITE_BACKEND_URL + "/bookmark/" + itemId), {
          headers: { Authorization: "Bearer " + authStore.token}
        })
        .then (() => {
          return true;
        }).catch(() => {
          return false;
        })
    }

    export async function getBookmarks(): Promise<any[]> {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) throw new Error();

      return axios.get((import.meta.env.VITE_BACKEND_URL + "/bookmark"), {
        headers: { Authorization: "Bearer " + authStore.token}
      })
      .then (response => {
        return response.data;
      }).catch(() => {
        throw new Error();
      })

    }




  }
  export namespace Location {
    /**
     * Uses an external OpenStreetMap API to perform a GPS lookup and get the city name/postcode
     * of a given location
     * @param latitude GPS latitude of the place to look up (represented as a string to avoid floating point shenanigans)
     * @param longitude GPS longitude of the place to look up (represented as a string)
     * @returns the city and post code of the location, in the format "1234 Cityville"
     */
    export async function coordsToCity(
      latitude: string,
      longitude: string,
    ): Promise<string> {
      return axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
        {
          headers: {
            "User-Agent": "loftet.no v1" // Header added to allow OSM to keep stats/limit uasge if needed
          }
        }
      )
        .then((response: AxiosResponse<CityLookupResponse>) => {
          return `${response.data.address.postcode} ${response.data.address.city}`;
        })
        .catch(() => {
          throw new Error();
        });
    }

    /**
     * Uses an external OpenStreetMap API to perform a GPS lookup and get the city name/postcode
     * of a given location
     * @param latitude GPS latitude of the place to look up (represented as a string to avoid floating point shenanigans)
     * @param longitude GPS longitude of the place to look up (represented as a string)
     * @returns the city and post code of the location, in the format "1234 Cityville"
     */
    export async function cityToCoords(
      address: string
    ): Promise<string> {
      return axios.get(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json`,
        {
          headers: {
            "User-Agent": "loftet.no v1" // Header added to allow OSM to keep stats/limit usage if needed
          }
        }
      )
        .then((response: AxiosResponse) => {
          return `${response.data[0].lat} ${response.data[0].lon}`;
        })
        .catch(() => {
          throw new Error();
        });
    }
  }
}
