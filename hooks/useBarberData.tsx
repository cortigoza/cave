import { useEffect, useState } from "react"
export type AboutData = {
	about?: string
	description?: string
}
export type ServicesData = {
	services: {
		id: number
		nombre: string
		precio: number
		image: string
	}[]
}
export type HeadersData = {
	banner?: string
	mosaico1?: string
	mosaico2?: string
	mosaico3?: string
}
export type ScheduleData = {
	schedules: {
		day: string
		start: string
		end: string
	}[]
}
export type BarberDataTypes = {
	about: AboutData
	services: ServicesData
	headers: HeadersData
	schedule: ScheduleData
	all: AboutData & ServicesData & HeadersData & ScheduleData
}

export default function useBarberData<T extends keyof BarberDataTypes>(formName: T): { changeData: (data: BarberDataTypes[T]) => void; formData: BarberDataTypes[T] } {
	const [formData, setFormData] = useState<BarberDataTypes[T]>({} as BarberDataTypes[T])

	const changeData = (data: BarberDataTypes[T]) => {
		localStorage.setItem(formName, JSON.stringify({ ...formData, ...data }))
		setFormData({ ...formData, ...data })
	}

	useEffect(() => {
		if (typeof window !== undefined) {
			if (formName === 'all') {
				const headers = JSON.parse(localStorage.getItem('headers') ?? '{}')
				const about = JSON.parse(localStorage.getItem('about') ?? '{}')
				const services = JSON.parse(localStorage.getItem('services') ?? '{}')
				const schedule = JSON.parse(localStorage.getItem('schedule') ?? '{}')

				setFormData({ headers, about, services, schedule } as unknown as BarberDataTypes[T])
				return;
			}

			const data = localStorage.getItem(formName)
			if (data) {
				const _data = JSON.parse(data)
				setFormData(_data)
			} else {
				if (formName === 'schedule') {
					setFormData({ schedules: [{ day: '', start: '', end: '' }] } as unknown as BarberDataTypes[T])
				} else if (formName === 'services') {
					setFormData({ services: [{ nombre: '', precio: 0, id: 1, image: '' }] } as unknown as BarberDataTypes[T])
				}
			}
		}
	}, [])

	return { formData, changeData }
}
