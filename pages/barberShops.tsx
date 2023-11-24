import { useRouter } from 'next/router';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css';
import Nav from '../components/nav'

export default function barberShops() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/api/barbershops')
            .then((res) => res.json())
            .then((data) => {
                setData(data.response)
                setLoading(false)
            });
    }, [])

    const router = useRouter();

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
                            {data.map((item, index) => {
                                return <div key={index}>
                                    <p>{item['nombre']}</p>
                                    <img src='./Rectangle 11 (1).png'></img>
                                    <Link href={`/barberShop/${item['id']}`} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-cave-brown ">
                                        ver
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Cargando...</p>
            )}


        </>
    )
}
