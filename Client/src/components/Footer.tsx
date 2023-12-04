import Link from "next/link";


  const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-2 p-2 md:py-4">
        <div className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="https://flowbite.com/" className="flex items-center mb-2 sm:mb-0 space-x-2 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-6" alt="Flowbite Logo" />
              <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">E_Learning</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-2 text-xs font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-2">
              <li>
                <Link href="/about" className="hover:underline me-2 md:me-4">About</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-2 md:me-4">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-2 md:me-4">Licensing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">ELEF-TQ™</a>. All Rights Reserved. <br/> Created By: TARIQ AIT LAKHLIFT - ABDESSAMAD TANAFAAT - OUSSAMA SFIRI</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
