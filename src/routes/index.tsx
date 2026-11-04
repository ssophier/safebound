import { createFileRoute } from "@tanstack/react-router";
import gradient from "@/assets/gradient_safebound.jpg.asset.json";
import hero from "@/assets/safebound_hero_hands.jpg.asset.json";
import { ArrowDown, ArrowRight } from "lucide-react";

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
  return <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary">{children}</p>;
}

function Accent({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-primary">{children}</strong>;
}

function Index() {
  return (
    <div className="min-h-screen font-sans tracking-tight text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero.url}
          alt="Two people laughing and reaching their hands toward each other against a blue sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ink)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <header className="relative z-10 flex items-center justify-between px-6 py-6 text-sm md:px-10">
          <span className="text-base font-medium">SafeBound®</span>
          <nav className="hidden gap-8 md:flex">
            <a href="#problem" className="opacity-85 hover:opacity-100">Problem</a>
            <a href="#approach" className="opacity-85 hover:opacity-100">Approach</a>
            <a href="#reach-out" className="opacity-85 hover:opacity-100">Reach out</a>
          </nav>
          <a href="#contact" className="rounded-full bg-ink-foreground px-5 py-2 font-medium text-ink transition hover:opacity-90">
            Get in touch
          </a>
        </header>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="text-hero-shadow max-w-4xl text-3xl font-medium leading-[1.15] md:text-5xl lg:text-6xl">
            Building a person-controlled continuity layer between behavioural-health care and
            everyday life
          </h1>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-foreground px-7 py-4 font-medium text-ink transition hover:opacity-90">
              Share your experience <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#problem" className="inline-flex items-center justify-center rounded-full border border-ink-foreground/60 px-7 py-4 font-medium backdrop-blur-sm transition hover:bg-ink-foreground/10">
              Learn more
            </a>
          </div>
        </div>
        <a href="#problem" aria-label="Scroll down" className="relative z-10 mx-auto mb-10 flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-ink-foreground/50">
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* Problem */}
      <section id="problem" className="px-6 py-32 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr]">
          <Label>The gap</Label>
          <div className="space-y-10">
            <p className="text-3xl font-normal leading-snug md:text-4xl">
              When someone leaves intensive treatment for an eating disorder or another
              behavioural-health condition, there is usually a sharp drop from structured care into
              messy, unpredictable reality.
            </p>
            <p className="max-w-2xl text-lg font-normal leading-relaxed text-foreground/80">
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
          <p className="mt-8 text-2xl font-normal leading-snug md:text-4xl">
            SafeBound is an early-stage project exploring whether a person-controlled digital
            companion could help fill that gap. We are starting with{" "}
            <Accent>post-discharge eating-disorder recovery</Accent> and looking at how people's own
            patterns, context, and physiological signals might support gentle,{" "}
            <Accent>just-in-time help between appointments</Accent>, without trying to diagnose or
            replace clinical care.
          </p>
        </div>
      </section>

      {/* Reach out */}
      <section id="reach-out" className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-normal md:text-5xl">Reach out to us</h2>
          <div className="mt-16 divide-y divide-foreground/10 border-y border-foreground/10">
            {[
              [
                "Lived experience",
                <>
                  If you have{" "}
                  <Accent>
                    lived experience of leaving specialised eating-disorder care or addiction
                    treatment
                  </Accent>{" "}
                  and are willing to talk about what life between appointments is really like, your
                  perspective would help us see what support feels genuinely helpful and what feels
                  harmful or intrusive.
                </>,
              ],
              [
                "Professionals",
                <>
                  If you work in this world as a{" "}
                  <Accent>
                    clinician, therapist, researcher, discharge coordinator, or on digital health
                    and privacy
                  </Accent>
                  , we'd also like to understand how post-discharge support actually works in your
                  setting, and where a person-controlled layer like SafeBound might fit, or why it
                  shouldn't.
                </>,
              ],
            ].map(([title, body]) => (
              <div key={title} className="grid gap-6 py-12 md:grid-cols-[1fr_2fr]">
                <Label>{title}</Label>
                <p className="text-xl font-normal leading-relaxed">{body}</p>
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
          <p className="text-3xl font-normal leading-snug md:text-5xl">
            If this resonates with your experience, send a short email about who you are and how you
            see this problem.
          </p>
          <p className="mt-8 font-normal text-muted-foreground">
            We'll reply with a few possible times and a simple overview of the interview.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition hover:opacity-90"
          >
            Email us at {EMAIL} <ArrowRight className="h-5 w-5" />
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
