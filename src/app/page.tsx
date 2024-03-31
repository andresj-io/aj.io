import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="flex w-full flex-col">
        <div className="divider">Experience</div>
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
