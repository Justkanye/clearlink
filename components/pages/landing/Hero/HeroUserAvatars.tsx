import Image from "next/image";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/helpers/motion";
import MotionContainer from "@/components/layout/framer-motion/MotionContainer";

const HeroUserAvatars = () => {
  return (
    <div className='flex items-center'>
      {Array.from([1, 2, 3, 4, 5]).map(i => (
        <MotionContainer
          key={i}
          className={cn({ "-ml-3": i })}
          variants={fadeIn("left", "tween", i / 3, 0.5)}
        >
          <Image
            src={`/assets/images/hero-avatars/Avatar (${i}).png`}
            alt='user'
            width={40}
            height={40}
          />
        </MotionContainer>
      ))}
    </div>
  );
};

export default HeroUserAvatars;
