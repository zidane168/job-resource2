import React from 'react';
import './../app/scrollingText.css'; // Import your CSS file

const ScrollingText = ({ text } : { text : string }) => {
    return (
        <div className="scrolling-container">
            <div className="font-bold text-blue-600 scrolling-text">{text}</div>
        </div>
    );
};

export default ScrollingText;