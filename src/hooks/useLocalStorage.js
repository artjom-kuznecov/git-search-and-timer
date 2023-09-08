import {useState, useEffect} from 'react';

export const useLocalStorage = (initValue, key) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage)
        }

        return initValue
    }

    const [value, setValue] = useState(getValue)

    //что то измениться положим в сторедж
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]) //eslint-disable-line react-hooks/exhaustive-deps


    return [value, setValue]
}