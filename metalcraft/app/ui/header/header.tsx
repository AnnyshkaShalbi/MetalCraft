'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { halvarBreit } from "@/app/ui/fonts";
import Sidebar from "./sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-800 z-10">
      <div className="border-b border-accent-900 w-full">
        <div className="wrapper flex justify-between items-center py-3 px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden"
          >
            <Image
              width={36}
              height={36}
              src="/burger.svg"
              alt="Иконка для открытия бокового меню"
            />
          </button>

          <div className="flex gap-11 items-center">
            <Link href={'/'}>
              <Image
                width={685}
                height={376}
                src="/logo.png"
                alt="MetalCraft"
                className="w-full h-[60px]"
              />
            </Link>
            <Link 
              target="_blank"
              href={'https://api.whatsapp.com/send/?phone=79186435042'}
              className={`${halvarBreit.className} text-xl hidden md:block`}>
              + 7 (918) 643-50-42
            </Link>
          </div>

          <div className="flex gap-10 items-center">
            <nav className="hidden md:block">
              <ul className="flex gap-5 items-center">
                <li 
                  className="flex items-center gap-2 cursor-pointer">
                  <Image
                    width={16}
                    height={16}
                    src="/mapPin.svg"
                    alt="Месторасположение главного офиса"
                  />
                  Новороссийск
                </li>
                <li
                  className="cursor-pointer relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-500">
                  Контакты
                </li>
              </ul>
            </nav>
            <Link href={'https://api.whatsapp.com/send/?phone=79186435042'} target="_blank">
              <Image
                width={40}
                height={40}
                src="/socials/whatsapp.svg"
                alt="Whats'app для связи с Копикомой в мессенджере."
              />
            </Link>
          </div>
          
        </div>
      </div>
      {/* <NavLinksHeader /> */}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}