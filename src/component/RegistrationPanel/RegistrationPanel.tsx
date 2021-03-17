import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ActionCreator from '../../action-creator/action-creator';
import { LoginState } from '../../interfaces';
import styles from './RegistrationPanel.module.css';

interface RegistrationPanelProps {
    isLogin: boolean;
    language: string;
    onLoginChange: (isLogin: boolean) => void;
    onSignInChange: (isSignIn: boolean) => void;
    onSignOutClick: (userName: string) => void;
    onSetUserDefault: (user: Object) => void;
}

const RegistrationPanel: React.FC<RegistrationPanelProps> = ({ isLogin, language, onLoginChange, onSignInChange, onSignOutClick, onSetUserDefault }) => {
    return (
        <div className={styles.registrationContainer}>
            { 
                isLogin ? 
                    <Link
                        onClick={() => {
                            localStorage.removeItem('user');
                            onSetUserDefault({});
                            onSignOutClick('');
                            onLoginChange(false);
                        }}
                        className={styles.registrationElement} to="/" >
                        {
                            language === 'ru' ? 'Выйти' :
                                language === 'en' ? 'Sign Out' : 'Déconnecter'
                        }
                    </Link>
                :
                    <>
                        <Link 
                            onClick={ () => {
                                window.scrollTo(0, document.documentElement.scrollHeight / 2);
                                onSignInChange(false);
                            }} 
                            className={styles.registrationElement} to="/auth">
                            {
                                language === 'ru' ? 'Войти' :
                                    language === 'en' ? 'Sign In' : 'S\'identifier'
                            }
                        </Link>
                        <Link 
                            onClick={ () => {
                                window.scrollTo(0, document.documentElement.scrollHeight / 2)
                                onSignInChange(true);
                            }} 
                            className={styles.registrationElement} to="/auth">
                            {
                                language === 'ru' ? 'Зарегистрироваться' :
                                    language === 'en' ? 'Sign Up' : 'S\'inscrire'
                            }
                        </Link>
                    </>
            }
        </div>
    );
}
const mapStateToProps = (state: LoginState) => {
  return {
    isLogin: state.isLogin,
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
    onLoginChange: (isLogin: boolean) => {
        dispatch(ActionCreator.changeIsLogin(isLogin));
    },
    onSignInChange: (isSignIn: boolean) => {
        dispatch(ActionCreator.changeSignIn(isSignIn));
    },
    onSignOutClick: (userName: string) => {
        dispatch(ActionCreator.setUserName(userName));
    },
    onSetUserDefault: (user: Object) => {
        dispatch(ActionCreator.setUserDefault(user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPanel);