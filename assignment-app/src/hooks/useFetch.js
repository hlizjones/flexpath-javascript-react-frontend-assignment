import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        setError(null);

        async function fetchData() {
            try {
                if (url !== 'null' && url !== 'undefined') {
                    let response = await fetch(url);
                    if (!response.ok) {
                        throw response;
                    } else {
                        let json = await response.json();
                        setData(json);
                    }
                } else {
                    setData([]);
                }
            } catch (error) {
                setError(error);
                setData([]);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading, error };

}