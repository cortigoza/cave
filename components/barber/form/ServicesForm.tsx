import UploadIcon from "@/components/icons/UploadIcon";
import useBarberData, { ServicesData } from '@/hooks/useBarberData';

export default function ServicesForm() {
	const { formData, changeData } = useBarberData('services')

	const handleServiceChange = (value: string, index: number, field: keyof ServicesData['services'][0]) => {
		const newServices = [...formData.services];
		if (typeof value === 'string' && (field === 'image' || field === 'nombre')) {
			newServices[index][field] = value;
		} else if (field === 'precio') {
			newServices[index][field] = Number(value);
		}
		changeData({ services: newServices });
	};

	const handleImageChange = (file: File, index: number) => {
		const newServices = [...formData?.services];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result as string;
				newServices[index].image = base64String;
			};
			reader.readAsDataURL(file);
		}
		changeData({ services: newServices });
	};

	const addService = () => {
		changeData({ services: [...formData?.services, { nombre: '', precio: 0, id: formData?.services.length + 1, image: '' }] });
	};

	const removeService = (id: number) => {
		changeData({ services: [...formData?.services.filter(service => service.id !== id)] });
	};


	return (
		<form>
			<p>Agrega los servicios que ofreces en tu barbería</p>
			{formData?.services?.map((service, index) => (
				<div key={index} className="flex gap-5 mb-5 border-b border-neutral-700 py-5">
					<div className="flex flex-col gap-5 w-full">
						<label htmlFor={`nombre_servicio_${index}`}>
							Nombre del servicio
							<input
								id={`nombre_servicio_${index}`}
								value={service.nombre}
								onChange={(e) => handleServiceChange(e.target.value, index, 'nombre')}
								placeholder="Ex. Corte de barba"
								type="text"
								className="appearance-none bg-cave-gray border border-gray-400 p-2 rounded-md text-white w-full focus:border-cave-brown outline-none"
							/>
						</label>
						<label htmlFor={`precio_${index}`}>
							Precio
							<input
								id={`precio_${index}`}
								value={service.precio?.toString()}
								onChange={(e) => handleServiceChange(e.target.value, index, 'precio')}
								placeholder="Ex. 25000"
								type="text"
								className="appearance-none bg-cave-gray border border-gray-400 p-2 rounded-md text-white w-full focus:border-cave-brown outline-none"
							/>
						</label>
					</div>
					<div className="bg-[#141414b2] rounded-md flex flex-col justify-center items-center basis-1/3 px-10 py-5">
						<label htmlFor={`file-upload-service_${index}`} className="flex flex-col justify-center items-center cursor-pointer">
							<UploadIcon w={42} h={42} />
							<p className="text-white text-sm font-thin tracking-[0] leading-[normal]">
								Carga una imagen para el servicio
							</p>
							<input
								id={`file-upload-service_${index}`}
								type="file"
								onChange={(e) => {
									if (e.target.files?.[0]) {
										handleImageChange(e.target.files[0], index);
									}
								}}
								className="hidden"
							/>
						</label>
					</div>
					<button type="button" onClick={() => removeService(service.id)} className="bg-cave-gray py-2 px-4 rounded-md text-white">
						Borrar
					</button>
				</div>
			))}
			<button type="button" onClick={addService} className="bg-cave-gray py-2 px-4 rounded-md text-white">
				+ Agregar otro servicio
			</button>
		</form>
	);
}
