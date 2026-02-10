"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "./section-wrapper"
import { Star, Battery, ShieldCheck, Award, BadgeCheck } from "lucide-react"

const testimonials = [
  {
    name: "Elena R.",
    title: "Tehnološki entuzijasta",
    location: "San Antonio, TX",
    metric: "100% nezavisnost od mreže",
    quote:
      "Kao udaljeni softverski inženjer, ne mogu da priuštim zastoje. Moj Lumina sistem sa Powerwall-om održava moju kućnu kancelariju u funkciji čak i kada lokalna mreža zakaže. Integracija podataka je besprekorna.",
    badgeText: "Baterijski backup verifikovan",
    BadgeIcon: Battery,
  },
  {
    name: "David H.",
    title: "Onaj koji planira budućnost",
    location: "Plano, TX",
    metric: "0 RSD inflacija energije",
    quote:
      "Pošto sam na fiksnoj penziji, bila mi je potrebna predvidljivost. Moj mesečni račun je sada fiksnih 1.400 RSD naknade za priključak, i nikada više ne brinem o letnjim povećanjima cena. Garancija od 25 godina mi je dala potpuni mir.",
    badgeText: "Garancija 25 godina",
    BadgeIcon: ShieldCheck,
  },
]

export function SocialProof() {
  return (
    <SectionWrapper
      id="rezultati"
      ariaLabel="Iskustva klijenata i sertifikati"
      className="bg-muted/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold">
            <Star className="mr-1 h-3 w-3" />
            {"Uspešne priče"}
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {"Rezultati naših klijenata"}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Saznajte zašto naši klijenti preporučuju Lumina Solar svojim prijateljima i komšijama."}
          </p>
        </div>

        {/* Testimonial Cards — side-by-side on desktop, stacked on mobile */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border-border/30 bg-background/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-gold/30"
            >
              <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
                <article>
                  {/* Headline Metric */}
                  <p className="text-2xl font-bold text-gold">{t.metric}</p>

                  {/* Stars */}
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`star-${t.name}-${i}`}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground/90 italic">
                    {`"${t.quote}"`}
                  </blockquote>

                  {/* Attribution */}
                  <div className="mt-5 flex flex-col gap-1">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.title} — {t.location}
                    </p>
                  </div>

                  {/* Badge */}
                  <Badge className="mt-4 border-gold/30 bg-gold/10 text-gold">
                    <t.BadgeIcon className="mr-1.5 h-3.5 w-3.5" />
                    {t.badgeText}
                  </Badge>

                  {/* View Case Study Link */}
                  <div className="mt-5 border-t border-border/30 pt-4">
                    <Link
                      href="#"
                      className="text-sm font-semibold text-gold transition-colors hover:text-gold/80"
                    >
                      {"Pogledajte studiju slučaja →"}
                    </Link>
                  </div>
                </article>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="mx-auto mt-16 max-w-3xl">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {"Sertifikati i članstva"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/40 px-6 py-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md">
              <ShieldCheck className="h-8 w-8 text-forest" />
              <div>
                <p className="text-sm font-semibold text-foreground">{"Tesla Powerwall"}</p>
                <p className="text-xs text-muted-foreground">{"Sertifikovani partner"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/40 px-6 py-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md">
              <Award className="h-8 w-8 text-gold" />
              <div>
                <p className="text-sm font-semibold text-foreground">{"A+ Rejting"}</p>
                <p className="text-xs text-muted-foreground">{"Privredna komora"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/40 px-6 py-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md">
              <BadgeCheck className="h-8 w-8 text-forest" />
              <div>
                <p className="text-sm font-semibold text-foreground">{"SEIA Član"}</p>
                <p className="text-xs text-muted-foreground">{"Asocijacija za solarnu energiju"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
