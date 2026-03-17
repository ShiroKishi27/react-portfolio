import AnimateOnScroll from "../AnimateOnScroll";

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
        <div className="mx-auto max-w-3xl overflow-hidden p-1 px-6">
          <h2 className="mb-8 bg-linear-to-r from-blue-800 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/2 p-8 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:translate-y-1">
            <div className="absolute inset-0 -z-1 rounded-2xl bg-linear-to-br from-white/30 to-transparent opacity-30"></div>
            <div className="absolute inset-0 -z-1 rounded-2xl ring-1 ring-white/30"></div>

            <p className="mb-3 text-justify text-gray-300">
              I have a strong foundation in both hardware and software concepts,
              and I enjoy understanding how systems connect—from low-level
              components to full-scale integrated platforms. I am continuously
              developing my skills in web development and modern technologies,
              with a focus on building clean, scalable, and user-centered
              applications.
            </p>
            <p className="mb-3 text-justify text-gray-300">
              I am driven by curiosity, continuous learning, and the goal of
              becoming a well-rounded software engineer capable of designing
              reliable and efficient systems.
            </p>
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
              <div className="rounded-xl p-6 transition-all hover:translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {webDev.map((skills, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 transition-all hover:translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {backend.map((skills, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-1 justify-self-center rounded-xl p-6 text-center transition-all hover:translate-y-1 md:col-span-2">
                <h3 className="mb-4 text-xl font-bold">
                  Engineering Fundamentals
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {otherSkills.map((skills, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:translate-y-1">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-4 text-xl font-bold"> 🏫 Education </h3>
              <ul className="list-inside list-disc">
                <li className="mb-2">
                  <strong>B.S. in Computer Engineering</strong> - University of
                  Saint Louis Tuguegarao
                </li>
                <li className="mb-2">
                  Relevant Coursework: Data Structures and Algorithm, Software
                  Design, Computer Network and Security
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:translate-y-1">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-4 text-xl font-bold"> 👨‍💻 Work Experience </h3>
              <div className="space-y-2 text-gray-300">
                <h4>
                  Computer Engineering Internship <em>(Jun-Aug 2024)</em> at
                  Scan Marine Inc.
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
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default About;
