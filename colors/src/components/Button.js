import React, { useState } from 'react';
import './button.css';

export default function Button() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <button 
            id="myButton" 
            className={isClicked ? 'clicked' : ''} 
            onClick={handleClick}
        >
            Click Me
        </button>
    );
}
