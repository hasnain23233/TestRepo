import React, { useState } from 'react';

function ToggleText() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <button className='kaggle' onClick={toggleVisibility}>Toggle Text</button>
            {isVisible && <p>This is the text that can be toggled!</p>}
        </div>
    );
}

export default ToggleText;
