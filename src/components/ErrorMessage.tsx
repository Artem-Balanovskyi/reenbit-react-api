import React from 'react';

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}:ErrorMessageProps) {
    return (
        <div>
            <p className='error-message__text'>{error}</p>
        </div>
    )
}