import Image from "next/image";
import Link from "next/link";
import { namaKategori } from "@/data/kategori";
import { rupiah } from "@/lib/format";
import { cn } from "@/lib/cn";
import type { Produk } from "@/types";

export function ProductCard({ produk }: { produk: Produk }) {
  const utama = produk.gambar[0];
  const contain = produk.kartuContain ?? false;

  return (
    <Link href={`/produk/${produk.slug}`} className="group block">
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-3xl",
          contain ? "bg-white" : "bg-surface",
        )}
      >
        <Image
          src={utama}
          alt={produk.nama}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={cn(
            "transition-transform duration-700 ease-out",
            contain
              ? "object-contain group-hover:scale-[1.03]"
              : "object-cover group-hover:scale-105",
          )}
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-xs text-muted">{namaKategori(produk.kategori)}</p>
        <h3 className="text-[15px] font-medium leading-snug text-ink">
          {produk.nama}
        </h3>
        <div className="flex flex-wrap items-center gap-2 pt-0.5">
          <span className="font-semibold text-ink">{rupiah(produk.harga)}</span>
        </div>
      </div>
    </Link>
  );
}
