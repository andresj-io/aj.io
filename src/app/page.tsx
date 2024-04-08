import Hero from "@/components/resume/hero";
import Resume from "@/components/resume/resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-12">
      <Hero />
      <Resume />
    </main>
  );
}
