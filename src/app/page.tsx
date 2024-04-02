import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Badges from "@/components/badges";
import Experience from "@/components/experience";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="flex w-full flex-col">
        <section id="experience">
          <div className="divider">Experience</div>
          <Experience />
        </section>
        <section id="education">
          <div className="divider">Education</div>
          <Education />
        </section>
        <section id="digital-badges">
          <div className="divider">Digital Badges</div>
          <Badges />
        </section>
      </div>
      <Footer />
    </main>
  );
}
