import {useEffect, useState} from "react"
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {data, loading, error};

}

export default useFetch;