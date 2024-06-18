export interface IExpense {
  name: string;
  price: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: string;
  users_permissions_user: UsersPermissionsUser;
}

export interface UsersPermissionsUser {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
