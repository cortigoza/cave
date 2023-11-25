import useSession from '@/hooks/useSession';

function Authentication({ children }: { children: React.ReactNode }) {
  const { autenticado } = useSession()

  if (!autenticado) {
    return <p>No estás autenticado. Redirigiendo...</p>;
  }

  return <>{children}</>;
}

export default Authentication;
