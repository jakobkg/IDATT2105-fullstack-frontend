import axios, { type AxiosResponse } from "axios";
import { useAuthStore } from "@/store/authStore";
import jwt_decode from "jwt-decode";

export function login(email: string, password: string): void {
  const authStore = useAuthStore();
  axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/login`,
    { email: email, password: password } as LoginRequest,
  )
    .then((response: AxiosResponse<string>) => {
      authStore.token = response.data;
      const id = (jwt_decode(response.data) as TokenBody).id;

      axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        },
      })
        .then((response: AxiosResponse<User>) => {
          authStore.user = response.data;
          console.info(authStore.user);
        })
        .catch((err) => {
          console.warn(err);
        });
    });
}
