import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AGetExpenseById = async (id: number): Promise<TResponse<any>> => {
  return FetchApi.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/expenses?populate=*&filters[users_permissions_user][id][$eq]=${id}`
  );
};
