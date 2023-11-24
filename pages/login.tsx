import { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

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
        <div className="flex items-center justify-center min-h-screen bg-gray-800" style={{ backgroundImage: "url('/image-1.png')" }}>
            <div className="max-w-md w-full space-y-8 p-10 bg-gray rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-5xl text-center">
                        The Cave
                    </h2>
                </div>
                <div>
                    <p className="mt-6 text-l">
                        Inicia sesion para acceder a todas las opciones disponibles
                    </p>
                </div>
                <div className="rounded-md shadow-sm">
                    <div>
                        <label htmlFor="username" className="sr-only">Nombre de usuario</label>
                        <input onChange={(e) => setUsername(e.target.value)} id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nombre de usuario" />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" />
                    </div>
                </div>
                <div>
                    <button onClick={handleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-cave-brown ">
                        Iniciar sesión
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;
