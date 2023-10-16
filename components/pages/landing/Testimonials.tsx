import Image from "next/image";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

import Rating from "@/components/shared/Rating";
import MotionContainer from "@/components/layout/framer-motion/MotionContainer";
import { textVariant, zoomIn } from "@/lib/helpers/motion";

const className =
  "bg-[rgba(255,255,255,0.90)] text-2xl text-blue-700 rounded-full border border-blue-100 w-14 h-14 flex items-center justify-center cursor-pointer";

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-24 px-8 grid grid-cols-1 md:grid-cols-2 relative gap-16 items-center'
    >
      <div className='bg-gray-50 absolute top-0 bottom-0 -right-1/2 -left-1/2 -z-10' />
      <div className='flex flex-col gap-12'>
        <Image
          src='/assets/icons/companies-that-trust-us/Shopify.svg'
          alt='Shopify'
          width={112.8}
          height={32}
        />
        <Rating rating={5} />
        <MotionContainer
          as='h2'
          variants={textVariant(0.2)}
          className='text-gray-900 text-[44px] leading-[60px] font-medium -tracking-[0.88px]'
        >
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and
          <br />
          top-notch security make it essential for our team.
        </MotionContainer>
        <div className='flex gap-1 max-md:justify-between'>
          <div className='flex gap-4 max-md:flex-wrap'>
            <Image
              src='/assets/images/Avatar.png'
              alt='Sarah'
              width={56}
              height={56}
            />
            <div>
              <h6 className='text-gray-900 text-xl font-semibold'>
                Sarah Thompson
              </h6>
              <p className='text-gray-600 text-lg'>Project Manager, Shopify</p>
            </div>
          </div>
          <div className='flex'>
            <div className={className}>
              <MdArrowBack />
            </div>
            <div className={className}>
              <MdArrowForward />
            </div>
          </div>
        </div>
      </div>
      <MotionContainer variants={zoomIn(0.2, 1)}>
        <Image
          src='/assets/images/Testimonial Contents.png'
          alt='Testimonial images'
          width={640}
          height={490}
        />
      </MotionContainer>
    </section>
  );
};

export default Testimonials;
