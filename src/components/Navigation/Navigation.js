import React from 'react';

const Navigation = () => {
    return (
        // The CSS property we are refering to with justifyContent is justify-content 
        // but because the style attribute we are passing is javascript we can't use 
        // the "dash" and so instead we use camel case.
        // The "style" attribute is nothing but a list of CSS properties to which
        // we are assigning the values in the single quotes ''. 
        // Refer to https://www.quackit.com/css/css3/properties/css_justify-content.cfm
        
        // However instead of doing all this CSS let's make our lives easier by installing
        // tachyons

        // We use the tachyons styles in the className of the p tag
        <nav style={{display:'flex', justifyContent: 'flex-end'}}>
            <p className='br-pill bg-light-purple f3 dim white underline pa3 pointer'>sign out</p>
        </nav>
    );
}

export default Navigation;