import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const nilai = [
  {
    judul: "Bahan berkualitas",
    isi: "Setiap produk dipilih dengan bahan yang nyaman, kuat, dan tahan lama.",
  },
  {
    judul: "Harga jujur",
    isi: "Kami menjaga harga tetap wajar tanpa mengorbankan kualitas.",
  },
  {
    judul: "Mudah dibeli",
    isi: "Belanja lewat Shopee, Tokopedia, TikTok Shop, Lazada, atau Instagram.",
  },
];

export function BrandTeaser() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
                Tentang Noxen
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Sederhana, nyaman, dan selalu relevan.
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/70">
                Noxen hadir untuk kamu yang ingin tampil percaya diri tanpa
                ribet. Kami merancang setiap koleksi agar mudah dipadupadankan
                dan cocok dipakai setiap hari.
              </p>
              <div className="mt-8">
                <Button href="/tentang" variant="primary" size="lg">
                  Selengkapnya tentang kami
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-1">
                {nilai.map((n) => (
                  <div key={n.judul} className="bg-ink p-6">
                    <dt className="text-base font-semibold">{n.judul}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {n.isi}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
