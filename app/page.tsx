import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div id="top" className="sr-only">
        Top of page
      </div>
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
