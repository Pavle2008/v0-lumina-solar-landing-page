"use client"

import React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  variant?: "large" | "medium" | "compact" | "link"
  className?: string
  pulse?: boolean
}

export function CTAModal({ variant = "medium", className, pulse = false }: CTAButtonProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const buttonSizeClass = {
    large: "h-14 px-10 text-lg font-bold",
    medium: "h-12 px-8 text-base font-semibold",
    compact: "h-10 px-6 text-sm font-semibold",
    link: "h-auto px-0 text-sm font-medium underline-offset-4 hover:underline",
  }

  return (
    <Dialog onOpenChange={() => setSubmitted(false)}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "bg-gold text-charcoal hover:bg-gold/90 rounded-lg",
            buttonSizeClass[variant],
            pulse && "animate-pulse-gold",
            variant === "link" && "bg-transparent text-gold hover:bg-transparent hover:text-gold/80",
            className
          )}
        >
          {variant !== "link" && <Calculator className="mr-2 h-5 w-5" />}
          {"Izracunajte Vasu Ustedu"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Calculator className="h-5 w-5 text-gold" />
            {"Izracunajte Vasu Ustedu"}
          </DialogTitle>
          <DialogDescription>
            {"Unesite vase podatke i kontaktiramo vas u roku od 24 sata sa besplatnom procenom."}
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">{"Ime i prezime"}</Label>
              <Input id="name" placeholder="Marko Markovic" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">{"Telefon"}</Label>
              <Input id="phone" type="tel" placeholder="+381 60 123 4567" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{"Email adresa"}</Label>
              <Input id="email" type="email" placeholder="marko@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="bill">{"Prosecni mesecni racun za struju (RSD)"}</Label>
              <Input id="bill" type="number" placeholder="15,000" />
            </div>
            <Button type="submit" className="bg-gold text-charcoal hover:bg-gold/90 h-12 font-semibold">
              {"Posaljite zahtev"}
            </Button>
            <Badge variant="outline" className="mx-auto text-muted-foreground">
              {"100% besplatno - bez obaveza"}
            </Badge>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest">
              <CheckCircle className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {"Hvala vam!"}
            </h3>
            <p className="text-center text-muted-foreground">
              {"Vas zahtev je primljen. Kontaktiramo vas u roku od 24 sata sa personalizovanom procenom ustede."}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
