import About from "@/components/home/About";
import Events from "@/components/home/Events";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Events />
      <About />
      <Service />
    </main>
  );
}
