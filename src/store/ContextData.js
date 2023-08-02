import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const settingContent = createContext();

export function UploadContentProvider({ children }) {

    const [getContent, setGetContent] = useState()

    function callingApifun() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`).then((res) => {
            console.log("ressss", res);
            setGetContent(res?.data?.results)
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        callingApifun()
    }, [])

    return (
        <>
            <settingContent.Provider value={{ getContent, setGetContent }}>
                {children}
            </settingContent.Provider>
        </>
    )
}
export function useUploadContext() {
    const { getContent, setGetContent } = useContext(settingContent)
    return { getContent, setGetContent }
}