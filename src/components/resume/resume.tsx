import Badges from "@/components/resume/sections/badges";
import Experience from "@/components/resume/sections/experience";
import Education from "@/components/resume/sections/education";
import Languages from "@/components/resume/sections/languages";
import Skills from "@/components/resume/sections/skills";

const Resume: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <section id="skills">
        <div className="divider">Skills</div>
        <Skills />
      </section>
      <section id="experience">
        <div className="divider">Experience</div>
        <Experience />
      </section>
      <section id="education">
        <div className="divider">Education</div>
        <Education />
      </section>
      <section id="languages">
        <div className="divider">Languages</div>
        <Languages />
      </section>
      <section id="digital-badges">
        <div className="divider">Certifications & Training</div>
        <Badges />
      </section>
    </div>
  );
};

export default Resume;
