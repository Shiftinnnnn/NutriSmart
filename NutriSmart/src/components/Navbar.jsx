const NavBar = () => {
    const nav_items = "hover:cursor-pointer hover:text-dark-green"
  return (
    <>
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-25 py-15 font-medium text-xl border-b border-[#E1E1E1] bg-white h-[80px]">

          <div className="flex">
            <img className="h-50" src="public/Logo-v2.png" alt="Logo"/>
          </div>
         
          <nav class="md:ml-auto md:mr-auto flex items-center justify-center gap-x-20">
            <a class={nav_items}>Para Ti</a>
            <a class={nav_items}>Nuestros Usuarios</a>
            <a class={nav_items}>Cómo funciona</a>
            <a class={nav_items}>Únete</a>
          </nav>

          <div className="flex ">
          <button class="mx-5 bg-sky-green rounded-2xl py-4 px-3 hover:cursor-pointer">
            Iniciar Sesión
          </button>
          <button class="bg-dark-green rounded-2xl py-4 px-3 hover:cursor-pointer">
            Registrarse
          </button>
          </div>
        </header>
    </>
  );
};

export default NavBar;
