export interface IExpense {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  price: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: string;
  category: Category;
  sub_categories: SubCategories;
  users_permissions_user: UsersPermissionsUser;
}

export interface Category {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SubCategories {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface UsersPermissionsUser {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUpsertExpense {
  isOpenUpsert: boolean;
  onOpenChangeUpsert: (isOpen: boolean) => void;
}

export interface IExpenseData {
  price: string;
  category: string;
  sub_categories: string[];
  name: string;
  comment: string;
  date: string;
}
