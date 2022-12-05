import React from 'react';

const Error_message = ({error}) => {
    return (
        <div className="notification is-warning">
            <button className="delete"></button>
            {error.error}
        </div>
    );
};

export default Error_message;