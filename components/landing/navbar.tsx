"use client"

import React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { CTAModal } from "./cta-modal"

const navLinks = [
  { label: "Usteda", href: "#usteda" },
  { label: "Poredjenje", href: "#poredjenje" },
  { label: "Rezultati", href: "#rezultati" },
  { label: "Pitanja", href: "#pitanja" },
  { label: "Kontakt", href: "/kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-dark py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Glavna navigacija"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
            <Sun className="h-6 w-6 text-charcoal" />
          </div>
          <span className="text-xl font-bold text-primary-foreground">
            Lumina Solar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <CTAModal variant="compact" />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                aria-label="Otvori meni"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest border-gold/20 w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-primary-foreground">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold">
                    <Sun className="h-5 w-5 text-charcoal" />
                  </div>
                  Lumina Solar
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4 px-4">
                  <CTAModal variant="medium" pulse className="w-full" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
