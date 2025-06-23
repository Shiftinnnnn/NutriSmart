const NavBar = () => {
  const nav_items = "hover:cursor-pointer hover:text-dark-green";

  const redirectToExternal = () => {
    window.location.href = "https://open-source-app-56e02.web.app/";
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-25 py-15 font-medium text-xl border-b border-[#E1E1E1] bg-white h-[80px]">

        <div className="flex">
          <img className="h-50" src="public/Logo-v2.png" alt="Logo" />
        </div>

        <nav className="md:ml-auto md:mr-auto flex items-center justify-center gap-x-20">
          <a className={nav_items}>Para Ti</a>
          <a className={nav_items}>Nuestros Usuarios</a>
          <a className={nav_items}>Cómo funciona</a>
          <a className={nav_items}>Únete</a>
        </nav>

        <div className="flex">
          <button
            className="mx-5 bg-sky-green rounded-2xl py-4 px-3 hover:cursor-pointer"
            onClick={redirectToExternal}
          >
            Iniciar Sesión
          </button>
          <button
            className="bg-dark-green rounded-2xl py-4 px-3 hover:cursor-pointer"
            onClick={redirectToExternal}
          >
            Registrarse
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
