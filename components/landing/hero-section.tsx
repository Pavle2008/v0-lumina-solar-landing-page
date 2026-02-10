"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CTAModal } from "./cta-modal"
import { SectionWrapper } from "./section-wrapper"
import { Shield, Zap, Award } from "lucide-react"

export function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      ariaLabel="Уводни део"
      className="relative min-h-screen bg-forest overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Moderna кућа sa solarnim panelima okružena zelenilom"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-32 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-40 lg:pb-28">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <Badge className="mb-6 border-gold/30 bg-gold/10 text-gold">
            <Zap className="mr-1 h-3 w-3" />
            {"25 година гаранције"}
          </Badge>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {"Prestanite da"}
            <br />
            <span className="text-gold">{"Iznajmljujete"}</span>
            <br />
            {"Energiju."}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/70 md:text-lg lg:text-xl">
            {"Cene struje u Srbiji rastu svake godine. Pridružite se vlasnicima kuća koji su zamenili mesečni račun od 15.000 RSD za fiksnu ratu od samo 600 RSD."}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <CTAModal variant="large" pulse />
            <p className="text-sm text-primary-foreground/50">
              {"Besplatna procena — bez obaveza"}
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Shield className="h-4 w-4 text-gold" />
              {"0 RSD unapred"}
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Award className="h-4 w-4 text-gold" />
              {"Sertifikovani instalateri"}
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Zap className="h-4 w-4 text-gold" />
              {"Fiksna cena zauvek"}
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="glass-light overflow-hidden rounded-2xl p-2 shadow-2xl">
              <Image
                src="/images/solar-panel-roof.jpg"
                alt="Solarni paneli na krovu moderne kuće"
                width={800}
                height={600}
                className="rounded-xl object-cover"
                priority
              />
            </div>
            {/* Floating stats card */}
            <div className="glass-dark absolute -bottom-4 -left-4 rounded-xl p-4 shadow-lg sm:-bottom-6 sm:-left-6">
              <p className="text-xs font-medium text-primary-foreground/60">
                {"Prosečna godišnja ušteda"}
              </p>
              <p className="text-2xl font-bold text-gold">
                {"180.000 RSD"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
