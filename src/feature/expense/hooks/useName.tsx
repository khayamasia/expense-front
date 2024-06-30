import { useEffect, useState } from "react";
import { IExpenseData, IName, INameData } from "../interface/interface";
import { useDisclosure } from "@nextui-org/react";
import { UseFormSetValue, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUpsertName } from "../interface/schema";
import {
  APostCategory,
  APostExpense,
  APostNames,
  APutExpense,
} from "../helper/api";
import { getName } from "../helper/controller";

export const useName = (
  setName: Function,
  names: IName[],
  setExpense: UseFormSetValue<IExpenseData>
) => {
  const {
    isOpen: isOpenUpsertName,
    onOpen: onOpenUpsertName,
    onOpenChange: onOpenChangeUpsertName,
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
  } = useForm<INameData>({
    resolver: zodResolver(SUpsertName),
    mode: "onSubmit",
    values: {
      name: "",
      id: "",
    },
  });

  useEffect(() => {
    getName(setName);
  }, [isOpenUpsertName]);

  useEffect(() => {
    if (names?.length > 0) {
      setExpense("name", String(names[0]?.id), {
        shouldValidate: true,
      });
    }
  }, [names]);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data: any = getValues();
      let body = {
        data,
      };

      APostNames(body)
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
    onOpenChangeUpsertName,
    onOpenUpsertName,
    isOpenUpsertName,
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
