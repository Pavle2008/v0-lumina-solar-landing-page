"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { CTAModal } from "./cta-modal"
import { SectionWrapper } from "./section-wrapper"
import { Calculator, TrendingUp, Banknote, Leaf } from "lucide-react"

export function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState([15000])

  const bill = monthlyBill[0]
  const annualSavings = Math.round(bill * 12 * 0.75)
  const twentyFiveYearSavings = Math.round(bill * 12 * 25 * 0.75)
  const yearOneSavings = Math.round(bill * 12 * 0.75)

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("sr-RS").format(num)
  }

  return (
    <SectionWrapper
      id="usteda"
      ariaLabel="Kalkulator uštede"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold">
            <Calculator className="mr-1 h-3 w-3" />
            {"Interaktivni kalkulator"}
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {"Koliko možete da uštedite?"}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Pomerite klizač da vidite koliko vam solarna energija može uštedeti tokom 25 godina."}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="glass-light border-border/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Banknote className="h-5 w-5 text-gold" />
                {"Vaš prosečni mesečni račun za struju"}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              {/* Slider */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{"5.000 RSD"}</span>
                  <span className="text-2xl font-bold text-foreground transition-all duration-300">
                    {formatNumber(bill)} {"RSD"}
                  </span>
                  <span className="text-sm text-muted-foreground">{"50.000 RSD"}</span>
                </div>
                <Slider
                  value={monthlyBill}
                  onValueChange={setMonthlyBill}
                  min={5000}
                  max={50000}
                  step={500}
                  className="py-2"
                />
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="glass rounded-xl p-4 text-center">
                  <TrendingUp className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {"Ušteda u prvoj godini"}
                  </p>
                  <p className="mt-1 text-xl font-bold text-foreground">
                    {formatNumber(yearOneSavings)} {"RSD"}
                  </p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Banknote className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {"Godišnja ušteda"}
                  </p>
                  <p className="mt-1 text-xl font-bold text-foreground">
                    {formatNumber(annualSavings)} {"RSD"}
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-forest p-4 text-center">
                  <Leaf className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-sm font-medium text-primary-foreground/70">
                    {"Ušteda za 25 godina"}
                  </p>
                  <p className="mt-1 text-xl font-bold text-gold">
                    {formatNumber(twentyFiveYearSavings)} {"RSD"}
                  </p>
                  <Badge className="mt-2 border-gold/30 bg-gold/20 text-gold">
                    {"Bez unapred plaćanja"}
                  </Badge>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-3 pt-4">
                <CTAModal variant="medium" pulse />
                <p className="text-xs text-muted-foreground">
                  {"*Proračun se zasniva na prosečnim cenama električne energije u Srbiji"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}
