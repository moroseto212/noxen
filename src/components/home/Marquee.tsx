import { kategori } from "@/data/kategori";

export function Marquee() {
  const kata = [
    "Baju",
    "Celana",
    "Sepatu",
    "Aksesoris",
    "Kualitas Premium",
    "Harga Jujur",
    ...kategori.map((k) => k.nama),
  ];

  return (
    <section className="border-y border-line/60 bg-surface py-6">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              aria-hidden={dup === 1}
              className="flex items-center"
            >
              {kata.map((k, i) => (
                <li
                  key={`${dup}-${k}-${i}`}
                  className="flex items-center whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.18em] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mr-6 h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {k}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
