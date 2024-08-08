import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Testmonials from "@/components/Testmonials";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />
      <Testmonials />
      <Reviews />
    </div>
  );
}
