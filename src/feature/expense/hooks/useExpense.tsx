import { useEffect, useState } from "react";
import {
  ICategory,
  IExpense,
  IExpenseData,
  IName,
} from "../interface/interface";
import {
  getCategory,
  getCurrentDate,
  getExpense,
  getName,
} from "../helper/controller";
import { useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUpsertExpense } from "../interface/schema";
import { APostExpense, APutExpense } from "../helper/api";

export const useExpense = () => {
  const [expenseList, setExpenseList] = useState<IExpense[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [names, setNames] = useState<IName[]>([]);
  const {
    isOpen: isOpenUpsert,
    onOpen: onOpenUpsert,
    onOpenChange: onOpenChangeUpsert,
    onClose,
  } = useDisclosure();

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
      page: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0,
      id: "",
    },
  });

  useEffect(() => {
    getCategory(setCategory);
  }, []);

  useEffect(() => {
    getName(setNames);
  }, []);

  useEffect(() => {
    getExpense(
      setExpenseList,
      getValues("page"),
      getValues("pageSize"),
      setValue
    );
  }, [getValues("page")]);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const expenseForm = new FormData();
    try {
      // expenseForm.append("name", getValues("name"));
      // expenseForm.append("price", getValues("price"));
      // expenseForm.append("comment", getValues("comment"));
      // expenseForm.append("category", getValues("category"));
      // expenseForm.append("users_permissions_user", "1");

      if (getValues("id")) {
        let data: any = getValues();
        let putBody = {
          data,
        };
        APutExpense(putBody, getValues("id"))
          .then((res) => {
            getExpense(setExpenseList, 1, getValues("pageSize"), setValue);
            onClose();
          })
          .catch((err) => {});
      } else {
        let data: any = getValues();
        data["users_permissions_user"] = 1;
        let body = {
          data,
        };

        APostExpense(body)
          .then((res) => {
            getExpense(setExpenseList, 1, getValues("pageSize"), setValue);
            setValue("id", "", { shouldValidate: true });
            setValue("name", "", { shouldValidate: true });
            setValue("comment", "", { shouldValidate: true });
            setValue("price", "", { shouldValidate: true });
            onClose();
          })
          .catch((err) => {
            console.log("err:", err);
          });
      }
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
    category,
    setCategory,
    names,
    setNames,
  };
};
