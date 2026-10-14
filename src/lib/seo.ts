const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://noxen.id";

export const site = {
  nama: "Noxen",
  tagline: "Fashion yang bikin percaya diri",
  deskripsi:
    "Noxen menghadirkan baju, celana, sepatu, dan aksesoris pilihan dengan kualitas bahan terbaik dan harga yang jujur. Belanja mudah lewat marketplace favoritmu.",
  url: siteUrl,
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
