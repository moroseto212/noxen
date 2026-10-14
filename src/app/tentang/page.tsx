import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Noxen: brand fashion yang menghadirkan baju, celana, sepatu, dan aksesoris berkualitas dengan harga jujur.",
};

const nilai = [
  {
    judul: "Kualitas lebih dulu",
    isi: "Kami memilih bahan dan produsen yang bisa diandalkan, agar setiap produk nyaman dan tahan lama.",
  },
  {
    judul: "Harga jujur",
    isi: "Tanpa markup berlebihan. Kami percaya gaya yang baik seharusnya terjangkau untuk banyak orang.",
  },
  {
    judul: "Desain yang relevan",
    isi: "Koleksi kami dibuat agar mudah dipadupadankan dan tetap cocok dipakai dari musim ke musim.",
  },
  {
    judul: "Belanja tanpa ribet",
    isi: "Temukan kami di marketplace favoritmu, dengan layanan chat support yang siap membantu.",
  },
];

const statistik = [
  { angka: "40+", label: "Produk pilihan" },
  { angka: "4", label: "Kategori lengkap" },
  { angka: "5", label: "Marketplace resmi" },
  { angka: "100%", label: "Produk asli" },
];

export default function TentangPage() {
  return (
    <>
      <div className="py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Tentang Noxen
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
                Fashion yang bikin percaya diri.
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
                Noxen lahir dari keinginan sederhana: menghadirkan pakaian dan
                aksesoris yang berkualitas, nyaman, dan mudah didapatkan.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                Kami merancang setiap koleksi untuk gaya sehari-hari — dari kaos
                dan kemeja, celana, sepatu, hingga aksesoris. Semua dipilih
                dengan memperhatikan bahan, kenyamanan, dan tentu saja harga
                yang wajar.
              </p>
              <div className="mt-8">
                <Button href="/produk" size="lg">
                  Lihat koleksi kami
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface">
              <Image
                src="/images/baju/04.jpg"
                alt="Koleksi Noxen"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 border-y border-line/60 py-10 md:grid-cols-4">
            {statistik.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {s.angka}
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <section className="mt-20">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Yang kami pegang
              </h2>
              <p className="mt-3 text-lg text-ink-soft">
                Empat prinsip yang menjadi arah setiap keputusan yang kami buat.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {nilai.map((n, i) => (
                <Reveal key={n.judul} delay={(i % 2) * 0.08}>
                  <div className="h-full rounded-3xl border border-line/60 bg-white p-7">
                    <h3 className="text-lg font-semibold text-ink">
                      {n.judul}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {n.isi}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Container>
      </div>
      <CtaSection />
    </>
  );
}
