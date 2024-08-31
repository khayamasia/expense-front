import { zodResolver } from "@hookform/resolvers/zod";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { APostExpense, APutExpense } from "../helper/api";
import {
  getCategory,
  getCurrentDate,
  getExpense,
  getSubCategory,
} from "../helper/controller";
import {
  ICategory,
  IExpense,
  IExpenseData,
  ISubCategory,
} from "../interface/interface";
import { SUpsertExpense } from "../interface/schema";

export const useExpense = () => {
  const [expenseList, setExpenseList] = useState<IExpense[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [subCategory, setSubCategory] = useState<ISubCategory[]>([]);
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
      sub_category: "",
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
    if (getValues("category") != "") {
      getSubCategory(setSubCategory, getValues("category"));
    }
  }, [getValues("category")]);

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
    try {
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
          setValue("sub_category", "", { shouldValidate: true });
          onClose();
        })
        .catch((err) => {
          console.log("err:", err);
        });
      if (getValues("id")) {
        let data: any = getValues();
        let putBody = {
          data,
        };
        APutExpense(putBody, getValues("id"))
          .then((res) => {
            onClose();
          })
          .catch((err) => {});
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
    subCategory,
  };
};
