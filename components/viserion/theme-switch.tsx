"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by delaying render until mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Or a fallback like a spinner/skeleton
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
