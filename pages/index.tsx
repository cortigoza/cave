import { useRouter } from 'next/router';

export default function Index() {
    const router = useRouter();

    const redirectToPage = (path: string) => {
        router.push(path);
    };
    return (
        <div>
            <h1>Hola</h1>
            <button onClick={() => redirectToPage("/login")}>Login</button>
        </div>
    )
}
