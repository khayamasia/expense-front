import { Expense } from "@/feature/expense";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "expense",
  description:
    "codingbeautydev.com: Coding - the art, the science, and the passion.",
};
const page = () => {
  return <Expense />;
};

export default page;
