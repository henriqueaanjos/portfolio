import { languageContext } from "@/context/languageContext";
import { useContext } from "react";

export function useLanguage(){
    return useContext(languageContext);
}