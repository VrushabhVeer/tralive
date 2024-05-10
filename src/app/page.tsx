import About from "@/components/home/About";
import { Events } from "@/components/home/Events";
import { Gallary } from "@/components/home/Gallary";
import { Hero } from "@/components/home/Hero";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Events />
      <About />
      <Service />
      <Gallary />
    </main>
  );
}
