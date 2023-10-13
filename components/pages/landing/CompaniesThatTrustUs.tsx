import { companiesThatTrustUs } from "@/lib/constants/companiesThatTrustUs";
import { altFromImgUrl } from "@/lib/utils";
import Image from "next/image";

const CompaniesThatTrustUs = () => {
  return (
    <section className='py-24 px-8'>
      <p className='text-gray-600 text-xl font-medium text-center'>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className='flex items-center gap-[69px] mt-12 overflow-x-scroll'>
        {companiesThatTrustUs.map(({ height, src, width }) => (
          <Image
            key={altFromImgUrl(src)}
            alt={altFromImgUrl(src)}
            {...{ src, width: width, height }}
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesThatTrustUs;
