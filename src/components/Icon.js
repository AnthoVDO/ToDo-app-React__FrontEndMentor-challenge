import React from 'react';
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";

const Icon = ({lightOn, lightMode}) => {

    let lightModeIcon
    if(!lightMode){
        lightModeIcon = < BsFillBrightnessHighFill/>
    }else{
        lightModeIcon = < BsMoon/>
    }

    return (
        <div className="header-icon">
            <span 
            className="header-icon" 
            onClick={lightOn}>
            {lightModeIcon }
            </span>
        </div>
    );
};

export default Icon;