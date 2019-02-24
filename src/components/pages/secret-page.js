import React from 'react';

const SecretPage = ({isLoggedIn}) => {

    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h3>Это совершенно секретная страница!!!</h3>
            </div>
        )
    }

    return <p>Ты не пройдёшь!!!</p>
};

export default SecretPage;