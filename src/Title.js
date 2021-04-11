import React from 'react';

const Title = ({ user }) => {
    return (
        <React.Fragment>
            <h1>Todo App</h1>
            <h2>ようこそ，{user}さん</h2>
        </React.Fragment>
    );
};

export default Title;