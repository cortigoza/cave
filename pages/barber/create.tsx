import Header from "@/components/Header";
import AboutForm from "@/components/barber/form/AboutForm";
import HeadersForm from "@/components/barber/form/HeadersForm";
import ScheduleForm from "@/components/barber/form/ScheduleForm";
import ServicesForm from "@/components/barber/form/ServicesForm";
import useBarberData from "@/hooks/useBarberData";

export default function CreateBarber() {
    const { formData } = useBarberData('all')
    const handleCreate = () => {
        console.log({ formData })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: formData })
        };

        fetch(`/api/barbershop`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.response)
            });
    }
    return (
        <div className="bg-neutral-800 w-full pb-44">
            <Header hasBgImage />
            <div className="flex flex-col items-center bg-neutral-800 mx-auto px-[140px]">
                <section className="px-0 w-full lg:w-[70%]">
                    <HeadersForm />
                </section>


                <section className="px-0 w-full lg:w-[70%] mt-14 flex flex-col gap-8">
                    <h2 className="font-medium text-[34px] text-center">Acerca de la barbería</h2>
                    <AboutForm />
                </section>


                <section className="px-0 w-full lg:w-[70%] mt-14 flex flex-col gap-8">
                    <h2 className="font-medium text-[34px] text-center">Servicios</h2>
                    <ServicesForm />
                </section>


                <section className="px-0 w-full lg:w-[70%] mt-14 flex flex-col gap-8">
                    <h2 className="font-medium text-[34px] text-center">Horarios</h2>
                    <ScheduleForm />
                </section>

                <button
                    className="bg-cave-gray py-6 px-4 rounded-md w-full mt-10 text-2xl font-medium"
                    onClick={handleCreate}
                >
                    Crear Barberia
                </button>
            </div>
        </div>
    )
}
