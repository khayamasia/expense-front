import FetchApi from "@/utils/FetchApi";
import { APostUser } from "./api";

export const registerUser = (body: any, router: any) => {
  APostUser(body)
    .then((res: any) => {
      console.log(res.data.jwt);
      localStorage.setItem("access", res.data.jwt);
      FetchApi.setToken(res.data.jwt);
      router.push("/expense");
    })
    .catch((error: any) => {
      alert(error.data.error.message);
    });
};
