"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sun,
  Send,
  CheckCircle,
  User,
} from "lucide-react"
import { Footer } from "@/components/landing/footer"

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <header className="bg-forest">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
              <Sun className="h-6 w-6 text-charcoal" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">
              Lumina Solar
            </span>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              className="text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {"Nazad na početnu"}
            </Button>
          </Link>
        </div>
      </header>

      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-forest py-16 lg:py-24" aria-label="Kontakt zaglavlje">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold">
              <Phone className="mr-1 h-3 w-3" />
              {"Kontaktirajte nas"}
            </Badge>
            <h1 className="text-balance text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              {"Razgovarajmo o vašoj"}
              <span className="text-gold">{" solarnoj budućnosti"}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/70">
              {"Naš tim stručnjaka je tu da odgovori na sva vaša pitanja i pomogne vam da napravite pravi izbor."}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24" aria-label="Kontakt forma i informacije">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="overflow-hidden rounded-2xl border-border/30 bg-background/40 shadow-xl backdrop-blur-md">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-foreground">
                    {"Pošaljite nam poruku"}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {"Popunite formular i odgovorićemo vam u roku od 24 sata."}
                  </p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="firstName">{"Ime"}</Label>
                          <Input id="firstName" placeholder="Marko" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="lastName">{"Prezime"}</Label>
                          <Input id="lastName" placeholder="Marković" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="contactEmail">{"Email adresa"}</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="marko@email.com"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="contactPhone">{"Telefon"}</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          placeholder="+381 60 123 4567"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="message">{"Poruka"}</Label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Opišite kako vam možemo pomoći..."
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="h-12 bg-gold text-charcoal font-semibold hover:bg-gold/90"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {"Pošaljite poruku"}
                      </Button>
                    </form>
                  ) : (
                    <div className="mt-8 flex flex-col items-center gap-4 py-12">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest">
                        <CheckCircle className="h-8 w-8 text-gold" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {"Poruka je poslata!"}
                      </h3>
                      <p className="text-center text-muted-foreground">
                        {"Hvala vam na interesovanju. Odgovorićemo vam u najkraćem roku."}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                {/* Contact Person Card */}
                <Card className="overflow-hidden rounded-2xl border-border/30 bg-background/40 shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-forest">
                        <User className="h-10 w-10 text-gold" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg font-bold text-foreground">
                          {"Kontakt osoba"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {"Direktor prodaje"}
                        </p>
                        <Badge className="mt-2 border-gold/30 bg-gold/10 text-gold">
                          <User className="mr-1 h-3 w-3" />
                          {"Vaš lični savetnik"}
                        </Badge>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {"Sa preko 10 godina iskustva u solarnoj industriji, naš tim će vam pomoći da pronađete idealno rešenje za vaš dom."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Details */}
                <Card className="overflow-hidden rounded-2xl border-border/30 bg-background/40 shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-foreground">
                      {"Kontakt informacije"}
                    </h3>
                    <Separator className="my-4 bg-border/50" />
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest">
                          <Phone className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {"Telefon"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {"+381 11 123 4567"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest">
                          <Mail className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {"Email"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {"info@luminasolar.rs"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest">
                          <MapPin className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {"Adresa"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {"Bulevar Mihajla Pupina 10"}
                            <br />
                            {"11070 Novi Beograd, Srbija"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest">
                          <Clock className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {"Radno vreme"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {"Pon — Pet: 08:00 — 18:00"}
                            <br />
                            {"Sub: 09:00 — 14:00"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
