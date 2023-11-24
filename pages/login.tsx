import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const redirectToPage = (path: string) => {
        router.push(path);
    };

    const handleLogin = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("data", JSON.stringify(data.response))
            redirectToPage('/appointment')
            return
        }

        alert("Contraseña incorrecta")
    };

    return (

        <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white" style={{ backgroundImage: "url('/image-1.png')" }}>
            <div className='absolute top-0 bottom-0 bg-black opacity-70 w-full z-[0]'>
            </div>
            <h2 className="mt-6 text-center text-[64px] font-semibold text-white z-[1]">
                The Cave
            </h2>
            <div className="max-w-md w-full space-y-8 p-10 bg-cave-gray/60 rounded-lg shadow-lg z-[1] mt-5">
                <div className="rounded-md flex flex-col gap-5">
                    <p className='font-thin'>
                        Inicia sesión para acceder a todas las opciones disponibles.
                    </p>
                    <div>
                        <label htmlFor="username" className="sr-only">Nombre de usuario</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none bg-cave-gray border border-gray-400 p-2 rounded-md text-white w-full focus:border-cave-brown outline-none"
                            placeholder="Nombre de usuario" />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none bg-cave-gray border border-gray-400 p-2 rounded-md text-white w-full focus:border-cave-brown outline-none"
                            placeholder="Contraseña" />
                    </div>
                </div>
                <div>
                    <button onClick={handleLogin} className="bg-cave-brown text-[24px] text-white p-2 rounded-md w-full font-thin">
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
