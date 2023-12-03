import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                E_Learning
              </span>
          </Link>

          {/* Buttons/Links on the right */}
          <div className="flex space-x-4">
            <Link href="/auth/signup"  className="bg-primary-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-primary-700">
                Sign Up
            </Link>
            <Link href="/auth/login"  className="bg-primary-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-primary-700">
                Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
