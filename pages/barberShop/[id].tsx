import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import '../../styles/globals.css';
import Nav from '../../components/nav'
import { useEffect, useState } from 'react';
import { type } from 'os';


export default function barberShop() {
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState([])
    useEffect(() => {
        if (id) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            };

            fetch(`/api/barbershop`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.response)
                    setData(data.response)
                });
        }
    }, [id])

    const redirectToPage = (path: string) => {
        router.push(path);
    };
    return (
        <>
            <Head>
                <title>The Cave - Barberías</title>
            </Head>

            {data ? (
                <div className="flex min-h-screen bg-black text-white" style={{ backgroundImage: "url('/image-1.png')" }}>
                    <Nav></Nav>
                    <div className="container mx-auto px-4 flex items-center justify-center h-screen">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-cave-dark">

                            <div key={data.id} className="p-4 rounded-lg shadow-md">
                                <p>{data.nombre}</p>
                                <p>{data.direccion}</p>
                                <p>{data.telefono}</p>
                                <img src='/Rectangle 11 (1).png'></img>
                            </div>

                        </div>
                    </div>

                </div>
            ) :
                (
                    <p>Cargando...</p>
                )}
        </>
    )
}
