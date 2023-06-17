import Image from "next/image";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <body>
        <Hero />
        <Features />
        <Testimonials />
        <FAQs />
        <CTA />
        <Footer />
      </body>
    </main>
  );
}
