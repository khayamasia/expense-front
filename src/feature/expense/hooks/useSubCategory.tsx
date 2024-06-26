import { useEffect, useState } from "react";
import {
  ICategory,
  ICategoryData,
  IExpense,
  IExpenseData,
  ISubCategory,
  ISubCategoryData,
} from "../interface/interface";
import {
  getCategory,
  getCurrentDate,
  getExpense,
  getSubCategory,
} from "../helper/controller";
import { useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SUpsertCategory,
  SUpsertExpense,
  SUpsertSubCategory,
} from "../interface/schema";
import {
  APostCategory,
  APostExpense,
  APostSubCategories,
  APutExpense,
} from "../helper/api";

export const useSubCategory = (setSubCategory: Function) => {
  const {
    isOpen: isOpenUpsertSubCat,
    onOpen: onOpenUpsertSubCat,
    onOpenChange: onOpenChangeUpsertSubCat,
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
  } = useForm<ISubCategoryData>({
    resolver: zodResolver(SUpsertSubCategory),
    mode: "onSubmit",
    values: {
      name: "",
      id: "",
      category: "",
    },
  });

  useEffect(() => {
    if (getValues("category") != "") {
      getSubCategory(setSubCategory, getValues("category"));
    }
  }, [isOpenUpsertSubCat, getValues("category")]);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data: any = getValues();
      let body = {
        data,
      };

      APostSubCategories(body)
        .then((res) => {
          setValue("name", "", { shouldValidate: true });
          setValue("category", "", { shouldValidate: true });
          setValue("id", "", { shouldValidate: true });
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
    onOpenChangeUpsertSubCat,
    onOpenUpsertSubCat,
    isOpenUpsertSubCat,
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
