import { useEffect, useState } from 'react';

const useImage = (fileName: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/${fileName}`);
                setImage(response.default);
            } catch (err) {
                setImage(null);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchImage();
    }, [fileName])

    return [
        image,
        loading,
        error
    ]
}

export default useImage;