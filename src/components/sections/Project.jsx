import AnimateOnScroll from "../AnimateOnScroll";

function Project() {
  return (
    <section
      id="project"
      className="relative flex min-h-screen items-center justify-center py-20"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 bg-linear-to-r from-blue-800 to-cyan-300 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Project
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-2 text-xl">
                <strong>Classic Sudoku App</strong>
              </h3>
              <p className="mb-2 text-gray-400">
                A modern, interactive Sudoku web application built with React
                that allows users to play dynamically generated puzzles fetched
                from an external API.
              </p>
              <div className="flex flex-wrap gap-1">
                {["React JS", "Vite", "Tailwind CSS", "Lucide-React"].map(
                  (items, key) => (
                    <span
                      key={key}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {items}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-2 text-xl">
                <strong>HydroGuard:</strong> Flood Management Suite (Frontend)
              </h3>
              <p className="mb-2 text-gray-400">
                A flood management system with real-time sensor data, flood
                prediction, and rerouting.
              </p>
              <div className="flex flex-wrap gap-1">
                {["HTML", "CSS", "JavaScript", "Node.js", "Express.js"].map(
                  (items, key) => (
                    <span
                      key={key}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {items}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-2 text-xl">
                <strong>Café Business Web App</strong> (Frontend)
              </h3>
              <p className="mb-2 text-gray-400">
                An ordering system where users can browse and order the products
                online.
              </p>
              <div className="flex flex-wrap gap-1">
                {["HTML", "CSS", "Bootstrap", "JavaScript"].map(
                  (items, key) => (
                    <span
                      key={key}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {items}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-2 text-xl">
                <strong>AMOSYS:</strong> Attendance Monitoring System using RFID
              </h3>
              <p className="mb-2 text-gray-400">
                A real-time attendance monitoring that uses RFID technology
                which improves accuracy and accountability.
              </p>
              <div className="flex flex-wrap gap-1">
                {["C# / C++", ".NET ", "Arduino", "RFID", "MS SQL"].map(
                  (items, key) => (
                    <span
                      key={key}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {items}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm after:absolute after:top-6 after:right-0 after:rounded-l-full after:border after:border-yellow-500/20 after:bg-yellow-500/10 after:px-2 after:py-0.5 after:text-[10px] after:font-medium after:tracking-wide after:text-yellow-400 after:content-['WIP'] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:after:bg-yellow-500/20">
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-white/30"></div>

              <h3 className="mb-2 text-xl">
                <strong>Voltix:</strong> Tech Gadget Store
              </h3>
              <p className="mb-2 text-gray-400">
                A full-stack e-commerce platform for tech gadgets built with
                Next.js and Supabase.
              </p>

              <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-gray-400">
                <li>Authentication and role-based access</li>
                <li>Product and admin management</li>
                <li>Shopping cart system</li>
              </ul>

              <p className="mb-3 text-xs text-gray-500">
                In progress: checkout flow, order processing, performance
                optimization
              </p>
              <div className="flex flex-wrap gap-1">
                {[
                  "Next.js",
                  "Supabase (Auth, PostgreSQL)",
                  "Tailwind CSS",
                  "TypeScript",
                  "ShadCN UI",
                ].map((items, key) => (
                  <span
                    key={key}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                  >
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Project;
