import FetchApi from "@/utils/FetchApi";
import { APostLogin } from "./api";

export const loginUser = (body: any, router: any) => {
  APostLogin(body)
    .then((res: any) => {
      localStorage.setItem("access", res.data.jwt);
      FetchApi.setToken(res.data.jwt);
      router.push("/expense");
    })
    .catch((error: any) => {});
};
