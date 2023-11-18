import Authentication from '../components/Authentication';
import '../styles/globals.css';

function AppointMent() {
  return (
    <Authentication>
      <div>
        {/* Contenido de la página protegida */}
        <h1>Página Protegida</h1>
        {/* ...otros elementos */}
      </div>
    </Authentication>
  );
}

export default AppointMent;