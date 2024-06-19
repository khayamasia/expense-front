import { AGetExpenseById } from "./api";

export const getExpense = (setExpense: Function, userId: number) => {
  AGetExpenseById(userId)
    .then((json: any) => {
      console.log("expense", json.data.data);
      setExpense(json.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
