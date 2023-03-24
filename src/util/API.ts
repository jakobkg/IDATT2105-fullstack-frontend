import axios, { Axios, type AxiosResponse } from "axios";
import { useAuthStore } from "@/store/authStore";
import jwt_decode from "jwt-decode";

export namespace API {
  /**
   * API method to send a login request.
   * If login succeeds, the logged in User and their token
   * is saved to the Pinia AuthStore
   * 
   * @param email email address of the user to log in as
   * @param password password to log in with
   * @returns a Result with whether the login attempt succeeded
   */
  export async function login(
    email: string,
    password: string,
  ): Promise<void> {
    const authStore = useAuthStore();
    let token: string;

    return axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/login`,
      { email: email, password: password } as LoginRequest,
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
   * @param id ID number of the user to retreive
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
   * API method to 
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
    })
  }
}
