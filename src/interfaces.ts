export interface AppState {
  data: Array<Object>;
  countries: Array<Object>;
  isLogin: boolean;
  language: string,
  ratings: Array<Object>
  user: any
}

export interface LoginState {
  isLogin: boolean;
  language: string;
}

export interface AuthState {
  language: string;
  isSignIn: boolean;
  user: Object;
  errorType: string;
}

export interface UserState {
  userName: string;
  language: string;
}
