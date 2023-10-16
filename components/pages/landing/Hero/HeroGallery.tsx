import Image from "next/image";

import { heroGalleryIcons, heroGalleryImages } from "@/lib/constants/hero";
import { altFromImgUrl } from "@/lib/utils";
import MotionContainer from "@/components/layout/framer-motion/MotionContainer";
import { zoomIn } from "@/lib/helpers/motion";

const HeroGallery = () => {
  return (
    <div className='flex p-8 flex-col justify-center items-center gap-10 rounded-2xl border border-blue-200 bg-blue-50 shadow-2xl'>
      <div className='grid grid-cols-3 gap-5'>
        {heroGalleryImages.map((img, i) => (
          <div
            key={img.bg}
            style={{ backgroundColor: img.bg }}
            className='rounded-xl overflow-hidden flex items-end justify-center'
          >
            <MotionContainer
              variants={zoomIn(0.2 + i / 3, 1)}
              className='self-end'
            >
              <Image
                src={img.src}
                alt='user in video call'
                width={160}
                height={160}
              />
            </MotionContainer>
          </div>
        ))}
      </div>
      <div className='flex items-start gap-4'>
        {heroGalleryIcons.map(icon => (
          <div
            key={icon}
            className='flex items-center justify-center p-3 rounded-full border border-blue-100 bg-white shadow-sm'
          >
            <Image
              src={icon}
              alt={altFromImgUrl(icon)}
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;
