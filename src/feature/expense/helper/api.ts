import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AGetExpense = async (
  page: number,
  pageSize: number
): Promise<TResponse<any>> => {
  return FetchApi.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expense/getAll/${page}/${pageSize}`
  );
};

export const APostExpense = async (body: any): Promise<TResponse<any>> => {
  return FetchApi.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expenses`,
    body
  );
};
export const APutExpense = async (
  body: any,
  id: string
): Promise<TResponse<any>> => {
  return FetchApi.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expenses/${id}`,
    body
  );
};
export const AGetCategories = async (): Promise<TResponse<any>> => {
  return FetchApi.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category/getAll/`
  );
};
export const APostCategory = async (body: any): Promise<TResponse<any>> => {
  return FetchApi.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`,
    body
  );
};
export const AGetNames = async (): Promise<TResponse<any>> => {
  return FetchApi.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/name/getAll/`
  );
};
// export const AGetNamesServerSide = async (): Promise<TResponse<any>> => {
//   return FetchApi.getServerSide(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/name/getAll/`
//   );
// };
export const APostNames = async (body: any): Promise<TResponse<any>> => {
  return FetchApi.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/names`,
    body
  );
};
