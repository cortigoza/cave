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
        <div>
            <h1>Iniciar Sesión</h1>
            <input type="text" placeholder="Nombre de usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};

export default Login;