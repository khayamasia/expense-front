import { useEffect, useState } from "react";
import { IExpense, IExpenseData } from "../interface/interface";
import { getExpense } from "../helper/controller";
import { useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUpsertExpense } from "../interface/schema";
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
      date: "",
      price: "",
      sub_categories: [""],
    },
  });

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
  };
};
