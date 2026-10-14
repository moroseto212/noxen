"use client";

import { useState } from "react";
import { ProductGallery } from "@/components/product/ProductGallery";
import { VariantPicker } from "@/components/product/VariantPicker";
import { namaKategori } from "@/data/kategori";
import { rupiah } from "@/lib/format";
import type { Produk } from "@/types";

export function ProductShowcase({ produk }: { produk: Produk }) {
  const [indeksGambar, setIndeksGambar] = useState(0);

  function pilihWarna(warna: string) {
    const src = produk.warnaGambar?.[warna];
    if (!src) return;
    const i = produk.gambar.indexOf(src);
    if (i >= 0) setIndeksGambar(i);
  }

  return (
    <>
      <ProductGallery
        gambar={produk.gambar}
        nama={produk.nama}
        contain={produk.gambarContain}
        aktif={indeksGambar}
        onAktifChange={setIndeksGambar}
      />

      <div className="md:pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-accent">
            {namaKategori(produk.kategori)}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
          {produk.nama}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-2xl font-semibold text-ink">
            {rupiah(produk.harga)}
          </span>
        </div>

        <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
          {produk.deskripsi}
        </p>

        <div className="mt-8">
          <VariantPicker produk={produk} onPilihWarna={pilihWarna} />
        </div>
      </div>
    </>
  );
}
