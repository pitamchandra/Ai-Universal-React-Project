import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center'>
            <button className="bg-primary py-3 px-5 rounded-md text-white">{children}</button>
        </div>
    );
};

export default Button;