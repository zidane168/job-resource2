import React from 'react';
import urgentGif from './../../../public/images/urgent.gif'; // Adjust the path as necessary
import Image from 'next/image';

const UrgentIcon = () => {
    return (
        <div>
            <Image src={ urgentGif } alt="urgent" width={ 50 } height={ 50 } />
        </div>
    );
};

export default UrgentIcon;