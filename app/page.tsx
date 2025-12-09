import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItStarted from "@/components/HowItStarted";
import Goals from "@/components/Goals";
import TokenBurns from "@/components/TokenBurns";
import Artwork from "@/components/Artwork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItStarted />
      <Goals />
      <TokenBurns />
      <Artwork />
      <Footer />
    </main>
  );
}
