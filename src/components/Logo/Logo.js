import React from 'react';
import Tilt from 'react-tilt';

import brain from './brain.png';

const Logo = () => {

    return(
        <div className="ma5 mt0">
            <Tilt className="Tilt br-pill shadow-2 " options={{ max : 100 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa4"> 
                    <img style={{paddingTop: '0px'}} alt='logo' src={brain}/> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
