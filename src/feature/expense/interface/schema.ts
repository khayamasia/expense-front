import { z } from "zod";

export const SUpsertExpense = z.object({
  price: z.string().min(1, "قیمت الزامی می‌‌باشد"),
  category: z
    .string({ invalid_type_error: "دسته بندی الزامی می‌‌باشده" })
    .min(1, "دسته بندی الزامی می‌‌باشد"),
  name: z
    .string({ invalid_type_error: "دسته بندی الزامی می‌‌باشده" })
    .min(1, "دسته بندی الزامی می‌‌باشد"),
});

export const SUpsertCategory = z.object({
  name: z
    .string({ invalid_type_error: "دسته بندی الزامی می‌‌باشده" })
    .min(1, "دسته بندی الزامی می‌‌باشد"),
});
export const SUpsertName = z.object({
  name: z
    .string({ invalid_type_error: "زیر دسته بندی الزامی می‌‌باشد" })
    .min(1, "زیر دسته بندی الزامی می‌‌باشد"),
});
