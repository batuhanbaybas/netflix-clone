import {useEffect, useState} from "react"
import axios from "../../api/axios/instance";

const useFetch = (url) => {
    const [resData, setResData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setResData(response.data);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {resData, loading, error};

}

export default useFetch;