import Image from "next/image";

import Button from "@/components/shared/Button";
import Rating from "@/components/shared/Rating";
import HeroGallery from "./HeroGallery";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row gap-5 items-center justify-between mt-40 pb-24'>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-gray-800 text-[64px] leading-[72px] font-semibold'>
            Uniting the world,
            <br />
            one video call at a time
          </h2>
          <p className='text-gray-500 text-2xl'>
            Experience the future of communication with ClearLink -
            <br />
            where crystal-clear video conferencing meets unparalleled
            simplicity.
          </p>
        </div>
        <div className='flex items-center gap-5'>
          <Button>Start your free trial</Button>
          <div className='flex items-center gap-3 text-blue-700'>
            <Image src='/assets/icons/AI.svg' alt='AI' width={20} height={20} />
            <p className='text-lg font-semibold'>Discover AI assistant</p>
          </div>
        </div>
        {/* reviews */}
        <div className='flex items-center gap-4'>
          <Image
            src='/assets/images/Avatar group.png'
            alt='users'
            width={152}
            height={40}
          />
          <div className='flex flex-col items-start gap-1'>
            <div className='flex items-center gap-2'>
              <Rating rating={5} />
              <p className='text-base font-semibold text-gray-700'>5.0</p>
            </div>
            <p className='text-base font-medium text-gray-600'>
              from 3,000+ reviews
            </p>
          </div>
        </div>
      </div>
      <HeroGallery />
    </section>
  );
};

export default Hero;
