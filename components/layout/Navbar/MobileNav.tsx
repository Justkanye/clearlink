"use client";
import { Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import { screens } from "tailwindcss/defaultTheme";

import { cn } from "@/lib/utils";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

const MobileNav = ({
  children,
  isOpen,
  toggleModal,
}: PropsWithChildren<MobileNavProps>) => {
  const isMd = useMediaQuery(`(min-width: ${screens.md})`);
  return (
    <>
      <div
        className={cn("menu-button-wrapper", {
          open: isOpen,
          hidden: !isOpen,
        })}
      >
        <div className='icon-wrapper'>
          <div className='hamburger' onClick={toggleModal}>
            <span className='hamburger-line first' />
            <span className='hamburger-line second' />
            <span className='hamburger-line third' />
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={isOpen}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div
          className={cn(
            "hidden md:hidden z-50 fixed top-0 left-0 w-screen h-screen overflow-y-hidden",
            {
              "max-md:flex": isOpen,
              hidden: !isOpen,
            }
          )}
        >
          <div
            className='flex-[1] h-full bg-gray-800 opacity-50'
            onClick={toggleModal}
          />
          <div className='flex flex-col items-end justify-center w-1/2 pl-2 pr-[10%] h-full bg-white gap-6'>
            {children}
          </div>
        </div>
      </Transition>
      {isMd && children}
    </>
  );
};

export default MobileNav;

type MobileNavProps = {
  isOpen: boolean;
  toggleModal: () => void;
};
