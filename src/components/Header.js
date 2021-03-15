import React from 'react';
import Icon from './Icon';


const Header = ({lightOn, lightMode}) => {
    return (
        <div className="header">
            <h1 className="header-h1">Todo</h1>
            <Icon lightOn={lightOn} lightMode={lightMode}/>
        </div>
    );
};

export default Header;