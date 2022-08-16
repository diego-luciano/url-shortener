import { useRouter } from 'next/router';
import { useEffect } from 'react'

const Redirect = () => {
    const router = useRouter();

    useEffect(() => {
        const tag = window.location.href.split('/').pop();
        (async () => {
            const req = await fetch(`/api/shortener/find?tag=${tag}`);
            const res = await req.json();
            if (res === null) {
                router.push('/');
            } else {
                window.location.assign(res.origin);
            }
        })();
    }, [router]);

    return null;
}

export default Redirect;