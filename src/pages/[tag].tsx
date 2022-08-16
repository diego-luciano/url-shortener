import { useRouter } from 'next/router';
import { useEffect } from 'react'

const Redirect = () => {
    useEffect(() => {
        const tag = window.location.href.split('/').pop();
        (async () => {
            const req = await fetch(`/api/shortener/find?tag=${tag}`);
            const res = await req.json();
            if (res === null) {
                window.location.assign(window.location.origin);
            } else {
                window.location.assign(res.origin);
            }
        })();
    }, []);

    return null;
}

export default Redirect;