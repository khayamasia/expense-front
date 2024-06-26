import {
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";

export interface IExpense {
  id: number;
  name: string;
  price: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: string;
  category: Category;
  sub_category: SubCategory;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SubCategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

//////////////--CATEGORY--///////////////
export interface ICategory {
  id: number;
  name: string;
}
export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ICategoryData {
  id: string;
  name: string;
}

//////////////--SUB CATEGORY--///////////////
export interface ISubCategory {
  id: number;
  name: string;
  category: Category;
}
export interface ISubCategoryData {
  id: string;
  name: string;
  category: string;
}

export interface IUpsertExpense {
  isOpenUpsert: boolean;
  onOpenChangeUpsert: (isOpen: boolean) => void;
  errors: FieldErrors<IExpenseData>;
  setValue: UseFormSetValue<IExpenseData>;
  getValues: UseFormGetValues<IExpenseData>;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: UseFormHandleSubmit<IExpenseData, undefined>;
  category: ICategory[];
  setCategory: Function;
  setSubCategory: Function;
  subCategory: ISubCategory[];
}
export interface IUpsertCategory {
  isOpenUpsert: boolean;
  onOpenChangeUpsert: (isOpen: boolean) => void;
  errors: FieldErrors<ICategoryData>;
  setValue: UseFormSetValue<ICategoryData>;
  getValues: UseFormGetValues<ICategoryData>;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: UseFormHandleSubmit<ICategoryData, undefined>;
  setCategory: Function;
}
export interface IUpsertSubCategory {
  isOpenUpsert: boolean;
  onOpenChangeUpsert: (isOpen: boolean) => void;
  errors: FieldErrors<ISubCategoryData>;
  setValue: UseFormSetValue<ISubCategoryData>;
  getValues: UseFormGetValues<ISubCategoryData>;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: UseFormHandleSubmit<ISubCategoryData, undefined>;
  category: ICategory[];
  setSubCategoty: Function;
  selectedCategory: string;
}
export interface IExpenseData {
  id: string;
  price: string;
  category: string;
  sub_category: string;
  name: string;
  comment: string;
  date: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
