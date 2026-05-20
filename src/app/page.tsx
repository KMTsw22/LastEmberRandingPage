import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Roadmap from "@/components/Roadmap";
import Wishlist from "@/components/Wishlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
        <Roadmap />
        <Wishlist />
      </main>
      <Footer />
    </>
  );
}
