import Menu from "./Menu";

export default function Header({ hasBgImage }: { hasBgImage?: boolean }) {
  return (
    <header className='flex justify-between items-center z-[100] px-[50px] py-[18px]' style={hasBgImage ? { backgroundImage: "url('/image-1.png')", backgroundPosition: 'left' } : {}}>
      <h1 className='font-normal text-[40px]'>The Cave</h1>
      <Menu />
    </header>
  )
}
