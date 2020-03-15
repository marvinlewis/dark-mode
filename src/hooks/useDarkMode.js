import React, { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = () => {
    
    const [ darkMode, setDarkMode ] = useLocalStorage("darkmode", true);



    useEffect(() => {
        if (darkMode === true){
            return document.body.classList.add("dark-mode")
        } else {
            return document.body.classList.remove("dark-mode")
        }
        }, [darkMode])

        return [ darkMode, setDarkMode ] 


}