import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css';

export default function Index() {
    const router = useRouter();

    const redirectToPage = (path: string) => {
        router.push(path);
    };
    return (
        <>
            <Head>
                <title>The Cave - Elección perfecta de barbería</title>
            </Head>
            <div className="flex min-h-screen bg-black text-white" style={{ backgroundImage: "url('/image-1.png')" }}>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24">
                    <h1 className="text-4xl font-bold mb-6">Elección perfecta de barbería</h1>
                    <p className="mb-6">The Cave es el sitio web donde están las mejores barberías de Ciudad 2000</p>
                    <button className="bg-cave-brown text-white font-bold py-2 px-4 rounded ease-in-out"
                        onClick={() => redirectToPage("/login")}>
                        Reservar Ahora
                    </button>
                </div>

            </div>
        </>
    )
}
