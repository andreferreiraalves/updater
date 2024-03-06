export default function NavComponent() {
  return (
    <nav className="bg-primary">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://mercatustecnologia.com.br/wp-content/uploads/2023/02/mercatus-tecnologia-logo-branca-stuck.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Instalador
          </span> */}
        </div>
      </div>
    </nav>
  );
}
