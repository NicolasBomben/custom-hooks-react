import { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log( 'Me volvi a ejecutar.');
    
    return(
        <div>{ value }</div>
    )
})
