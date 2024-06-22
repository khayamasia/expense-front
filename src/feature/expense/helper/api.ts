import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AGetExpenseById = async (id: number): Promise<TResponse<any>> => {
  return FetchApi.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expenses?populate=*`
    // `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expenses?populate=*&filters[users_permissions_user][id][$eq]=${id}`
  );
};

export const APostExpense = async (body: any): Promise<TResponse<any>> => {
  console.log("body", body);
  return FetchApi.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expenses`,
    body
  );
};
