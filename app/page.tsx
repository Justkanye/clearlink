import CompaniesThatTrustUs from "@/components/pages/landing/CompaniesThatTrustUs";
import Hero from "@/components/pages/landing/Hero";
import WhyChooseUs from "@/components/pages/landing/WhyChooseUs";

const Home = () => {
  return (
    <main className='pb-20'>
      <Hero />
      <CompaniesThatTrustUs />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
