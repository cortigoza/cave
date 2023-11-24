import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

export function MenuIcon() {
    return (
        <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.28571C0 1.02336 1.02336 0 2.28571 0H29.7143C30.9767 0 32 1.02336 32 2.28571C32 3.54807 30.9767 4.57143 29.7143 4.57143H2.28571C1.02336 4.57143 0 3.54807 0 2.28571Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.7143C0 12.4519 1.02336 11.4286 2.28571 11.4286H29.7143C30.9767 11.4286 32 12.4519 32 13.7143C32 14.9767 30.9767 16 29.7143 16H2.28571C1.02336 16 0 14.9767 0 13.7143Z" fill="white" />
        </svg>
    )
}

export default function Index() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>The Cave - Elección perfecta de barbería</title>
            </Head>
            <div className="flex flex-col min-h-screen bg-black text-white" style={{ backgroundImage: "url('/image-1.png')" }}>
                <header className='flex justify-between items-center z-[1] px-[50px] py-[18px]'>
                    <h1 className='font-normal text-[40px]'>The Cave</h1>
                    <MenuIcon />
                </header>
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
