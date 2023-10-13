import { benefits } from "@/lib/constants/whyChooseUs";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section id='why-us' className='py-24'>
      <div className='mb-20'>
        <p className='text-blue-700 text-lg font-semibold'>
          The ClearLink Advantage
        </p>
        <h2 className='text-gray-800 text-5xl font-semibold -tracking-[0.96px]'>
          Why choose ClearLink?
        </h2>
        <p className='text-gray-500 text-2xl md:max-w-[60%]'>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className='flex items-center gap-5 justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2 flex-[60%] gap-x-10 gap-y-[60px]'>
          {benefits.map(({ content, icon, title }) => (
            <div key={title}>
              <div className='flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 w-fit p-4 mb-5'>
                <Image src={icon} alt={title} width={24} height={24} />
              </div>
              <h3 className='tex-2xl font-semibold text-gray-900'>{title}</h3>
              <p className='text-gray-600 text-lg'>{content}</p>
            </div>
          ))}
        </div>
        <div className='relative flex-[35%]'>
          <Image
            src='/assets/icons/Hand-drawn arrow.svg'
            alt='arrow'
            width={238}
            height={157}
            className='absolute top-0 -translate-y-[90%]'
          />
          <Image
            src='/assets/images/users.png'
            alt='users'
            width={544}
            height={527}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
