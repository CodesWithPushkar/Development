import {useState, useEffect} from 'react';

export function useFetch(url){
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);


    async function fetchData(){
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
        setLoading(false);
    }

    useEffect(() => {
      fetchData();
    }, [url]);

    return {
        post,
        loading
    };
}