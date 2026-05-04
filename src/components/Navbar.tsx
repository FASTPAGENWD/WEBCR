"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_TOGGLE_ID = "nav-mobile-toggle";

const NAV_LINKS = [
  { label: "Diensten", href: "/#services" },
  { label: "Werkwijze", href: "/#process" },
  { label: "Contact", href: "/#contact" },
] as const;

function scrollTo(href: string) {
  if (!href.startsWith("/#")) return;
  const id = href.slice(2);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeMobileNav() {
  const el = document.getElementById(NAV_TOGGLE_ID) as HTMLInputElement | null;
  if (el) el.checked = false;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-[max(1rem,env(safe-area-inset-top))]">
      <div className="nav-shell-fade relative w-full max-w-5xl">
        <input
          type="checkbox"
          id={NAV_TOGGLE_ID}
          className="peer sr-only md:hidden"
          tabIndex={-1}
        />

        <div
          id="mobile-nav-panel"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background/95 opacity-0 backdrop-blur-xl pointer-events-none transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 md:hidden"
          style={{ paddingTop: "max(5rem, env(safe-area-inset-top))" }}
          role="dialog"
          aria-modal="true"
          aria-label="Hoofdmenu"
        >
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-3xl font-light text-foreground transition-opacity duration-300 active:opacity-70"
                onClick={(e) => {
                  closeMobileNav();
                  if (pathname !== "/") return;
                  e.preventDefault();
                  requestAnimationFrame(() => scrollTo(href));
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-4 inline-flex rounded-full px-8 py-3 text-lg font-medium text-white transition-transform duration-300 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              }}
              onClick={(e) => {
                closeMobileNav();
                if (pathname !== "/") return;
                e.preventDefault();
                requestAnimationFrame(() => scrollTo("/#contact"));
              }}
            >
              Start Project
            </Link>
          </nav>
        </div>

        <nav className="relative z-[100] flex w-full min-h-[3.25rem] items-center justify-between rounded-2xl px-5 py-3 pr-[3.25rem] shadow-lg shadow-black/5 glass md:px-6 md:pr-6">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex min-w-0 items-baseline gap-0.5 select-none"
          >
            <span className="text-lg font-bold tracking-tight text-foreground">R.C</span>
            <span
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              }}
            />
            <span className="ml-1.5 truncate text-sm font-light text-muted-foreground">
              Web Creations
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => {
                    if (pathname !== "/") return;
                    e.preventDefault();
                    scrollTo(href);
                  }}
                  className="text-sm text-muted-foreground opacity-70 transition-opacity duration-300 hover:text-foreground hover:opacity-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            onClick={(e) => {
              if (pathname !== "/") return;
              e.preventDefault();
              scrollTo("/#contact");
            }}
            className="hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            }}
          >
            Start Project
          </Link>
        </nav>

        <label
          htmlFor={NAV_TOGGLE_ID}
          className="absolute right-1 top-1/2 z-[105] flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center md:hidden touch-manipulation [-webkit-tap-highlight-color:transparent]"
          aria-label="Menu openen of sluiten"
        >
          <span className="flex w-5 flex-col items-end justify-center gap-[5px]">
            <span className="nav-hb-1 block h-[2px] w-5 rounded-full bg-foreground origin-center transition-transform duration-300" />
            <span className="nav-hb-2 block h-[2px] w-3.5 rounded-full bg-foreground transition-all duration-300" />
            <span className="nav-hb-3 block h-[2px] w-5 rounded-full bg-foreground origin-center transition-transform duration-300" />
          </span>
        </label>
      </div>
    </header>
  );
}
