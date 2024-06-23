import { UseFormSetValue } from "react-hook-form";
import { AGetCategories, AGetExpense } from "./api";
import { IExpenseData } from "../interface/interface";

export const getExpense = (
  setExpense: Function,
  page: number,
  pageSize: number,
  setValue: UseFormSetValue<IExpenseData>
) => {
  AGetExpense(page, pageSize)
    .then((json: any) => {
      console.log("expense", json);
      setValue("total", json.data.meta.pagination.total, {
        shouldValidate: true,
      });
      setValue("pageCount", json.data.meta.pagination.pageCount, {
        shouldValidate: true,
      });
      setExpense(json.data.data);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
export const getCategory = (setCategory: Function) => {
  AGetCategories()
    .then((json: any) => {
      setCategory(json.data.data);
      console.log("json:", json);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
