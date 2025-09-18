import AnimateOnScroll from "../AnimateOnScroll";

function About() {
  const webDev = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Node.js",
    "Express.js",
  ];
  const otherSkills = [
    "C++",
    "Visual C#",
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
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>
          <div className="rounded-xl border border-white/10 p-8 transition-all hover:translate-y-1">
            <p className="mb-3 text-gray-300">
              A fresh graduate currently learning ReactJS and TailwindCSS by
              applying new skills directly to this portfolio.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl p-6 transition-all hover:translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {webDev.map((skills, key) => (
                    <span
                      key={key}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 transition-all hover:translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skills, key) => (
                    <span
                      key={key}
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
            <div className="rounded-xl border border-white/10 p-6 transition-all hover:translate-y-1">
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
            <div className="rounded-xl border border-white/10 p-6 transition-all hover:translate-y-1">
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
