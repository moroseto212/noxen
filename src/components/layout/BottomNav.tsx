"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const ikon = {
  beranda: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 11 12 4l8 7" />
      <path d="M6.5 9.8V20h11V9.8" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  produk: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="7" height="7" rx="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.6" />
    </svg>
  ),
  tentang: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11.5V16" />
      <path d="M12 8h.01" />
    </svg>
  ),
  toko: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4.5 9.5h15V20h-15z" />
      <path d="M3.5 9.5 5.2 4.5h13.6l1.7 5" />
      <path d="M9.75 20v-5.2h4.5V20" />
    </svg>
  ),
};

const tab = [
  { label: "Beranda", href: "/", icon: ikon.beranda },
  { label: "Produk", href: "/produk", icon: ikon.produk },
  { label: "Tentang", href: "/tentang", icon: ikon.tentang },
  { label: "Toko", href: "/kontak", icon: ikon.toko },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line/60 bg-white/90 pb-[max(env(safe-area-inset-bottom),0px)] backdrop-blur-xl md:hidden"
    >
      <ul className="grid grid-cols-4">
        {tab.map((t) => {
          const aktif = isActive(pathname, t.href);
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                aria-current={aktif ? "page" : undefined}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 pt-2 text-[11px] font-medium transition-colors",
                  aktif ? "text-accent" : "text-muted",
                )}
              >
                {t.icon}
                <span>{t.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
