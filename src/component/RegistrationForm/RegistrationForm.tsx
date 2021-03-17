import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ActionCreator from '../../action-creator/action-creator';
import { AuthState } from '../../interfaces';
import styles from './RegistrationForm.module.css';
import languages from '../../utils/languages';

interface RegistrationPanelProps {
    language: string;
    isSignIn: boolean;
    onLoginGet: (user: Object, isLogin: boolean) => void;
    onRegistrationSend: (user: Object, isLogin: boolean) => void;
    onErrorSet: (error: string) => void;
    history: any;
    errorType: string;
}

interface objForm {
    name?: string;
    email: string;
    password: string;
    file?: string;
}

const RegistrationForm: React.FC<RegistrationPanelProps> = ({ history, language, isSignIn, errorType, onLoginGet, onRegistrationSend, onErrorSet }) => {
    const [fileInformation, setFileInformation] = useState('');
    const [errorDescription, setErrorDescription] = useState('');

    const getFile = useCallback((event: React.MouseEvent<HTMLLabelElement>): void => {
        const target = event.target as HTMLInputElement;
        console.log(target.tagName);
        if (target.tagName === 'INPUT') {
            const file = target.files![0].name;
            setFileInformation(file);
        }
    }, []);

    const onSubmitClick = useCallback((event: React.MouseEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        const formData = new FormData(target);
        let flagError = false;
        const objFormData = {} as objForm;
        for (let pair of formData.entries()) {
            if (pair[1] === '' && pair[0] !== 'file') {
                flagError = true;
                break;
            } else if (pair[0] !== 'file') {
                if (pair[0] === 'email') {
                    objFormData.email = pair[1] as string;
                } else if (pair[0] === 'password') {
                    objFormData.password = pair[1] as string;
                } else if (pair[0] === 'name') {
                    objFormData.name = pair[1] as string;
                }
            }
        }
        if (flagError) {
            onErrorSet('Empty');
        } else {
            if (isSignIn) {
                onRegistrationSend(objFormData, true);
            } else {
                onLoginGet(objFormData, true);
            }
        }
    }, [onLoginGet, onRegistrationSend, onErrorSet, isSignIn]);

    useEffect(() => {
        if (errorType === 'Not found') {
            setErrorDescription(languages.errorSpanFound[language]);
        } else if (errorType === 'Empty') {
            setErrorDescription(languages.errorSpanEmpty[language]);
        } else if (errorType === 'Exist') {
            setErrorDescription(languages.errorSpanExist[language]);
        } else if (errorType === 'Success') {
            onErrorSet('');
            history.push('/');
        }
    }, [language, onErrorSet, history, errorType]);

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={ onSubmitClick } method="POST">
                <input className={styles.formElement} type="email" name="email" placeholder={ language === 'ru' ? 'Введите вашу почту' : language === 'en' ? 'Enter your email' : 'Entrer votre email' } />
                <input className={styles.formElement} type="password" name="password" placeholder={ language === 'ru' ? 'Введите ваш пароль' : language === 'en' ? 'Enter your password' : 'Tapez votre mot de passe' } />
                {
                    isSignIn ?
                        <>
                            <input className={styles.formElement} type="text" name="name" placeholder={language === 'ru' ? 'Введите ваше имя' : language === 'en' ? 'Enter your name' : 'Entrez votre nom'} />
                            <label onChange={getFile} className={styles.labelElement} >
                                <span className={styles.fileLoad}>{ language === 'ru' ? 'Загрузите фото' : language === 'en' ? 'Upload a photo' : 'Télécharger une photo' }</span>
                                <span>{fileInformation}</span>
                                <input style={{ display: 'none', outline: 'none', userSelect: 'none' }} name="file" type="file" accept="image/jpeg,image/png" />
                            </label>
                        </>
                        : null
                }
                <span>{errorDescription}</span>
                <input className={styles.submitBtn} type="submit" value={language === 'ru' ? 'Отправить' : language === 'en' ? 'Send' : 'Envoyer'} />
            </form>
        </div>
    );
}

const mapStateToProps = (state: AuthState) => ({
    language: state.language,
    isSignIn: state.isSignIn,
    user: state.user,
    errorType: state.errorType,
});

const mapDispatchToProps = (dispatch: any) => ({
    onLoginGet: (user: Object, isLogin: boolean) => {
        dispatch(ActionCreator.getLogin(user, isLogin));
    },
    onRegistrationSend: (user: Object, isLogin: boolean) => {
        dispatch(ActionCreator.sendRegistration(user, isLogin));
    },
    onErrorSet: (errorType: string) => {
        dispatch(ActionCreator.setError(errorType));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);