import React, { useContext } from 'react';
import { Context } from '../index';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div className="login page">
            <div className="login-box-contaier">
                <div className="login-box">
                    {user ?
                        <>
                            <h3>Здравствуйте, {user.displayName}!</h3>
                            <button onClick={() => auth.signOut()}>
                            <img src={user.photoURL} className="auth-logo" alt="google logo"/>
                                Выйти
                            </button>
                        </>
                        :
                        <>
                            <h3>Добро пожаловать!</h3>
                            <span>Войдите в аккаунт чтобы 
                                сохранять рецепты и делиться своими
                            </span>
                            <button onClick={login}>
                                <img src="https://www.forevershining.com.au/wp-content/uploads/2021/05/google_g_icon_download-300x300.png" className="auth-logo" alt="account"/>
                                Войти с помощью Google
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;