import MotionContainer from "@/components/layout/framer-motion/MotionContainer";
import Accordion from "@/components/shared/Accordion";
import { faqs } from "@/lib/constants/faq";
import { fadeIn } from "@/lib/helpers/motion";

const Faqs = () => {
  return (
    <section id='faqs' className='py-24 grid grid-cols-1 md:grid-cols-5 gap-5'>
      <div className='md:col-span-2'>
        <h6 className='text-blue-700 text-lg font-semibold'>Support</h6>
        <h3 className='text-gray-800 text-5xl font-semibold -tracking-[0.96px] mt-3 mb-5'>
          FAQs
        </h3>
        <p className='text-gray-500 text-2xl'>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for?{" "}
          <span className='underline cursor-pointer'>
            Please chat to our friendly team
          </span>
          .
        </p>
      </div>

      <div className='md:col-span-3'>
        {faqs.map(({ answer, question }, i) => (
          <MotionContainer
            key={question}
            variants={fadeIn("left", "tween", i / 5 || 0.2, 0.5)}
          >
            <Accordion
              title={
                <h3 className='font-semibold text-gray-900 text-xl text-left'>
                  {question}
                </h3>
              }
              content={<p className='text-gray-600 text-lg'>{answer}</p>}
              divider={i !== faqs.length - 1}
            />
          </MotionContainer>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
