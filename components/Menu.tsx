import useSession from "@/hooks/useSession";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import MenuCloseIcon from "./icons/MenuCloseIcon";
import { useRouter } from "next/router";

const liStyle = 'border-b border-cave-gray py-3 mb-5'


export default function Menu() {
  const { autenticado } = useSession()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleCrearBarberiaClick = () => {
    setIsOpen(false)
  }

  return (
    <nav>
      {/* Botón para alternar el menú */}
      {!isOpen && (
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <MenuIcon />
        </button>
      )}

      {/* Panel del menú */}
      <aside
        aria-hidden={!isOpen}
        className={`${isOpen ? 'translate-x-0' : 'translate-x-[500px]'
          } fixed inset-y-0 right-0 w-[414px] transition-transform duration-300 transform bg-black/80 text-white z-[100]`}
      >
        {/* Contenido del menú */}
        <section className="px-[50px] py-[18px]">
          <div className="flex justify-between items-center h-[60px]">
            <h2 className="text-2xl">Menú</h2>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuCloseIcon />
            </button>
          </div>
          <ul className="mt-5">
            {autenticado && (
              <li tabIndex={isOpen ? 0 : -1} className={liStyle}>
                <button
                  onClick={handleCrearBarberiaClick}
                  className="mb-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                >
                  Crear barbería
                </button>
              </li>
            )}
            <li tabIndex={isOpen && !autenticado ? 0 : -1 || isOpen && autenticado ? 1 : -1} className={liStyle}>
              <button
                onClick={() => router.push('/')}
                className="text-xl"
              >
                Home
              </button>
            </li>
            <li tabIndex={isOpen && !autenticado ? 1 : -1 || isOpen && autenticado ? 2 : -1} className={liStyle}>
              <button
                onClick={() => router.push('/login')}
                className="text-lg"
              >
                Iniciar Sesión
              </button>
            </li>
          </ul>
        </section>
      </aside>
    </nav>
  );
}
