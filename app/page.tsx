import CompaniesThatTrustUs from "@/components/pages/landing/CompaniesThatTrustUs";
import Faqs from "@/components/pages/landing/Faqs";
import Hero from "@/components/pages/landing/Hero";
import Testimonials from "@/components/pages/landing/Testimonials";
import WhyChooseUs from "@/components/pages/landing/WhyChooseUs";

const Home = () => {
  return (
    <main className='pb-20'>
      <Hero />
      <CompaniesThatTrustUs />
      <WhyChooseUs />
      <Testimonials />
      <Faqs />
    </main>
  );
};

export default Home;
