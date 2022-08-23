import React, {createContext, useContext, useState} from "react";
import {initialState} from './initialState';

const MenuContext = createContext(initialState);
const MenuContextProvider = ({children}) => {
    const [active, setActive] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(true);

    setActive = (section) => {
        
    }
};