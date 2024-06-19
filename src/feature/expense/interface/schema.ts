import { z } from "zod";

export const SUpsertExpense = z.object({
  price: z.string().min(1, "قیمت الزامی می‌‌باشد"),
  category: z
    .string({ invalid_type_error: "دسته بندی الزامی می‌‌باشده" })
    .min(1, "دسته بندی الزامی می‌‌باشد"),
});
