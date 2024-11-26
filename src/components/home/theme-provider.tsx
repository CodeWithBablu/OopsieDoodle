"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeToggle } from "./ThemeToggle"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  return (
    <NextThemesProvider {...props}>
      <ThemeToggle />
      {children}
    </NextThemesProvider>
  )
}

// Separate the ThemeToggle component
