import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { kontak, toko } from "@/data/toko";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Toko & Bantuan",
  description:
    "Beli produk Noxen lewat Shopee, Tokopedia, TikTok Shop, Lazada, atau Instagram. Hubungi tim support kami untuk bantuan.",
};

const faq = [
  {
    t: "Di mana saya bisa membeli produk Noxen?",
    j: "Semua produk dapat dibeli melalui marketplace resmi kami: Shopee, Tokopedia, TikTok Shop, Lazada, dan Instagram. Pilih yang paling nyaman untukmu.",
  },
  {
    t: "Apakah semua produk asli?",
    j: "Ya. Kami hanya menjual produk asli Noxen melalui toko resmi, sehingga kualitas dan keasliannya terjamin.",
  },
  {
    t: "Bagaimana cara bertanya soal ukuran atau stok?",
    j: "Kamu bisa menghubungi kami lewat WhatsApp atau email. Tim kami siap membantu memilih ukuran dan memastikan ketersediaan stok.",
  },
  {
    t: "Kapan tim support tersedia?",
    j: `Kami melayani pertanyaan pada ${kontak.jamOperasional}. Pesan di luar jam tersebut akan dibalas pada hari kerja berikutnya.`,
  },
];

const saluran = [
  {
    nama: "WhatsApp",
    nilai: kontak.whatsappTampil,
    href: waLink("Halo Noxen, saya butuh bantuan."),
    ket: "Respon tercepat",
  },
  {
    nama: "Email",
    nilai: kontak.email,
    href: `mailto:${kontak.email}`,
    ket: "Untuk pertanyaan detail",
  },
  {
    nama: "Instagram",
    nilai: kontak.instagram,
    href: "https://www.instagram.com/noxen",
    ket: "Update & DM",
  },
  {
    nama: "TikTok",
    nilai: kontak.tiktok,
    href: "https://www.tiktok.com/@noxen",
    ket: "Video & live",
  },
];

export default function KontakPage() {
  return (
    <div className="py-14 md:py-20">
      <Container>
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Toko & Bantuan
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Belanja & hubungi kami
          </h1>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            Temukan Noxen di marketplace resmi, atau sapa tim kami lewat
            saluran bantuan di bawah ini.
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Marketplace resmi
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {toko.map((t, i) => (
              <Reveal key={t.nama} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-line/60 bg-white p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {t.nama}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {t.deskripsi}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button href={t.url} variant="secondary" size="sm">
                      Kunjungi {t.nama}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Saluran bantuan
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {saluran.map((s) => (
              <a
                key={s.nama}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between rounded-3xl border border-line/60 bg-surface p-6 transition-colors hover:border-ink"
              >
                <div>
                  <p className="text-sm text-muted">{s.nama}</p>
                  <p className="mt-1 text-lg font-semibold text-ink">
                    {s.nilai}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{s.ket}</p>
                </div>
                <span className="text-2xl text-accent transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            Jam operasional: {kontak.jamOperasional} · {kontak.alamat}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Pertanyaan umum
          </h2>
          <div className="mt-6 divide-y divide-line/60 overflow-hidden rounded-3xl border border-line/60 bg-white">
            {faq.map((f) => (
              <div key={f.t} className="p-6">
                <h3 className="font-medium text-ink">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {f.j}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
