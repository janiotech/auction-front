"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Listpaths = [
    {
      text: "Leilões",
      path: "/",
    },
    {
      text: "Como Funciona",
      path: "/comofunciona",
    },
    {
      text: "Quem Somos",
      path: "/quemsomos",
    },
    {
      text: "Fale Conosco",
      path: "/faleconosco",
    },
  ];

  return (
    <nav className="relative bg-primary shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <p className="w-auto h-6 sm:h-7">LOGO NAME</p>
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="text-gray dark:text-gray hover:text-gray dark:hover:text-gray focus:outline-none focus:text-gray dark:focus:text-gray"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          {isOpen ? (
            <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-primary dark:bg-secondary lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
              <div className="flex flex-col mx-6 lg:flex-row lg:items-center lg:mx-8">
                {Listpaths.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="px-3 py-2 mx-3 mt-2 text-gray transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-secondary hover:text-primary dark:hover:bg-gray"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              <div className="flex items-center mt-4 lg:mt-0">
                <Link href="/login">
                  <button className="bg-secondary px-4 py-3 text-primary rounded-2xl text-sm">
                    Entrar | Cadastrar
                  </button>
                </Link>
                {/* <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="bg-secondary w-8 h-8 overflow-hidden border-2 border-gray rounded-full text-center flex items-center justify-center text-primary">
                    J
                  </div>
                  <h3 className="mx-2 text-gray dark:text-gray lg:hidden">Jânio Matos</h3>
                </button> */}
              </div>
            </div>
          ) : (
            <div className="hidden absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-primary dark:bg-gray lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-none lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                {Listpaths.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="px-3 py-2 mx-3 mt-2 text-gray transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray hover:bg-secondary hover:text-primary dark:hover:bg-gray"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              <div className="flex items-center mt-4 lg:mt-0">
                <Link href="/login">
                  <button className="bg-secondary px-4 py-3 text-primary rounded-2xl text-sm">
                    Entrar | Cadastrar
                  </button>
                </Link>
                {/* <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="text-primary bg-secondary w-8 h-8 overflow-hidden border-2 border-gray rounded-full text-center flex items-center justify-center">
                    J
                  </div>
                  <h3 className="mx-2 text-gray dark:text-gray lg:hidden">Jânio Matos</h3>
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
