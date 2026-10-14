"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { kategori } from "@/data/kategori";
import { kontak } from "@/data/toko";
import { waLink } from "@/lib/whatsapp";

const navUtama = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Tentang", href: "/tentang" },
  { label: "Toko", href: "/kontak" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="Noxen - Beranda">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navUtama.map((item) => {
              const aktif = isActive(pathname, item.href);
              if (item.label === "Produk") {
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex h-9 items-center rounded-full px-4 text-sm transition-colors",
                        aktif
                          ? "text-ink"
                          : "text-ink-soft hover:text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-line/70 bg-white p-2 shadow-xl shadow-black/5">
                        {kategori.map((k) => (
                          <Link
                            key={k.slug}
                            href={`/produk#${k.slug}`}
                            className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
                          >
                            <span className="block text-sm font-medium text-ink">
                              {k.nama}
                            </span>
                            <span className="block text-xs text-muted">
                              {k.deskripsi}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex h-9 items-center rounded-full px-4 text-sm transition-colors",
                      aktif ? "text-ink" : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Button
              href={waLink("Halo Noxen, saya ingin bertanya tentang produk.")}
              size="sm"
            >
              Chat Support
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                  open && "top-1/2 -translate-y-1/2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                  open && "bottom-1/2 translate-y-1/2 -rotate-45",
                )}
              />
            </span>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line/60 bg-white md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {navUtama.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex h-12 items-center text-lg",
                        isActive(pathname, item.href)
                          ? "text-ink"
                          : "text-ink-soft",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line/60 pt-4">
                {kategori.map((k) => (
                  <Link
                    key={k.slug}
                    href={`/produk#${k.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-surface px-4 py-3 text-sm font-medium text-ink"
                  >
                    {k.nama}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  href={waLink(
                    "Halo Noxen, saya ingin bertanya tentang produk.",
                  )}
                  size="md"
                  className="w-full"
                >
                  Chat Support WhatsApp
                </Button>
                <p className="text-center text-sm text-muted">
                  {kontak.jamOperasional}
                </p>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
