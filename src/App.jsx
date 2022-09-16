import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./components/Card";
import { Loading } from "./components/Loading";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [buscar, setBuscar] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    contactos();
  }, []);

  const contactos = async () => {
    setIsLoading(true);
    const respuesta = await fetch("https://randomuser.me/api/?results=20");
    const data = await respuesta.json();
    setUsuarios(data.results);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center mt-6">
        <input
          className="text-white bg-slate-50/70 border-2 border-white rounded-3xl m-10 px-3 py-1 w-80 "
          placeholder="Ingrese contacto ..."
          onChange={(palabra) => setBuscar(palabra.target.value)}
        ></input>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        usuarios
          .filter((usuario) => {
            if (buscar === "") {
              return usuario;
            } else if (
              usuario.name.first.toLowerCase().includes(buscar.toLowerCase()) ||
              usuario.name.last.toLowerCase().includes(buscar.toLowerCase()) ||
              usuario.email.toLowerCase().includes(buscar.toLowerCase()) ||
              usuario.cell.includes(buscar)
            ) {
              return usuario;
            }
          })
          .map((usuario) => <Card key={usuario.id} usuario={usuario} />)
      )}
    </div>
  );
}

export default App;
