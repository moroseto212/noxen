import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/product/ProductCard";
import { kategori } from "@/data/kategori";
import { produkKategori } from "@/data/produk";

export const metadata: Metadata = {
  title: "Semua Produk",
  description:
    "Jelajahi koleksi lengkap Noxen: baju, celana, sepatu, dan aksesoris dengan bahan berkualitas dan harga jujur.",
};

export default function ProdukPage() {
  return (
    <div className="py-14 md:py-20">
      <Container>
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Katalog
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Semua Produk
          </h1>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            Koleksi Noxen untuk melengkapi gaya sehari-hari. Pilih kategori
            untuk langsung menuju bagian yang kamu cari.
          </p>
        </header>

        <nav
          aria-label="Kategori produk"
          className="mt-8 flex flex-wrap gap-2"
        >
          {kategori.map((k) => (
            <a
              key={k.slug}
              href={`#${k.slug}`}
              className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              {k.nama}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-20">
          {kategori.map((k) => {
            const daftar = produkKategori(k.slug);
            return (
              <section
                key={k.slug}
                id={k.slug}
                className="scroll-mt-24"
                aria-labelledby={`judul-${k.slug}`}
              >
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line/60 pb-6">
                  <div>
                    <h2
                      id={`judul-${k.slug}`}
                      className="text-2xl font-semibold tracking-tight text-ink md:text-3xl"
                    >
                      {k.nama}
                    </h2>
                    <p className="mt-1.5 text-ink-soft">{k.deskripsi}</p>
                  </div>
                  <p className="text-sm text-muted">
                    {daftar.length} produk
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
                  {daftar.map((p, i) => (
                    <Reveal key={p.id} delay={(i % 4) * 0.06}>
                      <ProductCard produk={p} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
