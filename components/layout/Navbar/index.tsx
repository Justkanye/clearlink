"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/components/shared/Dropdown";
import BrandLink from "@/components/shared/BrandLink";

import { cn } from "@/lib/utils";
import Button from "@/components/shared/Button";
import { navLinks } from "@/lib/constants/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prev => !prev);
    const body = document.querySelector("body");
    body?.classList.toggle("overflow-hidden");
  };
  const closeModal = () => {
    setIsOpen(false);
    const body = document.querySelector("body");
   body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className='flex items-center justify-between px-8 py-4 rounded-full bg-gray-100 border border-gray-300 max-md:py-0'>
      <BrandLink />
      <MobileNav {...{ isOpen, toggleModal }}>
        <>
          <ul className='flex max-md:flex-col items-center md:gap-2 gap-4'>
            {navLinks.map(link => {
              if (link.sublinks)
                return (
                  <li key={link.path}>
                    <Dropdown label={link.name}>
                      <div className='py-1'>
                        {link.sublinks.map(sublink => (
                          <Menu.Item key={sublink.path}>
                            {({ active }) => (
                              <Link
                                onClick={closeModal}
                                href={sublink.path}
                                className={cn(
                                  {
                                    "bg-gray-100 text-gray-900": active,
                                    "text-gray-700": !active,
                                  },
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {sublink.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Dropdown>
                  </li>
                );
              return (
                <li key={link.path}>
                  <Link
                    onClick={closeModal}
                    href={link.path}
                    className='text-lg text-gray-500 font-semibold hover:text-gray-700'
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='flex max-md:flex-col items-center md:gap-2 gap-4'>
            <Button
              className='bg-white border border-gray-400 text-gray-900'
              onClick={closeModal}
            >
              Talk to sales
            </Button>
            <Button onClick={closeModal}>Sign up for free</Button>
          </div>
        </>
      </MobileNav>
    </nav>
  );
};

export default Navbar;
