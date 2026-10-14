import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandTeaser } from "@/components/home/BrandTeaser";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <CategoryTiles />
      <FeaturedProducts />
      <BrandTeaser />
      <CtaSection />
    </>
  );
}
