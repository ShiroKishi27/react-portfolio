import AnimateOnScroll from "../AnimateOnScroll";
import SkillsBadge from "../SkillsBadge";

function Project() {
  return (
    <section
      id="project"
      className="relative flex min-h-screen items-center justify-center py-20"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-5xl px-6 py-1">
          <h2 className="mb-8 bg-linear-to-r from-blue-800 to-cyan-300 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Project
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/30">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>
              <h3 className="mb-2 text-xl font-bold">Classic Sudoku App</h3>

              <p className="mb-4 text-gray-400">
                A full-featured game engine with <strong>Pencil Mode</strong>,
                <strong> Keyboard Support</strong>, and a dynamic{" "}
                <strong>Mistake System</strong>. Synchronizes real-time inputs
                with an external Sudoku API.
              </p>
              <div className="mb-11 flex flex-wrap gap-2">
                {["React 19", "Tailwind CSS", "REST API", "Lucide"].map(
                  (item, key) => (
                    <SkillsBadge key={key} label={item} />
                  ),
                )}
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    Full-Stack Logic
                  </span>
                  <span className="text-xs font-medium text-blue-400">
                    REST API & Validation Logic
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="mb-1 text-[10px] font-bold text-blue-500/80 uppercase">
                    Build Status
                  </span>
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/30">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>
              <h3 className="mb-2 text-xl font-bold">
                HydroGuard: Flood Management Suite
              </h3>

              <p className="mb-4 text-gray-400">
                A modular dashboard architecture designed for disaster
                management. Engineered a
                <strong> high-fidelity UI shell </strong>
                designed to synchronize with
                <strong> hardware sensor nodes</strong> for real-time flood
                prediction and emergency data visualization.
              </p>
              <div className="mb-6 flex flex-wrap gap-1">
                {["HTML5", "CSS3", "JavaScript", "Node.js", "Express"].map(
                  (item, key) => (
                    <SkillsBadge key={key} label={item} />
                  ),
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    IoT Infrastructure
                  </span>
                  <span className="text-sm font-medium text-blue-400">
                    Hardware-Software Bridge
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="mb-1 text-[10px] font-bold text-blue-500/80 uppercase">
                    System Design
                  </span>
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/30">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>
              <h3 className="mb-2 text-xl font-bold">Café Business Web App</h3>

              <p className="mb-4 text-gray-400">
                Led the frontend refactor of a customer-facing ordering system.
                Improved <strong>UI responsiveness</strong> and reorganized the
                <strong> directory architecture</strong> for better developer
                scalability.
              </p>
              <div className="mb-6 flex flex-wrap gap-1">
                {["HTML5", "CSS3", "Bootstrap", "JS (ES6+)"].map(
                  (item, key) => (
                    <SkillsBadge key={key} label={item} />
                  ),
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    Project Refactoring
                  </span>
                  <span className="text-sm font-medium text-blue-400">
                    Modular File Structure
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="mb-1 text-[10px] font-bold text-blue-500/80 uppercase">
                    Optimization
                  </span>
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/30">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>
              <h3 className="mb-2 text-xl font-bold">
                AMOSYS: RFID Attendance
              </h3>

              <p className="mb-4 text-gray-400">
                A real-time monitoring system bridging
                <strong> Arduino hardware</strong> with a
                <strong> .NET desktop application</strong>. Features automated
                logging via RFID tags and a robust
                <strong> Local SQL Database</strong> for secure data
                persistence.
              </p>
              <div className="mb-6 flex flex-wrap gap-1">
                {["C# / C++", ".NET", "Arduino", "Local SQL DB"].map(
                  (item, key) => (
                    <SkillsBadge key={key} label={item} />
                  ),
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    Embedded Systems
                  </span>
                  <span className="text-sm font-medium text-blue-400">
                    Serial Communication & Local DB
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="mb-1 text-[10px] font-bold text-blue-500/80 uppercase">
                    System Design
                  </span>
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/30">
              <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>
              <h3 className="mb-2 text-xl font-bold">
                Voltix: Tech Gadget Store
              </h3>

              <p className="mb-4 leading-relaxed text-gray-400">
                A full-stack e-commerce platform featuring secure user
                authentication, real-time inventory tracking, and a
                high-performance product catalog.
              </p>
              <div className="mb-6 flex flex-wrap gap-1">
                {["Next.js", "Supabase", "PostgreSQL", "TypeScript"].map(
                  (item, key) => (
                    <SkillsBadge key={key} label={item} />
                  ),
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    Internal Systems
                  </span>
                  <span className="text-sm font-medium text-blue-400">
                    Admin Panel & CRUD Logic
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="mb-1 text-[10px] font-medium text-yellow-500 italic">
                    70% Complete
                  </span>
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[70%] bg-yellow-500/40 shadow-[0_0_8px_rgba(234,179,8,0.3)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Project;
