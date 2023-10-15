import Link from "next/link";
import Image from "next/image";

import BrandLink from "@/components/shared/BrandLink";
import { footerLinks, socialLinks } from "@/lib/constants/navigation";

const Footer = () => {
  return (
    <footer>
      <div className='mb-12 flex max-md:flex-col gap-10 md:gap-[100px]'>
        <div className='md:flex-[10%]'>
          <BrandLink />
          <p className='mt-8 text-gray-600 text-lg'>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className='flex gap-8 md:gap-20 justify-between max-md:flex-wrap'>
          {footerLinks.map(({ name, links }) => (
            <div key={name}>
              <p className='text-gray-500 text-base font-semibold mb-4'>
                {name}
              </p>
              <ul className='flex flex-col gap-4'>
                {links.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      href={path}
                      className='text-gray-600 hover:text-gray-800 text-lg font-semibold'
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='flex flex-col gap-4'>
            <p className='text-blue-700 font-semibold text-base'>Get the app</p>
            <Image
              src='/assets/icons/Mobile app store badge.svg'
              alt='appstore'
              width={150}
              height={50}
              className='cursor-pointer'
            />
            <Image
              src='/assets/images/google-play-badge.png'
              alt='playstore'
              width={150}
              height={50}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div className='relative flex justify-between py-12 max-md:flex-col gap-2 items-center'>
        <div className='bg-gray-50 absolute top-0 bottom-0 -right-1/2 -left-1/2 -z-10' />
        <p className='text-gray-500 text-base'>
          © 2023 ClearLink. All rights reserved.
        </p>
        <div className='flex items-center gap-6'>
          {socialLinks.map(({ name, Icon, href }) => (
            <a
              href={href}
              key={name}
              className='text-gray-400 text-2xl hover:text-gray-600'
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
