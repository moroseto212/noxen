import type { Kategori } from "@/types";

export const kategori: Kategori[] = [
  {
    slug: "baju",
    nama: "Baju",
    deskripsi: "Kaos, kemeja, hoodie, hingga jaket dengan bahan pilihan.",
    gambar: "/images/baju/01.jpg",
  },
  {
    slug: "celana",
    nama: "Celana",
    deskripsi: "Chino, denim, kargo, sampai jogger untuk keseharian.",
    gambar: "/images/celana/celana-chino-slim-1.jpg",
  },
  {
    slug: "sepatu",
    nama: "Sepatu",
    deskripsi: "Sneakers, formal, boots, dan sandal untuk setiap langkah.",
    gambar: "/images/sepatu/sneakers-low-classic-1.png",
    gambarContain: true,
  },
  {
    slug: "aksesoris",
    nama: "Aksesoris",
    deskripsi: "Kacamata, topi, jam, tas, dan pelengkap penampilan.",
    gambar: "/images/aksesoris/01.jpg",
  },
];

export function namaKategori(slug: string): string {
  return kategori.find((k) => k.slug === slug)?.nama ?? slug;
}

export function getKategori(slug: string): Kategori | undefined {
  return kategori.find((k) => k.slug === slug);
}
