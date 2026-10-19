import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductShowcase } from "@/components/product/ProductShowcase";
import { namaKategori } from "@/data/kategori";
import { getProduk, produk, produkKategori } from "@/data/produk";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return produk.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getProduk(slug);
  if (!item) return {};

  return {
    title: item.nama,
    description: item.deskripsi,
    alternates: { canonical: absoluteUrl(`/produk/${item.slug}`) },
    openGraph: {
      title: item.nama,
      description: item.deskripsi,
      url: absoluteUrl(`/produk/${item.slug}`),
      images: [{ url: item.gambar[0] }],
    },
  };
}

export default function ProdukDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <DetailProduk params={params} />
    </Suspense>
  );
}

async function DetailProduk({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProduk(slug);
  if (!item) notFound();

  const terkait = produkKategori(item.kategori)
    .filter((p) => p.id !== item.id)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.nama,
    description: item.deskripsi,
    image: [absoluteUrl(item.gambar[0])],
    category: namaKategori(item.kategori),
    brand: { "@type": "Brand", name: "Noxen" },
    offers: {
      "@type": "Offer",
      price: item.harga,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/produk/${item.slug}`),
    },
  };

  return (
    <div className="py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/produk" className="hover:text-ink">
                Produk
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/produk#${item.kategori}`}
                className="hover:text-ink"
              >
                {namaKategori(item.kategori)}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">
              {item.nama}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
          <ProductShowcase produk={item} />
        </div>

        <section className="mt-16 border-t border-line/60 pt-10">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Detail produk
          </h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-muted">Bahan</dt>
              <dd className="mt-1 font-medium text-ink">{item.bahan}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Warna tersedia</dt>
              <dd className="mt-1 font-medium text-ink">
                {item.warna.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Ukuran tersedia</dt>
              <dd className="mt-1 font-medium text-ink">
                {item.ukuran.join(", ")}
              </dd>
            </div>
          </dl>
        </section>

        {terkait.length > 0 && (
          <section className="mt-16 border-t border-line/60 pt-10">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Kamu mungkin suka
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
              {terkait.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                  <ProductCard
                    produk={p}
                    rasio={item.kategori === "sepatu" ? "1/1" : "4/5"}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}

function DetailSkeleton() {
  return (
    <div className="py-10 md:py-14">
      <Container>
        <div className="h-4 w-64 animate-pulse rounded-full bg-surface-2" />
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="aspect-[4/5] animate-pulse rounded-3xl bg-surface-2" />
          <div className="space-y-4 md:pt-2">
            <div className="h-4 w-24 animate-pulse rounded-full bg-surface-2" />
            <div className="h-10 w-3/4 animate-pulse rounded-full bg-surface-2" />
            <div className="h-7 w-40 animate-pulse rounded-full bg-surface-2" />
            <div className="h-24 w-full animate-pulse rounded-2xl bg-surface-2" />
            <div className="h-12 w-52 animate-pulse rounded-full bg-surface-2" />
          </div>
        </div>
      </Container>
    </div>
  );
}
