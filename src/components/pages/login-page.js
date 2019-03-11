import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ onLogin, isLoggedIn }) => {

    if (isLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <div className="jumbotron">
            <p>Авторизуйтесь чтобы увидеть секретную страницу</p>
            <button className="btn btn-primary"
                    onClick={onLogin}
                    >Войти
            </button>
        </div>
    )
};

export default LoginPage;