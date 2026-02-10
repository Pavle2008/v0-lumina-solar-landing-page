"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "./section-wrapper"
import { CTAModal } from "./cta-modal"
import {
  TrendingUp,
  TrendingDown,
  Home,
  Receipt,
  X,
  Check,
  Scale,
} from "lucide-react"

const comparisonData = [
  {
    feature: "Godišnje poskupljenje",
    icon: TrendingUp,
    utility: "5-8% svake godine",
    utilityBad: true,
    lumina: "0% — fiksna cena",
    luminaGood: true,
  },
  {
    feature: "Vlasništvo",
    icon: Home,
    utility: "Iznajmljivanje zauvek",
    utilityBad: true,
    lumina: "Vi posedujete imovinu",
    luminaGood: true,
  },
  {
    feature: "Poreske olakšice",
    icon: Receipt,
    utility: "Nema",
    utilityBad: true,
    lumina: "30% poreski kredit",
    luminaGood: true,
  },
  {
    feature: "Vrednost nekretnine",
    icon: TrendingDown,
    utility: "0 RSD uticaj",
    utilityBad: true,
    lumina: "~4% povećanje vrednosti",
    luminaGood: true,
  },
]

export function ComparisonTable() {
  return (
    <SectionWrapper
      id="poredjenje"
      ariaLabel="Poređenje distributera i Lumina Solar"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold">
            <Scale className="mr-1 h-3 w-3" />
            {"Uporedna analiza"}
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {"Distributer vs. Lumina Solar"}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Pogledajte zašto sve više vlasnika kuća prelazi na solarnu energiju."}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="hidden overflow-hidden rounded-xl border border-border/50 shadow-lg sm:block">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 bg-muted/30 hover:bg-muted/30">
                  <TableHead className="w-1/3 text-foreground font-semibold">
                    {"Karakteristika"}
                  </TableHead>
                  <TableHead className="w-1/3 text-center text-foreground font-semibold">
                    {"Distributer"}
                  </TableHead>
                  <TableHead className="w-1/3 text-center font-semibold text-gold">
                    {"Lumina Solar"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.feature} className="border-border/50 hover:bg-muted/20">
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <row.icon className="h-4 w-4 text-muted-foreground" />
                        {row.feature}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-destructive" />
                        <span className="text-muted-foreground">{row.utility}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-gold" />
                        <span className="font-medium text-foreground">{row.lumina}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-4 sm:hidden">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="glass-light rounded-xl p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <row.icon className="h-4 w-4 text-gold" />
                  <span className="font-semibold text-foreground">{row.feature}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 rounded-lg bg-destructive/5 px-3 py-2">
                    <X className="h-4 w-4 shrink-0 text-destructive" />
                    <span className="text-sm text-muted-foreground">
                      {"Distributer: "}{row.utility}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-gold/5 px-3 py-2">
                    <Check className="h-4 w-4 shrink-0 text-gold" />
                    <span className="text-sm font-medium text-foreground">
                      {"Lumina: "}{row.lumina}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

/* CTA Banner between sections */
export function CTABanner({ variant = "forest" }: { variant?: "forest" | "gold" }) {
  const isForest = variant === "forest"

  return (
    <SectionWrapper
      ariaLabel="Poziv na akciju"
      className={
        isForest
          ? "bg-forest py-12 lg:py-16"
          : "bg-gold py-12 lg:py-16"
      }
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h3
            className={`text-xl font-bold sm:text-2xl ${
              isForest ? "text-primary-foreground" : "text-charcoal"
            }`}
          >
            {"Spremni da prestanete da preplaćujete struju?"}
          </h3>
          <p
            className={`mt-2 ${
              isForest ? "text-primary-foreground/70" : "text-charcoal/70"
            }`}
          >
            {"Besplatna procena za vaš dom — bez ikakvih obaveza."}
          </p>
        </div>
        <CTAModal
          variant="large"
          pulse
          className={
            isForest
              ? ""
              : "bg-forest text-primary-foreground hover:bg-forest/90"
          }
        />
      </div>
    </SectionWrapper>
  )
}
