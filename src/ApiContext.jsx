import React, { useContext } from 'react';
import CreateApi from './Context/CreateContext';

const ApiContext = () => {
    const Data = useContext(CreateApi)
    return (
        <div>
            {Data.map((item) => {
                return (
                    <>

                        <h1>{item.name}</h1>
                        <p>{item.title}</p>
                    </>
                )
            })}
        </div>
    );
};

export default ApiContext;
