import Hero from "@/components/Hero";
import Mandates from "@/components/Mandates";
import Archive from "@/components/Archive";
import ContinuityBridge from "@/components/ContinuityBridge";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/FilmGrain";

export default function Home() {
  return (
    <main>
      <FilmGrain />
      <Hero />
      <Mandates />
      <Archive />
      <ContinuityBridge />
      <Footer />
    </main>
  );
}
