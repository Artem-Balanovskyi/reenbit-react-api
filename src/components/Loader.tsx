import React, { type CSSProperties } from 'react';
import { PropagateLoader } from 'react-spinners';

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
};

interface LoaderProps {
    loading: boolean
}

export function Loader({loading}: LoaderProps) {
    return (
        <PropagateLoader
                className='loader'
                color='#36d7b7'
                loading={loading}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
    )
}