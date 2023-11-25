import Menu from "./Menu";

export default function Header() {
  return (
    <header className='flex justify-between items-center z-[100] px-[50px] py-[18px]'>
      <h1 className='font-normal text-[40px]'>The Cave</h1>
      <Menu />
    </header>
  )
}
