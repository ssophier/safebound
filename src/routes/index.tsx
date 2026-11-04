import { createFileRoute } from "@tanstack/react-router";
import gradient from "@/assets/gradient_safebound.jpg.asset.json";
import hero from "@/assets/hero_walk.jpg";

const EMAIL = "hello@safebound.org";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafeBound — Continuity between care and everyday life" },
      {
        name: "description",
        content:
          "SafeBound is an early-stage project building a person-controlled continuity layer between behavioural-health care and everyday life.",
      },
      { property: "og:title", content: "SafeBound — Continuity between care and everyday life" },
      {
        property: "og:description",
        content:
          "Exploring person-controlled, just-in-time support after discharge from eating-disorder and addiction treatment.",
      },
    ],
  }),
  component: Index,
});

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen font-sans tracking-tight text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="A person walking along a quiet street at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-background" />
        <header className="relative z-10 flex items-center justify-between px-6 py-6 text-sm md:px-10">
          <span className="font-medium">SafeBound®</span>
          <nav className="hidden gap-6 md:flex">
            <a href="#problem" className="opacity-80 hover:opacity-100">Problem</a>
            <a href="#approach" className="opacity-80 hover:opacity-100">Approach</a>
            <a href="#reach-out" className="opacity-80 hover:opacity-100">Reach out</a>
          </nav>
          <a href="#contact" className="opacity-80 hover:opacity-100">Get in touch</a>
        </header>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-light leading-[1.1] md:text-6xl">
            Building a person-controlled continuity layer between behavioural-health care and
            everyday life
          </h1>
        </div>
        <p className="relative z-10 pb-8 text-center text-sm text-foreground/70">(scroll down)</p>
      </section>

      {/* Problem */}
      <section id="problem" className="px-6 py-32 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr]">
          <Label>The gap</Label>
          <div className="space-y-10">
            <p className="text-3xl font-light leading-snug md:text-4xl">
              When someone leaves intensive treatment for an eating disorder or another
              behavioural-health condition, there is usually a sharp drop from structured care into
              messy, unpredictable reality.
            </p>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              In that period, people can feel very alone with urges, worries, and coping plans that
              are hard to use when life is happening in real time. Care teams, meanwhile, only see
              short appointments and have to piece together what happened after the fact.
            </p>
          </div>
        </div>
      </section>

      {/* Approach — flows into the gradient */}
      <section
        id="approach"
        className="relative bg-cover bg-center px-6 py-40 md:px-10"
        style={{ backgroundImage: `url(${gradient.url})` }}
      >
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Label>What we're exploring</Label>
          <p className="mt-8 text-2xl font-light leading-snug md:text-4xl">
            SafeBound is an early-stage project exploring whether a person-controlled digital
            companion could help fill that gap. We are starting with post-discharge eating-disorder
            recovery and looking at how people's own patterns, context, and optional physiological
            signals might support gentle, just-in-time help between appointments, without trying to
            diagnose or replace clinical care.
          </p>
        </div>
      </section>

      {/* Reach out */}
      <section id="reach-out" className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-light md:text-5xl">Reach out to us</h2>
          <div className="mt-16 divide-y divide-foreground/10 border-y border-foreground/10">
            {[
              [
                "Lived experience",
                "If you have lived experience of leaving specialised eating-disorder care or addiction treatment and are willing to talk about what life between appointments is really like, your perspective would help us see what support feels genuinely helpful and what feels harmful or intrusive.",
              ],
              [
                "Professionals",
                "If you work in this world as a clinician, therapist, researcher, discharge coordinator, or on digital health and privacy, we'd also like to understand how post-discharge support actually works in your setting, and where a person-controlled layer like SafeBound might fit, or why it shouldn't.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="grid gap-6 py-12 md:grid-cols-[1fr_2fr]">
                <Label>{title}</Label>
                <p className="text-xl font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative bg-cover bg-bottom px-6 pb-16 pt-40 text-center md:px-10"
        style={{ backgroundImage: `url(${gradient.url})` }}
      >
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-3xl font-light leading-snug md:text-5xl">
            If this resonates with your experience, send a short email about who you are and how you
            see this problem.
          </p>
          <p className="mt-8 font-light text-muted-foreground">
            We'll reply with a few possible times and a simple overview of the interview.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-12 inline-block border-b border-foreground pb-1 text-xl transition hover:opacity-60"
          >
            {EMAIL} →
          </a>
        </div>
        <footer className="relative mx-auto mt-40 flex max-w-6xl justify-between text-sm text-muted-foreground">
          <span>SafeBound®</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </div>
  );
}
