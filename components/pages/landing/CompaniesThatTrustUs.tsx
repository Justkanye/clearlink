import Image from "next/image";

import MotionContainer from "@/components/layout/framer-motion/MotionContainer";
import CompanyCarousel from "./CompanyCarousel";
import { carousel } from "@/lib/helpers/motion";
import { companiesThatTrustUs } from "@/lib/constants/companiesThatTrustUs";
import { altFromImgUrl } from "@/lib/utils";

const CompaniesThatTrustUs = () => {
  return (
    <section className='py-24 px-8'>
      <p className='text-gray-600 text-xl font-medium text-center mb-12'>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className='mt-12 relative max-md:hidden'>
        <MotionContainer
          className='flex items-center gap-[69px] mt-12 transition-transform'
          variants={carousel({})}
          // animate='animate'
        >
          {companiesThatTrustUs.map(({ height, src, width }) => (
            <Image
              key={altFromImgUrl(src)}
              alt={altFromImgUrl(src)}
              {...{ src, width: width, height }}
            />
          ))}
        </MotionContainer>
      </div>
      <div className='md:hidden'>
        <CompanyCarousel />
      </div>
    </section>
  );
};

export default CompaniesThatTrustUs;
