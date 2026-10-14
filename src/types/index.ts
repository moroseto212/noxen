export type KategoriSlug = "baju" | "celana" | "sepatu" | "aksesoris";

export interface Produk {
  id: string;
  slug: string;
  nama: string;
  kategori: KategoriSlug;
  harga: number;
  deskripsi: string;
  bahan: string;
  warna: string[];
  ukuran: string[];
  gambar: string[];
  gambarContain?: string[];
  kartuContain?: boolean;
  warnaGambar?: Record<string, string>;
  unggulan?: boolean;
}

export interface Kategori {
  slug: KategoriSlug;
  nama: string;
  deskripsi: string;
  gambar: string;
}

export interface Toko {
  nama: string;
  url: string;
  deskripsi: string;
  warna: string;
  warnaImage?: string;
}
