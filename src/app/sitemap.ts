import type { MetadataRoute } from "next";
import { produk } from "@/data/produk";
import { site } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const sekarang = new Date();

  const statis = ["", "/produk", "/tentang", "/kontak"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: sekarang,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const halamanProduk = produk.map((p) => ({
    url: `${site.url}/produk/${p.slug}`,
    lastModified: sekarang,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...statis, ...halamanProduk];
}
