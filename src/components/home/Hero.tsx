"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative overflow-hidden bg-surface">
      <Container className="relative grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10 max-w-xl">
          <motion.p
            {...fade(0)}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            Koleksi Terbaru 2026
          </motion.p>
          <motion.h1
            {...fade(0.08)}
            className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Fashion yang bikin percaya diri.
          </motion.h1>
          <motion.p
            {...fade(0.16)}
            className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-ink-soft"
          >
            Baju, celana, sepatu, dan aksesoris pilihan dengan bahan berkualitas
            dan harga jujur. Belanja mudah lewat marketplace favoritmu.
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            <Button href="/produk" size="lg">
              Jelajahi Koleksi
            </Button>
            <Button href="/tentang" variant="secondary" size="lg">
              Kenali Noxen
            </Button>
          </motion.div>
          <motion.dl
            {...fade(0.32)}
            className="mt-10 flex gap-8 border-t border-line/70 pt-6"
          >
            {[
              { angka: "40+", label: "Produk pilihan" },
              { angka: "4", label: "Kategori lengkap" },
              { angka: "5", label: "Marketplace resmi" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold text-ink">{s.angka}</dt>
                <dd className="text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10">
            <Image
              src="/images/sepatu/sneakers-low-classic-1.png"
              alt="Koleksi sepatu Noxen"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl shadow-black/5 sm:block">
            <p className="text-xs text-muted">Mulai dari</p>
            <p className="text-lg font-semibold text-ink">Rp129.000</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
