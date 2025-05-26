import React from 'react';
import './../app/scrollingText.css'; // Import your CSS file

const ScrollingText = ({ text } : { text : string }) => {
    return (
        <div className="scrolling-container">
            <div className="px-2 font-bold text-white bg-blue-700 rounded-md scrolling-text">{text}</div>
        </div>
    );
};

export default ScrollingText;