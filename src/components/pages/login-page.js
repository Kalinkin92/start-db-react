import React from 'react';

const LoginPage = ({ onLogin, isLoggedIn }) => {
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