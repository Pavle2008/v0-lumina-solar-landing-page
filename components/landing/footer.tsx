"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { CTAModal } from "./cta-modal"
import { Sun, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="w-full bg-forest text-primary-foreground"
      aria-label="Podnožje sajta"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                <Sun className="h-6 w-6 text-charcoal" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Lumina Solar
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              {"Vodeći provajder solarne energije u Srbiji. Pomozite vašem domu da postane energetski nezavisan."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {"Brzi linkovi"}
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Linkovi u podnožju">
              <Link
                href="#usteda"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
              >
                {"Kalkulator uštede"}
              </Link>
              <Link
                href="#poredjenje"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
              >
                {"Poređenje"}
              </Link>
              <Link
                href="#rezultati"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
              >
                {"Rezultati klijenata"}
              </Link>
              <Link
                href="#pitanja"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
              >
                {"Česta pitanja"}
              </Link>
              <Link
                href="/kontakt"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
              >
                {"Kontakt"}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {"Kontakt informacije"}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {"+381 11 123 4567"}
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {"info@luminasolar.rs"}
              </div>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {"Bulevar Mihajla Pupina 10, Beograd, Srbija"}
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {"Besplatna procena"}
            </h3>
            <p className="text-sm text-primary-foreground/60">
              {"Saznajte koliko možete da uštedite sa Lumina Solar sistemom."}
            </p>
            <CTAModal variant="compact" />
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-primary-foreground/40">
            {"© 2026 Lumina Solar d.o.o. Sva prava zadržana."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-gold"
            >
              {"Politika privatnosti"}
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-gold"
            >
              {"Uslovi korišćenja"}
            </Link>
            <span className="text-xs text-primary-foreground/40">
              {"Licenca Srbija #RS-77421"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
