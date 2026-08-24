"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { label: "Biologia", href: "/", color: "text-brand-green" },
  { label: "Matemática", href: "/matematica", color: "text-brand-blue" },
  { label: "Química", href: "/quimica", color: "text-[#7fe3ef]" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-t-4 border-brand-purple">
      <div className="bg-gradient-to-r from-[#3aaa35] via-[#37a94a] to-[#1f9e56]">
        <div className="mx-auto flex max-w-4xl items-stretch gap-4 px-4">
          <div className="flex items-center py-2">
            <p className="font-heading text-xs font-bold uppercase leading-tight text-white sm:text-sm">
              IFA - Itinerário
              <br />
              Formativo de
              <br />
              aprofundamento
            </p>
          </div>

          <nav className="flex items-end gap-1 sm:gap-2" aria-label="Disciplinas">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href

              if (isActive) {
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    aria-current="page"
                    className={`rounded-t-md border-t-4 border-brand-purple bg-background px-4 py-3 font-heading text-sm font-bold ${tab.color} sm:text-base`}
                  >
                    {tab.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-3 py-3 font-heading text-sm font-bold text-white/90 transition-opacity hover:opacity-80 sm:text-base`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
