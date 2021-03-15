export interface AppState {
  countries: Array<Object>;
  isLogin: boolean;
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
}
