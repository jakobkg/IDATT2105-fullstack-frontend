import axios, { type AxiosResponse } from "axios";
import { useAuthStore } from "@/store/authStore";
import jwt_decode from "jwt-decode";

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
    ): Promise<void> {
      return axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, request)
        .then(() => {
          return;
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
    ): Promise<void> {
      return axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, request)
        .then(() => {
          return;
        })
        .catch(() => {
          throw new Error();
        });
    }

    export async function deleteUser(id: number): Promise<void> {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn()) {
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
      if (!authStore.isLoggedIn()) {
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
    export async function listItems(pageNumber: number): Promise<any[]> {
        return axios.get(import.meta.env.VITE_BACKEND_URL + '/item?page=' + pageNumber)
        .then((response: AxiosResponse) => {
          return response.data.content;
        }).catch(() => {
          throw new Error();
        })
    }

    /**
     * A function used for listing items based on user id. It only returns one page of max 24 items
     * @param pageNumber The page number in the items list
     * @param userId (optional)
     * @returns an array of item objects from specified list
     */

    export async function listItemsBasedOnUserId(pageNumber: number, userId: number): Promise<any[]> {
        return axios.get(import.meta.env.VITE_BACKEND_URL + '/item?page=' + pageNumber + '&userId=' + userId)
        .then((response: AxiosResponse) => {
          return response.data;
        }).catch(() => {
          throw new Error();
        })
    }

    /**
     * A function used for listing items based on category id. It only returns one page of max 24 items
     * @param pageNumber The page number in the items list
     * @param categoryId (optional)
     * @returns an array of item objects from specified list
     */
    export async function listItemsBasedOnCategoryId(pageNumber: number, categoryId: number): Promise<any[]> {
        return axios.get(import.meta.env.VITE_BACKEND_URL + '/item?page=' + pageNumber + '&categoryId=' + categoryId)
        .then((response: AxiosResponse) => {
          return response.data;
        }).catch(() => {
          throw new Error();
        })
    }

  }
}
