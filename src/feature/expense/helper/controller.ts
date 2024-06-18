import { AGetExpenseById } from "./api";

export const getExpense = (setExpense: Function, userId: number) => {
  AGetExpenseById(userId)
    .then((json: any) => {
      console.log("expense", json);
      //   setExpense(json.data.response);
    })
    .catch((err) => {
      console.log(err);
    });
};
