"use client";

import { cn } from "@/lib/utils";
import { Disclosure, Transition } from "@headlessui/react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const Accordion = ({ content, title, divider }: AccordionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={cn("w-full p-8 border-gray-200", {
            "bg-gray-50 border rounded-2xl": open,
            "border-b": divider,
          })}
        >
          <Disclosure.Button className='flex w-full justify-between py-4'>
            {title}
            <div className='text-gray-400 text-2xl'>
              {open ? <MdRemoveCircleOutline /> : <MdAddCircleOutline />}
            </div>
          </Disclosure.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel>{content}</Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default Accordion;

type AccordionProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  divider: boolean;
};
