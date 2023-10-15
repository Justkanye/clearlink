import CompanyCarousel from "./CompanyCarousel";

const CompaniesThatTrustUs = () => {
  return (
    <section className='py-24 px-8'>
      <p className='text-gray-600 text-xl font-medium text-center mb-12'>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      {/* <div className='mt-12 relative'>
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
      </div> */}
      <CompanyCarousel />
    </section>
  );
};

export default CompaniesThatTrustUs;
