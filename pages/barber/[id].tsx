import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';


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

            fetch(`/api/barbershop/get`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.response)
                    setData(data.response)
                });
        }
    }, [id])

    return (
        <div className="bg-neutral-800 flex flex-row justify-center w-full">
            <div className="bg-neutral-800 overflow-hidden w-[1512px] h-[3506px] relative">
                <Header hasBgImage />
                <div className="absolute w-[1512px] h-[551px] top-[100px] left-0">
                    <img className="absolute w-[32px] h-[57px] top-[43px] left-[1430px]" alt="Icon menu" src="icon-menu.png" />
                    <img
                        className="absolute w-[1512px] h-[551px] top-0 left-0 object-cover"
                        alt="Rectangle"
                        src="rectangle-13.png"
                    />
                    <div className="absolute w-[1512px] h-[551px] top-0 left-0 bg-[#262626b2]" />
                    <div className="absolute w-[1138px] top-[168px] left-[100px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[96px] tracking-[0] leading-[normal]">
                        Ebanos Barber Shop
                    </div>
                    <div className="absolute w-[245px] h-[85px] top-[397px] left-[100px]">
                        <div className="relative w-[243px] h-[85px] bg-brand rounded-[10px]">
                            <div className="top-[24px] left-[68px] text-[24px] absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-white tracking-[0] leading-[normal]">
                                Reservar
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[133px] left-[100px] [font-family:'Poppins-Medium',Helvetica] font-medium text-brand text-[32px] tracking-[0] leading-[normal]">
                        Bienvenido a
                    </div>
                </div>
                <div className="absolute w-[713px] h-[566px] top-[768px] left-[100px]">
                    <div className="absolute w-[713px] h-[551px] top-[15px] left-0">
                        <img
                            className="absolute w-[390px] h-[475px] top-0 left-0 object-cover"
                            alt="Rectangle"
                            src="rectangle-16.png"
                        />
                        <img
                            className="absolute w-[424px] h-[313px] top-[238px] left-[289px] object-cover"
                            alt="Rectangle"
                            src="rectangle-18.png"
                        />
                    </div>
                    <img
                        className="absolute w-[298px] h-[236px] top-0 left-[407px] object-cover"
                        alt="Rectangle"
                        src="rectangle-17.png"
                    />
                </div>
                <div className="absolute top-[804px] left-[914px] [font-family:'Poppins-Medium',Helvetica] font-medium text-brand text-[24px] tracking-[0] leading-[normal]">
                    Sobre nosotros
                </div>
                <p className="absolute top-[840px] left-[914px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal]">
                    Los mejores barberos de
                    <br />
                    la zona
                </p>
                <p className="absolute w-[498px] top-[981px] left-[914px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
                    El proceso de “corte de cabello” se usa para describir el proceso afeitarse. Esto se hace para proporcionar un
                    acceso más fácil a la parte con sangre que&nbsp;&nbsp;debe cortarse.
                </p>
                <div className="absolute w-[250px] h-[70px] top-[1203px] left-[913px] bg-brand rounded-[10px]">
                    <div className="absolute top-[16px] left-[75px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
                        Ver más
                    </div>
                </div>
                <div className="absolute w-[1513px] h-[641px] top-[1451px] left-0">
                    <div className="absolute w-[1512px] h-[641px] top-0 left-0 bg-white" />
                    <div className="absolute w-[554px] h-[103px] top-[100px] left-[481px]">
                        <div className="relative w-[550px] h-[103px]">
                            <div className="absolute top-0 left-[126px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-brand text-[32px] tracking-[0] leading-[normal]">
                                Nuestros Servicios
                            </div>
                            <div className="absolute w-[550px] top-[43px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[normal]">
                                Peluquería y corte popular.
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[1512px] h-[222px] top-[295px] left-px bg-[#d6d6d6]" />
                    <div className="absolute w-[134px] h-[134px] top-[344px] left-[164px] bg-white rounded-[10px]" />
                    <div className="absolute w-[135px] h-[134px] top-[344px] left-[426px] bg-white rounded-[10px]" />
                    <div className="absolute w-[135px] h-[134px] top-[344px] left-[688px] rounded-[10px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,255,255)_0%,rgb(216.55,165.95,106.55)_100%)]" />
                    <div className="absolute w-[135px] h-[134px] top-[344px] left-[950px] bg-white rounded-[10px]" />
                    <div className="absolute w-[134px] h-[134px] top-[347px] left-[1213px] bg-white rounded-[10px]" />
                </div>
                <div className="absolute w-[1117px] h-[1064px] top-[2236px] left-[197px] bg-[#4c4c4cb2] rounded-[10px]">
                    <div className="absolute top-[103px] left-[348px] [font-family:'Poppins-Medium',Helvetica] font-medium text-brand text-[40px] tracking-[0] leading-[normal]">
                        Horarios de atención
                    </div>
                    <div className="absolute w-[919px] h-[535px] top-[238px] left-[99px]">
                        <div className="absolute w-[921px] h-[60px] top-0 left-px">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                Lunes
                            </div>
                            <p className="absolute top-0 left-[542px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                10:00 AM - 9:00 PM
                            </p>
                        </div>
                        <div className="absolute w-[921px] h-[60px] top-[95px] left-0">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                Martes
                            </div>
                            <p className="absolute top-0 left-[542px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                10:00 AM - 9:00 PM
                            </p>
                        </div>
                        <div className="absolute w-[921px] h-[60px] top-[190px] left-0">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                Miercoles
                            </div>
                            <p className="absolute top-0 left-[542px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                10:00 AM - 9:00 PM
                            </p>
                        </div>
                        <div className="absolute w-[921px] h-[60px] top-[285px] left-[2px]">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                Jueves
                            </div>
                            <p className="absolute top-0 left-[542px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                10:00 AM - 9:00 PM
                            </p>
                        </div>
                        <div className="absolute w-[921px] h-[60px] top-[380px] left-0">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                Viernes
                            </div>
                            <p className="absolute top-0 left-[542px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                10:00 AM - 9:00 PM
                            </p>
                        </div>
                        <div className="absolute w-[921px] h-[60px] top-[475px] left-[2px]">
                            <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                Sabado
                            </div>
                            <p className="absolute top-0 left-[542px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[normal]">
                                10:00 AM - 4:00 PM
                            </p>
                        </div>
                    </div>
                    <div className="absolute w-[462px] h-[120px] top-[842px] left-[328px] bg-brand rounded-[10px]">
                        <div className="top-[29px] left-[143px] text-[40px] absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-white tracking-[0] leading-[normal]">
                            Reservar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
