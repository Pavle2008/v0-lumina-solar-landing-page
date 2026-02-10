"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "./section-wrapper"
import { CTAModal } from "./cta-modal"
import { HelpCircle } from "lucide-react"

const faqItems = [
  {
    id: "faq-1",
    question: "Da li će mi krov prokišnjavati?",
    answer:
      "Razumemo vašu zabrinutost. Svaka Lumina Solar instalacija dolazi sa trostrukom garancijom od 25 godina na vodonepropusnost. Naši sertifikovani instalateri koriste posebne nosače i zaptivke industrijskog kvaliteta. U slučaju bilo kakvog problema, naša garancija pokriva kompletnu popravku bez troškova za vas.",
  },
  {
    id: "faq-2",
    question: "Šta ako se preselim?",
    answer:
      "Vaš solarni sistem je 100% prenosiv. Možete ga preneti na novog vlasnika ili ga poneti sa sobom. Studije pokazuju da domovi sa solarnim panelima imaju u proseku 4% veću vrednost na tržištu, tako da solarni sistem zapravo povećava vrednost vaše nekretnine prilikom prodaje.",
  },
  {
    id: "faq-3",
    question: "Kako da platim solarni sistem?",
    answer:
      "Lumina Solar nudi program 'Zamena računa' sa 0 dinara unapred. Umesto da plaćate rastući račun za struju distributeru, plaćate fiksnu mesečnu ratu koja je niža od vašeg trenutnog računa. To znači da počinjete da štedite od prvog dana — bez početnog ulaganja, bez skrivenih troškova.",
  },
]

export function FAQSection() {
  return (
    <SectionWrapper
      id="pitanja"
      ariaLabel="Česta pitanja"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold">
            <HelpCircle className="mr-1 h-3 w-3" />
            {"Česta pitanja"}
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {"Imate pitanja? Imamo odgovore."}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Razrešavamo najčešće nedoumice o solarnoj energiji."}
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-gold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-muted-foreground">
            {"Imate još pitanja? Rado ćemo odgovoriti."}
          </p>
          <CTAModal variant="medium" />
        </div>
      </div>
    </SectionWrapper>
  )
}
