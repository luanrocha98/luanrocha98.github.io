import { useEffect, useState } from "react";
import { IContent } from "../@types";

const useContent = () => {
    const [content, setContent] = useState<IContent>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        fetch('content.json')
            .then(response => {
                response.json()
                    .then(result => {
                        setContent(result);
                    })
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return { content, loading, error }
}

export default useContent;