import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Roofing and construction hero image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Quality Roofing & Construction Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional roofing and construction solutions for residential
              and commercial properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
