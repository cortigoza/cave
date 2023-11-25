import UploadIcon from "@/components/icons/UploadIcon";
import useBarberData from "@/hooks/useBarberData";
import Image from 'next/image'

export default function HeadersForm() {
	const { formData, changeData } = useBarberData('headers')

	const handleImageChange = (event: any, setSrc: any) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result as string;
				setSrc(base64String);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<form>
			<div className="w-full bg-[#141414b2] rounded-md flex flex-col justify-center items-center py-20 my-[52px]">
				<label htmlFor="file-upload-banner" className="flex flex-col justify-center items-center cursor-pointer">
					{formData?.banner ? <Image src={formData?.banner} alt='banner img' width={120} height={120} /> : (
						<>
							<UploadIcon />
							<p className="font-thin text-white text-[16px] tracking-[0] leading-[normal]">
								Carga una imagen para el banner
							</p>
						</>
					)}
					<input id="file-upload-banner" type="file" className="hidden" onChange={(e) => handleImageChange(e, (imageStr: string) => changeData({ banner: imageStr }))} accept="image/*" />
				</label>
			</div>
			<div className="flex gap-10 justify-between">
				<div className="bg-[#141414b2] rounded-md flex flex-col justify-between items-center basis-1/3 px-10 py-5">
					<label htmlFor="file-upload-mosaico-1" className="flex flex-col justify-center items-center cursor-pointer">
						{formData?.mosaico1 ? <Image src={formData?.mosaico1} alt='banner img' width={80} height={80} /> : (
							<>
								<UploadIcon w={42} h={42} />
								<p className="font-thin text-white text-[16px] tracking-[0] leading-[normal]">
									Carga una imagen para el banner
								</p>
							</>
						)}
						<input id="file-upload-mosaico-1" type="file" className="hidden" onChange={(e) => handleImageChange(e, (imageStr: string) => changeData({ mosaico1: imageStr }))} accept="image/*" />
					</label>
				</div>
				<div className="bg-[#141414b2] rounded-md flex flex-col justify-between items-center basis-1/3 px-10 py-5">
					<label htmlFor="file-upload-mosaico-2" className="flex flex-col justify-center items-center cursor-pointer">
						{formData?.mosaico2 ? <Image src={formData?.mosaico2} alt='banner img' width={80} height={80} /> : (
							<>
								<UploadIcon w={42} h={42} />
								<p className="font-thin text-white text-[16px] tracking-[0] leading-[normal]">
									Carga una imagen para el banner
								</p>
							</>
						)}
						<input id="file-upload-mosaico-2" type="file" className="hidden" onChange={(e) => handleImageChange(e, (imageStr: string) => changeData({ mosaico2: imageStr }))} accept="image/*" />
					</label>
				</div>
				<div className="bg-[#141414b2] rounded-md flex flex-col justify-between items-center basis-1/3 px-10 py-5">
					<label htmlFor="file-upload-mosaico-3" className="flex flex-col justify-center items-center cursor-pointer">
						{formData?.mosaico3 ? <Image src={formData?.mosaico3} alt='banner img' width={80} height={80} /> : (
							<>
								<UploadIcon w={42} h={42} />
								<p className="font-thin text-white text-[16px] tracking-[0] leading-[normal]">
									Carga una imagen para el banner
								</p>
							</>
						)}
						<input id="file-upload-mosaico-3" type="file" className="hidden" onChange={(e) => handleImageChange(e, (imageStr: string) => changeData({ mosaico3: imageStr }))} accept="image/*" />
					</label>
				</div>
			</div>
		</form>
	)
}
