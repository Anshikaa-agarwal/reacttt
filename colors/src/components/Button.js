import React, { useState } from 'react';
import './button.css';

export default function Button(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [myStyle, setMyStyle] = useState({
        backgroundColor: props.color
    })

    const handleClick = () => {
        console.log('Button clicked');
        setIsClicked(!isClicked);
        console.log('isClicked state:', isClicked);
    }

    return (
        <button 
            id="myButton" 
            className={isClicked ? 'clicked btn' : 'btn'} 
            onClick={handleClick}
            style={myStyle}
        ></button>
    );
}
