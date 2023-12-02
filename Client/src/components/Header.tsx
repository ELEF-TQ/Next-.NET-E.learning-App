import Link from "next/link";

  
const Header = ()  => {
  return (
    <header >
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex  justify-center  text-center mx-auto max-w-screen-xl">
          <Link href="" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              E_Learning
            </span>
          </Link>
         
         <>
         button sing
         </>
         
        </div>
      </nav>
    </header>
  );
};

export default Header;
