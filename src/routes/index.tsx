import { createFileRoute } from "@tanstack/react-router";
import gradient from "@/assets/gradient_safebound.jpg.asset.json";

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

function Index() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      <section
        className="relative flex min-h-screen flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${gradient.url})` }}
      >
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <span className="font-display text-2xl">SafeBound</span>
          <a
            href="#reach-out"
            className="rounded-full border border-foreground/20 bg-background/40 px-5 py-2 text-sm backdrop-blur transition hover:bg-background/70"
          >
            Talk with us
          </a>
        </header>
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-24">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Early-stage · Behavioural health
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Building a person-controlled <em className="text-primary">continuity layer</em> between
            behavioural-health care and everyday life
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-4xl leading-tight">The drop after discharge</h2>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p className="font-display text-3xl leading-snug">
            When someone leaves intensive treatment for an eating disorder or another
            behavioural-health condition, there is usually a sharp drop from structured care into
            messy, unpredictable reality.
          </p>
          <p className="text-muted-foreground">
            In that period, people can feel very alone with urges, worries, and coping plans that
            are hard to use when life is happening in real time. Care teams, meanwhile, only see
            short appointments and have to piece together what happened after the fact.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-sky/30 via-background to-sun/50 px-8 py-20 md:px-16">
          <h2 className="mb-8 font-display text-4xl">What we're exploring</h2>
          <p className="max-w-3xl text-xl font-light leading-relaxed">
            SafeBound is an early-stage project exploring whether a person-controlled digital
            companion could help fill that gap. We are starting with post-discharge eating-disorder
            recovery and looking at how people's own patterns, context, and optional physiological
            signals might support gentle, just-in-time help between appointments, without trying to
            diagnose or replace clinical care.
          </p>
        </div>
      </section>

      <section id="reach-out" className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="mb-12 font-display text-5xl">Reach out to us</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-card p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Lived experience</p>
            <p className="font-light leading-relaxed">
              If you have lived experience of leaving specialised eating-disorder care or addiction
              treatment and are willing to talk about what life between appointments is really
              like, your perspective would help us see what support feels genuinely helpful and
              what feels harmful or intrusive.
            </p>
          </div>
          <div className="rounded-3xl border bg-card p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Professionals</p>
            <p className="font-light leading-relaxed">
              If you work in this world as a clinician, therapist, researcher, discharge
              coordinator, or on digital health and privacy, we'd also like to understand how
              post-discharge support actually works in your setting, and where a person-controlled
              layer like SafeBound might fit, or why it shouldn't.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-bottom px-6 py-28 text-center"
        style={{ backgroundImage: `url(${gradient.url})` }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-4xl leading-tight md:text-5xl">
            If this resonates with your experience, send a short email about who you are and how you
            see this problem.
          </p>
          <p className="mt-6 text-muted-foreground">
            We'll reply with a few possible times and a simple overview of the interview.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground transition hover:opacity-90"
          >
            {EMAIL}
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl justify-between px-6 py-10 text-sm text-muted-foreground">
        <span className="font-display text-lg text-foreground">SafeBound</span>
        <span>© {new Date().getFullYear()} SafeBound</span>
      </footer>
    </div>
  );
}
