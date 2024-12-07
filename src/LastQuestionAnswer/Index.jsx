import React from 'react';
import ReactDOM from 'react-dom';
import ToggleText from './ToggleText';

function Index() {
    return (
        <div>
            <h1>React Toggle Text Example</h1>
            <ToggleText />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
