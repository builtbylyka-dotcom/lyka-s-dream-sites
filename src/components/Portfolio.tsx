import { motion } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const projects = [
  { img: p1, title: "Maris & Co.", tag: "Portfolio", desc: "A minimal portfolio for a freelance stylist." },
  { img: p2, title: "Bloom Studio", tag: "Landing Page", desc: "A conversion-focused page for a beauty brand." },
  { img: p3, title: "Editor's Note", tag: "Portfolio", desc: "An editorial portfolio for a creative writer." },
  { img: p4, title: "Café Luma", tag: "Business", desc: "A cozy site for a neighborhood café." },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              ✿ Portfolio
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
              Recent <em className="italic text-primary">little loves</em>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            A peek at recent work — soft, intentional, and entirely handmade.
            Yours could be next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-card ${
                i % 3 === 0 ? "sm:row-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-primary">{p.tag}</p>
                  <h3 className="mt-1 font-display text-xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="mt-1 h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-rose-gradient group-hover:text-white transition-colors">
                  →
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          <span className="font-script text-xl text-primary">psst</span> — these are mockups for
          future projects. Want yours featured here? Let's chat.
        </p>
      </div>
    </section>
  );
}
