import { useEffect, useState } from "react";
import { IExpense } from "../interface/interface";
import { getExpense } from "../helper/controller";

export const useExpense = () => {
  const [expenseList, setExpenseList] = useState<IExpense[]>([]);

  useEffect(() => {
    getExpense(setExpenseList, 1);
  }, []);

  return { expenseList, setExpenseList };
};
