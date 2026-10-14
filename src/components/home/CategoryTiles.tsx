import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { kategori } from "@/data/kategori";

export function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Pilih gayamu
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            Empat kategori lengkap untuk melengkapi penampilan sehari-hari.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kategori.map((k, i) => (
            <Reveal key={k.slug} delay={i * 0.08}>
              <Link
                href={`/produk#${k.slug}`}
                className="group block overflow-hidden rounded-3xl bg-surface"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={k.gambar}
                    alt={k.nama}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-xl font-semibold text-white">
                      {k.nama}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      {k.deskripsi}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
