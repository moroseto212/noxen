"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ProductGalleryProps {
  gambar: string[];
  nama: string;
  contain?: string[];
  aktif?: number;
  onAktifChange?: (i: number) => void;
}

export function ProductGallery({
  gambar,
  nama,
  contain,
  aktif: aktifProp,
  onAktifChange,
}: ProductGalleryProps) {
  const images = gambar.length > 0 ? gambar : ["/images/baju/01.jpg"];
  const containSet = new Set(contain ?? []);
  const [aktifInternal, setAktifInternal] = useState(0);
  const aktif = aktifProp ?? aktifInternal;
  const setAktif = (i: number) => {
    if (onAktifChange) onAktifChange(i);
    else setAktifInternal(i);
  };
  const [rasio, setRasio] = useState<Record<number, number>>({});
  const isContain = containSet.has(images[aktif]);
  const rasioAktif = rasio[aktif] ?? (isContain ? Object.values(rasio)[0] : undefined);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-3xl transition-[aspect-ratio] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isContain ? "bg-white" : "bg-surface",
        )}
        style={isContain && rasioAktif ? { aspectRatio: rasioAktif } : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={aktif}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[aktif]}
              alt={`${nama} — tampilan ${aktif + 1}`}
              fill
              priority={aktif === 0}
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              onLoad={(e) => {
                const el = e.currentTarget;
                if (!el.naturalWidth || !el.naturalHeight) return;
                const r = el.naturalWidth / el.naturalHeight;
                setRasio((prev) =>
                  prev[aktif] === r ? prev : { ...prev, [aktif]: r },
                );
              }}
              className={isContain ? "object-contain" : "object-cover"}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setAktif(i)}
              aria-label={`Lihat gambar ${i + 1}`}
              aria-current={i === aktif}
              className={cn(
                "relative aspect-square overflow-hidden rounded-2xl ring-1 transition-all",
                containSet.has(src) ? "bg-white" : "bg-surface",
                i === aktif ? "ring-2 ring-ink" : "ring-line hover:ring-ink-soft",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className={containSet.has(src) ? "object-contain" : "object-cover"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
