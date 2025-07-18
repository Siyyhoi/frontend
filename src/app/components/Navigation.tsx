'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './login';
import Register from './register';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite');
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsRegister(false); // กลับไป login เสมอเมื่อเปิด modal ใหม่
  };

  return (
    <>
      {/* Navbar */}
<nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm sticky top-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
    {/* Logo */}
    <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="text-2xl font-bold text-gray-800 dark:text-white">FrontEnd</span>
    </Link>

    {/* Navigation links */}
    <div className="hidden md:flex items-center space-x-6">
      <Link href="#" className="text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline">Home</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">About</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
    </div>

    {/* Login/Register Button */}
    <div className="mt-4 md:mt-0">
      <button
        onClick={handleToggle}
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
      >
        Login / Register
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  <div className="md:hidden px-4 pb-4">
    <ul className="space-y-2">
      <li><a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
      <li><a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
      <li><a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
      <li><a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
      <li><a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
    </ul>
  </div>
</nav>


      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={handleToggle}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-[400px] h-[450px] perspective"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
                  isRegister ? 'rotate-y-180' : ''
                }`}
              >
                {/* Login Card Front */}
                  <Login setIsRegister={setIsRegister}/>


                {/* Register Card Back */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <Register />
                  {/* <div className="text-center mt-4">
                    <button
                      onClick={() => setIsRegister(false)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      มีบัญชีอยู่แล้ว? กลับไปล็อกอิน
                    </button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
}
