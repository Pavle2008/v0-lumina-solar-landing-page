"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "./section-wrapper"
import { Star, BadgeCheck, Shield, Award } from "lucide-react"

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
            {"Uspesne price"}
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {"Rezultati nasih klijenata"}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Saznajte zasto nas klijenti preporucuju svojim prijateljima i komsijama."}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto mt-12 max-w-2xl">
          <Card className="glass-light overflow-hidden border-border/50 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <article>
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/30">
                      <Image
                        src="/images/marcus-thorne.jpg"
                        alt="Markus Torn, projektni menadzer iz Beograda"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Stars */}
                    <div className="mb-3 flex items-center justify-center gap-1 sm:justify-start">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`star-${i}`}
                          className="h-4 w-4 fill-gold text-gold"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-pretty text-base leading-relaxed text-foreground italic">
                      {"\"Kao projektni menadzer, gledao sam ROI. Matematika je bila jednostavna: posedovanje sopstvene energije bilo je 288,000 RSD jeftinije samo u prvoj godini.\""}
                    </blockquote>

                    {/* Attribution */}
                    <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row">
                      <div>
                        <p className="font-semibold text-foreground">
                          {"Markus Torn"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {"Projektni menadzer, Beograd"}
                        </p>
                      </div>
                      <Badge className="border-gold/30 bg-gold/10 text-gold sm:ml-auto">
                        <BadgeCheck className="mr-1 h-3 w-3" />
                        {"Verifikovana instalacija"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </article>
            </CardContent>
          </Card>
        </div>

        {/* Trust Logos */}
        <div className="mx-auto mt-16 max-w-3xl">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {"Sertifikati i clanstva"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="glass-light flex items-center gap-3 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-md">
              <Shield className="h-8 w-8 text-forest" />
              <div>
                <p className="text-sm font-semibold text-foreground">{"Tesla Powerwall"}</p>
                <p className="text-xs text-muted-foreground">{"Sertifikovani partner"}</p>
              </div>
            </div>
            <div className="glass-light flex items-center gap-3 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-md">
              <Award className="h-8 w-8 text-gold" />
              <div>
                <p className="text-sm font-semibold text-foreground">{"A+ Rejting"}</p>
                <p className="text-xs text-muted-foreground">{"Privredna komora"}</p>
              </div>
            </div>
            <div className="glass-light flex items-center gap-3 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-md">
              <BadgeCheck className="h-8 w-8 text-forest" />
              <div>
                <p className="text-sm font-semibold text-foreground">{"SEIA Clan"}</p>
                <p className="text-xs text-muted-foreground">{"Asocijacija za solarnu energiju"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
