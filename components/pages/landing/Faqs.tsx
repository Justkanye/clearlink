import Accordion from "@/components/shared/Accordion";
import { faqs } from "@/lib/constants/faq";

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
          <span className='underline'>Please chat to our friendly team</span>.
        </p>
      </div>

      <div className='md:col-span-3'>
        {faqs.map(({ answer, question }, i) => (
          <Accordion
            key={question}
            title={
              <h3 className='font-semibold text-gray-900 text-xl text-left'>
                {question}
              </h3>
            }
            content={<p className='text-gray-600 text-lg'>{answer}</p>}
            divider={i !== faqs.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
