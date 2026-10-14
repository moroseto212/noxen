import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { toko } from "@/data/toko";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Belanja lewat marketplace favoritmu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-lg text-ink-soft">
            Noxen bisa kamu temukan di beberapa marketplace resmi. Pilih yang
            paling nyaman, semua produk asli dan bergaransi.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {toko.map((t) => (
              <a
                key={t.nama}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  {
                    "--brand": t.warna,
                    "--brand-image": t.warnaImage,
                  } as CSSProperties
                }
                className="toko-hover inline-flex h-12 items-center justify-center rounded-full border border-line bg-white px-7 text-base font-medium text-ink"
              >
                {t.nama}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
