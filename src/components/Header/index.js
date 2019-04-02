import React from 'react';
import mailBox from '../../images/mailbox.png';

import Clock from './Clock.js';

const Title = () =>{
    return(
        <h2>React.js Newsletter</h2>
    )
}

const Description = () =>{
    return(
        <p className="p-header">Quick review - React & React-Redux</p>
    )
}

const Author = () =>{
    return(
        <p>by Alejandro Avalos.</p>
    )
}

const Header = () =>{
    return(
        <div className="hero-image">
            <Clock />
            <div className="hero-text">
                <img src={mailBox} className="img-mailbox" alt="Logo" />
                <Title />
                <Description />
                <Author />            
            </div>
        </div>
    )
}

export default Header;