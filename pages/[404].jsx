import {useRouter} from 'next/router';

const errorPage = () => {
    const router = useRouter();
    return(
        <div>
            <h1>Page not found, does not exist 😢</h1>
            <button onClick={() => router.push('/')}>Back to home</button>
        </div>
    )
}

export default errorPage;