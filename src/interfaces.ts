export interface AppState {
  data: Array<Object>;
  countries: Array<Object>;
  isLogin: boolean;
  language: string
}

export interface LoginState {
  isLogin: boolean;
  language: string;
}

export interface AuthState {
  language: string;
  isSignIn: boolean;
  user: Object;
}

export interface UserState {
  userName: string;
  language: string;
}
