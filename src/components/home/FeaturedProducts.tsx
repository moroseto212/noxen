import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/product/ProductCard";
import { produkUnggulan } from "@/data/produk";

export function FeaturedProducts() {
  const unggulan = produkUnggulan().slice(0, 8);

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Produk unggulan
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Pilihan favorit pelanggan, dikurasi dari setiap kategori.
            </p>
          </div>
          <Button href="/produk" variant="secondary">
            Lihat semua produk
          </Button>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {unggulan.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.08}>
              <ProductCard produk={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/produk"
            className="text-sm font-medium text-accent hover:underline"
          >
            Lihat semua produk →
          </Link>
        </div>
      </Container>
    </section>
  );
}
