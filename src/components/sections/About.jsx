import AnimateOnScroll from "../AnimateOnScroll";
import SkillsCard from "../SkillsCard";
import SkillsBadge from "../SkillsBadge";

function About() {
  const webDev = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];
  const backend = [
    "Node.js",
    "Express",
    "Supabase",
    "PostgreSQL",
    "SQL Server (T-SQL)",
  ];
  const otherSkills = [
    "C++",
    "C#",
    "Python",
    "Java",
    "Arduino",
    "Logic Circuit Design",
    "Computer System Servicing",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen items-center justify-center py-20"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-5xl overflow-hidden px-6 py-1">
          <h2 className="mb-8 bg-linear-to-r from-blue-800 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/2 p-8 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all">
            <div className="absolute inset-0 -z-1 rounded-2xl bg-linear-to-br from-white/30 to-transparent opacity-30"></div>
            <div className="absolute inset-0 -z-1 rounded-2xl ring-1 ring-white/30"></div>

            <p className="mb-3 text-justify text-gray-300">
              I bridge the gap between hardware and software, with a focus on
              how low-level components integrate into full-scale platforms. With
              a background in Computer Engineering, I apply a systems-thinking
              approach to building clean, scalable, and user-centered web
              applications.
            </p>
            <p className="mb-3 text-justify text-gray-300">
              I am driven by curiosity, continuous learning, and the goal of
              becoming a well-rounded software engineer capable of designing
              reliable and efficient systems.
            </p>
            <div className="grid grid-cols-1 gap-x-3 md:grid-cols-3">
              <SkillsCard title="Web Development">
                {webDev.map((skills, index) => (
                  <SkillsBadge key={index} label={skills} />
                ))}
              </SkillsCard>
              <SkillsCard title="Backend & Database">
                {backend.map((skills, index) => (
                  <SkillsBadge key={index} label={skills} />
                ))}
              </SkillsCard>
              <SkillsCard title="Engineering Fundamentals">
                {otherSkills.map((skills, index) => (
                  <SkillsBadge key={index} label={skills} />
                ))}
              </SkillsCard>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-4 text-xl font-bold"> 🏫 Education </h3>
              <ul className="list-inside list-disc">
                <li className="mb-2">
                  <strong>B.S. in Computer Engineering</strong> - University of
                  Saint Louis Tuguegarao <em>(Aug 2021-Jun 2025)</em>
                </li>
                <li className="mb-2">
                  Relevant Coursework: Data Structures and Algorithm, Software
                  Design, Computer Network and Security
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-4 text-xl font-bold"> 👨‍💻 Work Experience </h3>
              <div className="space-y-2 text-gray-300">
                <h4>
                  <strong>Computer Engineering Internship</strong>
                  <em>(Jun-Aug 2024)</em> at Scan Marine Inc.
                </h4>
                <ul className="list-inside list-disc">
                  <li className="mb-2">
                    Assisted in system testing and troubleshooting of AIS
                    systems and inverters.
                  </li>
                  <li className="mb-2">
                    Helped set up and document NVR/CCTV networks so the systems
                    worked together reliably.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-4 text-xl font-bold">📜 Technical Training</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Coddy Tech Journeys</h4>
                  <ul className="mt-2 list-inside list-disc space-y-2 text-gray-300">
                    <li>JavaScript & TypeScript Mastery</li>
                    <li>Python Development</li>
                    <li>Unix Terminal & CLI Workflow</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  Verified Curriculum
                </span>
                <span className="text-[10px] font-medium text-blue-400 italic">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default About;
