import { useEffect, useState } from "react";
import { IExpense, IExpenseData } from "../interface/interface";
import { getExpense } from "../helper/controller";
import { useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUpsertExpense } from "../interface/schema";
import { APostExpense } from "../helper/api";
export const useExpense = () => {
  const [expenseList, setExpenseList] = useState<IExpense[]>([]);
  const {
    isOpen: isOpenUpsert,
    onOpen: onOpenUpsert,
    onOpenChange: onOpenChangeUpsert,
  } = useDisclosure();

  useEffect(() => {
    getExpense(setExpenseList, 1);
  }, []);
  const getCurrentDate = () => {
    return new Date().toISOString().slice(0, 10);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
    setValue,
    getValues,
  } = useForm<IExpenseData>({
    resolver: zodResolver(SUpsertExpense),
    mode: "onSubmit",
    values: {
      name: "",
      category: "",
      comment: "",
      //inja baiad check konim edit e ya add
      date: getCurrentDate(),
      price: "",
      sub_category: "",
    },
  });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // setIsDone(true)
    e.preventDefault();
    console.log("first");

    // {
    //   "data":{
    //   "name": "bayamos",
    //   "price": 270000,
    //   "comment": "test",
    //   "category":1,
    //   "sub_categories":2,
    //   "users_permissions_user":1
    //   }
    // }
    const expenseForm = new FormData();
    try {
      expenseForm.append("name", getValues("name"));
      expenseForm.append("price", getValues("price"));
      expenseForm.append("comment", getValues("comment"));
      expenseForm.append("category", getValues("category"));
      expenseForm.append("sub_category", String(getValues("sub_category")));
      expenseForm.append("users_permissions_user", "1");

      let data: any = getValues();
      data["users_permissions_user"] = 1;
      let body = {
        data,
      };
      APostExpense(body)
        .then((res) => {
          console.log("res:", res);
        })
        .catch((err) => {
          console.log("err:", err);
        });
      // if (bannerId === "new") {
      //   APostBanner(expenseForm)
      //     .then((res) => {
      //       router.push(`/panel/marketplace/settings/banner/list`);
      //       Notify.success(res.data.message);
      //     })
      //     .catch((err) => {
      //       Notify.error(err.data.message);
      //       setIsDone(false);
      //     });
      // } else {
      //   AEditBanner(expenseForm, bannerId)
      //     .then((res) => {
      //       Notify.success(res.data.message);
      //       router.push(`/panel/marketplace/settings/banner/list`);
      //     })
      //     .catch((err) => {
      //       Notify.error(err.data.message);
      //       setIsDone(false);
      //     });
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    expenseList,
    onOpenChangeUpsert,
    onOpenUpsert,
    isOpenUpsert,
    setValue,
    getValues,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    control,
    onSubmitForm,
  };
};
