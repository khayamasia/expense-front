import { useEffect, useState } from "react";
import {
  ICategory,
  ICategoryData,
  IExpense,
  IExpenseData,
} from "../interface/interface";
import { getCategory, getCurrentDate, getExpense } from "../helper/controller";
import { useDisclosure } from "@nextui-org/react";
import { UseFormSetValue, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUpsertCategory, SUpsertExpense } from "../interface/schema";
import { APostCategory, APostExpense, APutExpense } from "../helper/api";

export const useCategory = (
  setCategory: Function,
  category: ICategory[],
  setExpense: UseFormSetValue<IExpenseData>
) => {
  const {
    isOpen: isOpenUpsertCat,
    onOpen: onOpenUpsertCat,
    onOpenChange: onOpenChangeUpsertCat,
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
  } = useForm<ICategoryData>({
    resolver: zodResolver(SUpsertCategory),
    mode: "onSubmit",
    values: {
      name: "",
      id: "",
    },
  });

  useEffect(() => {
    if (!isOpenUpsertCat) {
      getCategory(setCategory);
    }
  }, [isOpenUpsertCat]);

  useEffect(() => {
    setExpense("category", String(category[0]?.id), { shouldValidate: true });
  }, [category.length]);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const categoryForm = new FormData();
    try {
      categoryForm.append("name", getValues("name"));

      let data: any = getValues();
      let body = {
        data,
      };

      APostCategory(body)
        .then((res) => {
          setValue("name", "", { shouldValidate: true });
          onClose();
        })
        .catch((err) => {
          console.log("err:", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    onOpenChangeUpsertCat,
    onOpenUpsertCat,
    isOpenUpsertCat,
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
