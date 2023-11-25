import useBarberData from '@/hooks/useBarberData';
import type { ScheduleData } from '@/hooks/useBarberData'

const allDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const startTimes = Array.from({ length: 8 }, (_, i) => `${6 + i}:00`);
const endTimes = Array.from({ length: 6 }, (_, i) => `${14 + i}:00`);

const ScheduleForm = () => {
	const { formData, changeData } = useBarberData('schedule')

	const handleScheduleChange = (index: number, field: keyof ScheduleData['schedules'][0], value: string) => {
		const newSchedules = [...formData.schedules];
		newSchedules[index][field] = value;
		changeData({ schedules: newSchedules });
	};

	const addSchedule = () => {
		changeData({ schedules: [...formData?.schedules, { day: '', start: '', end: '' }] });
	};

	const getAvailableDays = (currentIndex: number): string[] => {
		const selectedDays = new Set(formData?.schedules.map((schedule, index) => index !== currentIndex && schedule.day));
		return allDays.filter(day => !selectedDays.has(day));
	};

	return (
		<form className="space-y-4 mx-auto">
			{formData?.schedules?.map((schedule, index) => (
				<div key={index} className="flex space-x-2">
					<select
						className="bg-cave-gray text-white px-4 py-2 w-[150px] rounded-md mr-10"
						value={schedule.day}
						onChange={(e) => handleScheduleChange(index, 'day', e.target.value)}
					>
						<option value="">Día</option>
						{getAvailableDays(index).map(day => (
							<option key={day} value={day}>{day}</option>
						))}
					</select>
					<select
						className="bg-cave-gray text-white px-4 py-2 rounded-md"
						value={schedule.start}
						onChange={(e) => handleScheduleChange(index, 'start', e.target.value)}
					>
						<option value="">Inicio</option>
						{startTimes.map(time => (
							<option key={time} value={time}>{time}</option>
						))}
					</select>
					<select
						className="bg-cave-gray text-white px-4 py-2 rounded-md"
						value={schedule.end}
						onChange={(e) => handleScheduleChange(index, 'end', e.target.value)}
					>
						<option value="">Cierre</option>
						{endTimes.map(time => (
							<option key={time} value={time}>{time}</option>
						))}
					</select>
				</div>
			))}

			<button
				type="button"
				onClick={addSchedule}
				className="bg-cave-gray py-2 px-4 rounded-md w-full"
			>
				+ Agregar otro servicio
			</button>
		</form>
	);
};

export default ScheduleForm;
