import { MdCheckCircleOutline } from "react-icons/md";

import Button from "@/components/shared/Button";
import Image from "next/image";

const bonuses = [
  "30 days free trial",
  "Cancel at any time",
  "Access to all features",
  "Peronalized onboarding",
];

const CTA = () => {
  return (
    <section id='cta' className='py-24 grid grid-rows-1 md:grid-cols-2 gap-5'>
      <div>
        <h2 className='text-gray-900 text-5xl font-semibold -tracking-[0.96px] mb-8'>
          Ready to clear the path to perfect communication?
        </h2>
        {bonuses.map(bonus => (
          <div key={bonus} className='flex items-center gap-2'>
            <MdCheckCircleOutline className='text-blue-700 text-[28px]' />
            <p className='text-gray-600 text-2xl'>{bonus}</p>
          </div>
        ))}
        <div className='flex items-center mt-10 gap-2'>
          <Button className='bg-white border border-gray-400 text-gray-900'>
            Talk to sales
          </Button>
          <Button>Start your free trial</Button>
        </div>
      </div>
      <div className='relative'>
        <div className='md:absolute flex-[1] -right-[18%]'>
          <Image
            src='/assets/images/Screen mockup.png'
            alt='Screen mockup'
            width={1024}
            height={682}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
