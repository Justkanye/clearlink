"use client";

import BrandLink from "@/components/shared/BrandLink";
import Dropdown from "@/components/shared/Dropdown";
import { Menu } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants/navigation";
import Link from "next/link";
import Button from "@/components/shared/Button";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 py-4 rounded-full bg-gray-100 border border-gray-300'>
      <BrandLink />
      <ul className='flex items-center gap-2'>
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
                href={link.path}
                className='text-lg text-gray-500 font-semibold hover:text-gray-700'
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='flex items-center gap-2'>
        <Button className='bg-white border border-gray-100 text-gray-900'>
          Talk to sales
        </Button>
        <Button>Sign up for free</Button>
      </div>
    </nav>
  );
};

export default Navbar;
