'use client'

import { LanguageType } from "@/utils/translations";
import { createContext, ReactNode, useEffect, useState } from "react";

interface LanguageContextData {
    language: LanguageType;
    setLanguage: (value: LanguageType) => void;
}

interface LanguageContextProviderProps {
    children: ReactNode;
}

export const languageContext = createContext<LanguageContextData>({} as LanguageContextData);

export function LangugageContextProvider({children}: LanguageContextProviderProps){
    const [language, setLanguage] = useState<LanguageType>('br');

    useEffect(() => {
        setLanguage(navigator.language.includes('pt') ? 'br' : 'en');
    },[]);

    return (
        <languageContext.Provider value={{language, setLanguage}}>
            {children}
        </languageContext.Provider>
    )
}