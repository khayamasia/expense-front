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
  sub_category: Name;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Name {
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
export interface IName {
  id: number;
  name: string;
}
export interface INameData {
  id: string;
  name: string;
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
  setName: Function;
  names: IName[];
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
  errors: FieldErrors<INameData>;
  setValue: UseFormSetValue<INameData>;
  getValues: UseFormGetValues<INameData>;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: UseFormHandleSubmit<INameData, undefined>;
  category: ICategory[];
  setNames: Function;
}
export interface IExpenseData {
  id: string;
  price: string;
  category: string;
  name: string;
  comment: string;
  date: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
