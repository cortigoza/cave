import { useEffect, useState } from "react";

export default function useSession() {
	const [data, setData] = useState()
	const [autenticado, setAutenticado] = useState(false);

	useEffect(() => {
		const validatorSession = async () => {
			const infoSend = {
				method: 'POST',
				header: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
			fetch('/api/validator-session', infoSend)
				.then((response) => {
					if (response.status === 200) {
						setAutenticado(true);
					} else {
						setAutenticado(false);
					}
				})
				.catch((error) => {
					console.error('Error al validar la sesión:', error);
					setAutenticado(false);
				});
		}
		validatorSession()
	}, []);

	useEffect(() => {
		if (typeof window !== undefined) {
			const local: string | null = localStorage.getItem("data")
			if (local !== null) {
				setData(JSON.parse(local))
			}
		}
	}, [])

	return { autenticado }

}
