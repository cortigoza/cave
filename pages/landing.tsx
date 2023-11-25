import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';

export default function Index() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>The Cave - Elección perfecta de barbería</title>
            </Head>
            <div className="flex flex-col min-h-screen bg-black text-white" style={{ backgroundImage: "url('/image-1.png')" }}>
                <Header />
                <hr className='border-gray-400' />
                <div className='absolute top-0 bottom-0 bg-black opacity-70 w-full z-[0]'>
                </div>
                <section className="w-full flex mt-[55px] md:px-[140px] z-[1]">
                    <section className='w-[512px] flex flex-col gap-[21px]'>
                        <h1 className="text-[64px] font-bold mb-6">Elección<br /> perfecta<br /> de barbería</h1>
                        <p className="mb-6 text-[24px]">The Cave es el sitio web donde están las mejores barberías de Ciudad 2000</p>
                        <button className="bg-cave-brown text-[32px] text-white py-3 px-8 rounded-md"
                            onClick={() => router.push('/')}>
                            Reservar Ahora
                        </button>
                        <section className='flex justify-around mt-[54px]'>
                            <div className='leading-[1.7] flex flex-col items-center'>
                                <Image src='/barba-icon.png' alt='icono barbero' width={61} height={61} />
                                <span>Barba</span>
                            </div>
                            <div className='leading-[1.7] flex flex-col items-center'>
                                <Image src='/tijeras-icon.png' alt='icono tijeras' width={61} height={61} />
                                <span>Cabello</span>
                            </div>
                            <div className='leading-[1.7] flex flex-col items-center'>
                                <Image src='/barbero-icon.png' alt='icono barbero' width={61} height={61} />
                                <span>Precio</span>
                            </div>
                        </section>
                    </section>
                    <Image src='/landing-image.png' alt='landing image' width={582} height={982} className='absolute top-0 right-[140px]' />
                </section>
            </div >
        </>
    )
}
