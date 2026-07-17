import Hero from "@/components/home/Hero.tsx";
import CompanyIntro from "@/components/home/CompanyIntro.tsx";
import FeaturedProducts from "@/components/home/FeaturedProducts.tsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
