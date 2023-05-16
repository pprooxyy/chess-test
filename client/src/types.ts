//* StartPage(+LoginModal, RegisterModal)

export interface IRegisterForm {
  user_name: string;
  user_email: string;
  user_password: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

//* Redux

export interface IUserRedux {
  id: number;
  user_name: string;
  user_rating: number;
}

export interface IAuthState {
  user: IUserRedux;
  loading: boolean;
  error: string | null | undefined;
}
