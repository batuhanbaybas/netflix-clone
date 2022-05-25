import {useEffect, useState} from "react";

const useTrancate = (text, number) => {
    const [trancate, setTrancate] = useState('');

    const method = (text, n) => {
        setTrancate(text?.length > n ? text.substring(0, n - 1) + '...' : text)
    };
    useEffect(() => {
        method(text, number)
    }, [text, number])


    return {trancate}
}
export default useTrancate;