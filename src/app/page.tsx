import Hero from "@/components/resume/hero";
import Resume from "@/components/resume/resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Resume />
    </main>
  );
}
