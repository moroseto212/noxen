import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { kategori } from "@/data/kategori";
import { kontak, toko } from "@/data/toko";
import { waLink } from "@/lib/whatsapp";

const jelajah = [
  { label: "Beranda", href: "/" },
  { label: "Semua Produk", href: "/produk" },
  { label: "Tentang Noxen", href: "/tentang" },
  { label: "Toko & Bantuan", href: "/kontak" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line/60 bg-surface max-md:hidden">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="Noxen - Beranda">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Fashion yang bikin percaya diri. Kualitas bahan terbaik, harga
              jujur, untuk gaya sehari-hari.
            </p>
            <p className="mt-4 text-sm text-muted">{kontak.alamat}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Jelajah</h3>
            <ul className="mt-4 space-y-3">
              {jelajah.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Kategori</h3>
            <ul className="mt-4 space-y-3">
              {kategori.map((k) => (
                <li key={k.slug}>
                  <Link
                    href={`/produk#${k.slug}`}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {k.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Beli & Bantuan</h3>
            <ul className="mt-4 space-y-3">
              {toko.map((t) => (
                <li key={t.nama}>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {t.nama}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={waLink(
                    "Halo Noxen, saya butuh bantuan terkait pesanan.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  WhatsApp {kontak.whatsappTampil}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line/60 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Noxen. Seluruh hak cipta dilindungi.</p>
          <p>{kontak.jamOperasional}</p>
        </div>
      </Container>
    </footer>
  );
}
