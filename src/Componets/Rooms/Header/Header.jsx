import React from 'react';
import Heading from '../../Heading/Heading';

const Header = () => {
    return (
        <div>
            <Heading
            title="this is the title"
            subtitle="this is the subtitle"
            ></Heading>
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className='object-cover' src="https://assets.architecturaldigest.in/photos/602e4571caebc40de00b0f57/16:9/w_1280,c_limit/Bali-villa-Uluwatu-SAOTA-1366x768.jpg" alt="" />
            </div>
        </div>
    );
};

export default Header;