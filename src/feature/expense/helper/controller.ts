import { UseFormSetValue } from "react-hook-form";
import { AGetCategories, AGetExpense, AGetNames, APutExpense } from "./api";
import { IExpenseData } from "../interface/interface";
import num2persian from "num2persian";

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
export const putExpense = (
  setExpense: Function,
  page: number,
  pageSize: number,
  setValue: UseFormSetValue<IExpenseData>,
  body: any,
  id: string
) => {
  APutExpense(body, id)
    .then((json: any) => {
      getExpense(setExpense, page, pageSize, setValue);
      // console.log("expense", json);
      // setValue("total", json.data.meta.pagination.total, {
      //   shouldValidate: true,
      // });
      // setValue("pageCount", json.data.meta.pagination.pageCount, {
      //   shouldValidate: true,
      // });
      // setExpense(json.data.data);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
export const getCategory = (setCategory: Function) => {
  AGetCategories()
    .then((json: any) => {
      setCategory(json.data.data);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
export const getName = (setNames: Function) => {
  AGetNames()
    .then((json: any) => {
      setNames(json.data.data);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};

export const convertNumberToWords = (number: number): string => {
  return `${num2persian(number)} تومان`;
};
export const getCurrentDate = () => {
  return new Date().toISOString().slice(0, 10);
};
