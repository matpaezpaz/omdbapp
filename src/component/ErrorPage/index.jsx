import React from 'react';

const ErrorPage = ({text,title}) => (
    <div class="notification is-danger">
        <h1>{title}</h1>
        <p>
            {text}
        </p>
    </div>
)

export default ErrorPage;