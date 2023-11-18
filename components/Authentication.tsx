import { useEffect, useState } from 'react';

function Authentication({ children }: { children: React.ReactNode }) {
  const [autenticado, setAutenticado] = useState(false);
  const local: string | null = localStorage.getItem("data")
  let data = {}

  if (local !== null) {
    data = JSON.parse(local)
  }

  const infoSend = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  useEffect(() => {
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
  }, []);

  if (!autenticado) {
    return <p>No estás autenticado. Redirigiendo...</p>;
  }

  return <>{children}</>;
}

export default Authentication;