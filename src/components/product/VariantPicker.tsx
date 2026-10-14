"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { toko } from "@/data/toko";
import { waTanyaProduk } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import type { Produk } from "@/types";

export function VariantPicker({
  produk,
  onPilihWarna,
}: {
  produk: Produk;
  onPilihWarna?: (warna: string) => void;
}) {
  const [warna, setWarna] = useState(produk.warna[0] ?? "");
  const [ukuran, setUkuran] = useState(produk.ukuran[0] ?? "");

  const varian = [warna, ukuran].filter(Boolean).join(" / ");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-ink">
          Warna: <span className="text-ink-soft">{warna || "-"}</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {produk.warna.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => {
                setWarna(w);
                onPilihWarna?.(w);
              }}
              aria-pressed={w === warna}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                w === warna
                  ? "border-ink bg-ink text-white"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink",
              )}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-ink">
          Ukuran: <span className="text-ink-soft">{ukuran || "-"}</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {produk.ukuran.map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUkuran(u)}
              aria-pressed={u === ukuran}
              className={cn(
                "min-w-11 rounded-full border px-4 py-2 text-sm transition-colors",
                u === ukuran
                  ? "border-ink bg-ink text-white"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink",
              )}
            >
              {u}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <p className="text-sm font-medium text-ink">Pilih marketplace</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
                className="toko-hover group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-4 text-ink"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">
                    Beli di {t.nama}
                  </span>
                  <span className="mt-0.5 block text-xs opacity-70">
                    {t.deskripsi}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <Button
          href={waTanyaProduk(produk.nama, varian)}
          variant="dark"
          size="lg"
          className="w-full"
        >
          Chat Support WhatsApp
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Varian dipilih: {varian || "-"}. Ketersediaan stok dapat berubah —
        silakan konfirmasi melalui marketplace atau chat support.
      </p>
    </div>
  );
}
