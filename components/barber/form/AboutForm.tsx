import useBarberData from "@/hooks/useBarberData"

export default function AboutForm() {
	const { changeData, formData } = useBarberData('about')

	return (
		<>
			<label htmlFor="about" className="">
				Háblanos un poco sobre tu barbería. Como la definirías en una oración de
				máximo 7 palabras.
				<input
					id="about"
					placeholder="Ex. Los mejores barberos de la zona"
					type="text"
					value={formData?.about}
					onChange={(e) => changeData({ about: e.target.value })}
					className="appearance-none bg-cave-gray border border-gray-400 p-2 rounded-md text-white w-full focus:border-cave-brown outline-none"
				/>
			</label>
			<label htmlFor="description" className="">
				Una breve descripción sobre tu barbería
				<input
					id="description"
					placeholder="Ex. El proceso de “corte de cabello” se usa para describir...."
					type="text"
					value={formData?.description}
					onChange={(e) => changeData({ description: e.target.value })}
					className="appearance-none bg-cave-gray border border-gray-400 p-2 rounded-md text-white w-full focus:border-cave-brown outline-none"
				/>
			</label>
		</>
	)
}
