"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    // Effacer le token du localStorage lors de la déconnexion
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Rediriger vers la page d'accueil ou une autre page après la déconnexion
    router.push('/');
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo à gauche */}
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

          {/* Boutons/Links à droite */}
          <div className="flex space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-primary-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-primary-700"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/signup"
                  className="bg-primary-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-primary-700"
                >
                  Sign Up
                </Link>
                <Link
                  href="/auth/login"
                  className="bg-primary-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-primary-700"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
