"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  ariaLabel?: string
  delay?: number
}

export function SectionWrapper({
  children,
  className,
  id,
  ariaLabel,
  delay = 0,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out",
        isVisible && "animate-fade-in-up opacity-100",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
