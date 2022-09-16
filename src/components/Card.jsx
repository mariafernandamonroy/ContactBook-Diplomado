export const Card = ({ usuario }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#41BFB3] text-white border-[#9BF2EA] border-8 rounded-3xl flex flex-col justify-center items-center my-10 p-8	w-2/6			">
        <img
          className="w-32 rounded-full border-white border-4 shadow-xl"
          src={usuario.picture.large}
          alt="img"
        />
        <h3 className="mt-2">
          <span className="font-semibold">Nombre: </span>
          {usuario.name.title +
            " " +
            usuario.name.first +
            " " +
            usuario.name.last}
        </h3>
        <h3 className="mt-2">
          <span className="font-semibold">Correo: </span>
          {usuario.email}
        </h3>
        <h3 className="mt-2">
          <span className="font-semibold">Telefono: </span>
          {usuario.cell}
        </h3>
      </div>
    </div>
  );
};
