import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 md:py-32">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mx-auto mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Halaman ini tidak ditemukan.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-lg text-ink-soft">
          Sepertinya tautan yang kamu tuju sudah dipindahkan atau tidak pernah
          ada. Yuk kembali menjelajah koleksi kami.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/produk" size="lg">
            Lihat produk
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Kembali ke beranda
          </Button>
        </div>
        <p className="mt-10 text-sm text-muted">
          Butuh bantuan?{" "}
          <Link href="/kontak" className="text-accent hover:underline">
            Hubungi kami
          </Link>
        </p>
      </Container>
    </div>
  );
}
