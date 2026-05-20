import Image from "next/image";

type Member = {
  name: string;
  realName: string;
  role: string;
  tags: string[];
  desc: string;
  photo: string | null;
  initial: string;
};

const team: Member[] = [
  {
    name: "Max",
    realName: "Mintae Kim",
    role: "Builder",
    tags: ["Unity / C#", "AI Asset Pipeline", "Card & Enemy Balance", "Web", "DevOps"],
    desc: "Shipping Last Ember end-to-end — Unity 6 client, turn-based combat core, the Gemini / GPT Image / KLING asset pipeline, this landing site, and every balance pass in between.",
    photo: null,
    initial: "M",
  },
  {
    name: "Jay",
    realName: "YeongJae Kim",
    role: "Designer & Planner",
    tags: ["Game Design", "Card Balance", "Encounter Design", "UX / UI", "Art Direction"],
    desc: "Shapes Last Ember's run economy and combat feel — card pacing, dinosaur kits, fusion sigils, and the visual direction that holds every encounter together.",
    photo: null,
    initial: "J",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Team
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            DashDeploy <span className="text-orange-400">Studios</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            A small indie team working at the intersection of gaming and AI.
          </p>
        </div>

        {/* Builder cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.06] to-transparent p-7 sm:p-8 shadow-[0_0_40px_rgba(234,88,12,0.08)]"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start h-full">
                {/* Portrait or initial badge */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden ring-2 ring-orange-500/40 shadow-[0_0_30px_rgba(234,88,12,0.25)]">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-700/40 via-amber-800/30 to-[#1a140e] text-4xl font-black text-orange-200/90 select-none">
                      {m.initial}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-x-3 gap-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{m.name}</h3>
                    <span className="text-zinc-400 text-sm">/ {m.realName}</span>
                  </div>
                  <p className="mt-1 text-orange-400 font-semibold uppercase tracking-wider text-xs">
                    {m.role}
                  </p>

                  <p className="mt-4 text-zinc-300 leading-relaxed text-sm">
                    {m.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full border border-orange-500/20 bg-orange-500/[0.06] text-[11px] text-orange-200/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
