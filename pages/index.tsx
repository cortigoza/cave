import Link from 'next/link';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';

export default function barberShops() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getBarberShops = async () => {
            fetch('/api/barbershops')
                .then((res) => res.json())
                .then((data) => {
                    setData(data.response)
                    console.log({ data })
                });
        }
        getBarberShops()
    }, [])

    return (
        <>
            <Head>
                <title>The Cave - Barberías</title>
            </Head>
            <Header hasBgImage />
            <div className="flex justify-center w-full flex-wrap gap-10 px-[140px] pt-12 min-h-screen bg-cave-gray text-white">
                {data.map((item, index) => {
                    return (
                        <>
                            <div className='relative bg-black/70 flex flex-col max-h-[322px] w-[380px] rounded-md' key={index}>
                                <div className='relative w-[380px] h-[177px]'>
                                    <Image src={item['banner']} alt={`${item['nombre']} banner`} fill className='object-cover' />
                                </div>
                                <div className='px-4 py-4 flex flex-col gap-5'>
                                    <div>
                                        <p>{item['nombre']}</p>
                                        <span>{item['about']} descripcion</span>
                                    </div>
                                    <Link
                                        href={`/barberShop/${item['id']}`}
                                        className="bg-cave-brown text-white font-thin rounded-md px-6 py-2 self-end">
                                        ver
                                    </Link>
                                </div>
                            </div>
                            <div className='relative bg-black/70 flex flex-col max-h-[322px] w-[380px] rounded-md' key={index}>
                                <div className='relative w-[380px] h-[177px]'>
                                    <Image src={item['banner']} alt={`${item['nombre']} banner`} fill className='object-cover' />
                                </div>
                                <div className='px-4 py-4 flex flex-col gap-5'>
                                    <div>
                                        <p>{item['nombre']}</p>
                                        <span>{item['about']} descripcion</span>
                                    </div>
                                    <Link
                                        href={`/barberShop/${item['id']}`}
                                        className="bg-cave-brown text-white font-thin rounded-md px-6 py-2 self-end">
                                        ver
                                    </Link>
                                </div>
                            </div>
                            <div className='relative bg-black/70 flex flex-col max-h-[322px] w-[380px] rounded-md' key={index}>
                                <div className='relative w-[380px] h-[177px]'>
                                    <Image src={item['banner']} alt={`${item['nombre']} banner`} fill className='object-cover' />
                                </div>
                                <div className='px-4 py-4 flex flex-col gap-5'>
                                    <div>
                                        <p>{item['nombre']}</p>
                                        <span>{item['about']} descripcion</span>
                                    </div>
                                    <Link
                                        href={`/barberShop/${item['id']}`}
                                        className="bg-cave-brown text-white font-thin rounded-md px-6 py-2 self-end">
                                        ver
                                    </Link>
                                </div>
                            </div>
                            <div className='relative bg-black/70 flex flex-col max-h-[322px] w-[380px] rounded-md' key={index}>
                                <div className='relative w-[380px] h-[177px]'>
                                    <Image src={item['banner']} alt={`${item['nombre']} banner`} fill className='object-cover' />
                                </div>
                                <div className='px-4 py-4 flex flex-col gap-5'>
                                    <div>
                                        <p>{item['nombre']}</p>
                                        <span>{item['about']} descripcion</span>
                                    </div>
                                    <Link
                                        href={`/barberShop/${item['id']}`}
                                        className="bg-cave-brown text-white font-thin rounded-md px-6 py-2 self-end">
                                        ver
                                    </Link>
                                </div>
                            </div>

                            <div className='relative bg-black/70 flex flex-col max-h-[322px] w-[380px] rounded-md' key={index}>
                                <div className='relative w-[380px] h-[177px]'>
                                    <Image src={item['banner']} alt={`${item['nombre']} banner`} fill className='object-cover' />
                                </div>
                                <div className='px-4 py-4 flex flex-col gap-5'>
                                    <div>
                                        <p>{item['nombre']}</p>
                                        <span>{item['about']} descripcion</span>
                                    </div>
                                    <Link
                                        href={`/barberShop/${item['id']}`}
                                        className="bg-cave-brown text-white font-thin rounded-md px-6 py-2 self-end">
                                        ver
                                    </Link>
                                </div>
                            </div>
                            <div className='relative bg-black/70 flex flex-col max-h-[322px] w-[380px] rounded-md' key={index}>
                                <div className='relative w-[380px] h-[177px]'>
                                    <Image src={item['banner']} alt={`${item['nombre']} banner`} fill className='object-cover' />
                                </div>
                                <div className='px-4 py-4 flex flex-col gap-5'>
                                    <div>
                                        <p>{item['nombre']}</p>
                                        <span>{item['about']} descripcion</span>
                                    </div>
                                    <Link
                                        href={`/barber/${item['id']}`}
                                        className="bg-cave-brown text-white font-thin rounded-md px-6 py-2 self-end">
                                        ver
                                    </Link>
                                </div>
                            </div>
                        </>

                    )
                })}
            </div>
        </>
    )
}
