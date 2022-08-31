export class UserData {
  id?: number;
  name?: string;
  email?: string;
  address?: string;
  dropdown?: string;
}

export interface UserList {
  name?: string;
  address?: string;
  dob?: string;
  phonenumber?: string;
  gender?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
