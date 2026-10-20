import type { KategoriSlug, Produk } from "@/types";

const UK_BAJU = ["S", "M", "L", "XL", "XXL"];
const UK_CELANA = ["28", "30", "32", "34", "36"];
const UK_SEPATU = ["39", "40", "41", "42", "43", "44"];
const UK_ONE = ["One Size"];

export const produk: Produk[] = [
  // ================= BAJU =================
  {
    id: "bju-01",
    slug: "kaos-oversize-katun-combed",
    nama: "Kaos Oversize Katun Combed 30s",
    kategori: "baju",
    harga: 189000,
    deskripsi:
      "Kaos potongan oversize dengan bahan katun combed 30s yang adem dan jatuh sempurna. Cocok untuk tampilan santai sehari-hari.",
    bahan: "Katun combed 30s",
    warna: ["Hitam", "Putih", "Abu Melange"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/kaos-oversize-katun-combed-1.jpeg",
      "/images/baju/kaos-oversize-katun-combed-2.jpeg",
      "/images/baju/kaos-oversize-katun-combed-3.jpeg",
      "/images/baju/kaos-oversize-katun-combed-panduan.jpeg",
    ],
    gambarContain: [
      "/images/baju/kaos-oversize-katun-combed-1.jpeg",
      "/images/baju/kaos-oversize-katun-combed-2.jpeg",
      "/images/baju/kaos-oversize-katun-combed-3.jpeg",
      "/images/baju/kaos-oversize-katun-combed-panduan.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/baju/kaos-oversize-katun-combed-1.jpeg",
      Putih: "/images/baju/kaos-oversize-katun-combed-2.jpeg",
      "Abu Melange": "/images/baju/kaos-oversize-katun-combed-3.jpeg",
    },
    unggulan: true,
  },
  {
    id: "bju-02",
    slug: "kemeja-flanel-lengan-panjang",
    nama: "Kemeja Flanel Lengan Panjang",
    kategori: "baju",
    harga: 329000,
    deskripsi:
      "Kemeja flanel dengan motif klasik dan bahan brushed yang lembut. Nyaman dipakai sendiri atau sebagai outer.",
    bahan: "Flanel katun brushed",
    warna: ["Merah", "Biru", "Hijau Army"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/kemeja-flanel-lengan-panjang-1.png",
      "/images/baju/kemeja-flanel-lengan-panjang-2.png",
      "/images/baju/kemeja-flanel-lengan-panjang-3.png",
      "/images/baju/kemeja-flanel-lengan-panjang-panduan.png",
    ],
    gambarContain: ["/images/baju/kemeja-flanel-lengan-panjang-panduan.png"],
    warnaGambar: {
      Merah: "/images/baju/kemeja-flanel-lengan-panjang-1.png",
      Biru: "/images/baju/kemeja-flanel-lengan-panjang-2.png",
      "Hijau Army": "/images/baju/kemeja-flanel-lengan-panjang-3.png",
    },
  },
  {
    id: "bju-03",
    slug: "tshirt-jersey-premium",
    nama: "T-Shirt Jersey Premium",
    kategori: "baju",
    harga: 219000,
    deskripsi:
      "T-shirt bahan jersey premium dengan jahitan rapi dan siluet modern. Basic wajib yang mudah dipadupadankan.",
    bahan: "Jersey katun premium",
    warna: ["Hitam", "Navy", "Putih"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/t-shirt-jersey-premium-1.png",
      "/images/baju/t-shirt-jersey-premium-2.png",
      "/images/baju/t-shirt-jersey-premium-3.png",
      "/images/baju/t-shirt-jersey-premium-panduan.jpeg",
    ],
    gambarContain: [
      "/images/baju/t-shirt-jersey-premium-1.png",
      "/images/baju/t-shirt-jersey-premium-2.png",
      "/images/baju/t-shirt-jersey-premium-3.png",
      "/images/baju/t-shirt-jersey-premium-panduan.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/baju/t-shirt-jersey-premium-1.png",
      Navy: "/images/baju/t-shirt-jersey-premium-2.png",
      Putih: "/images/baju/t-shirt-jersey-premium-3.png",
    },
  },
  {
    id: "bju-04",
    slug: "kemeja-linen-casual",
    nama: "Kemeja Linen Casual",
    kategori: "baju",
    harga: 359000,
    deskripsi:
      "Kemeja linen yang ringan dan breathable, sempurna untuk cuaca tropis maupun acara semi-formal.",
    bahan: "Linen blend",
    warna: ["Krem", "Biru Muda", "Putih"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/kemeja-linen-casual-1.jpeg",
      "/images/baju/kemeja-linen-casual-2.jpeg",
      "/images/baju/kemeja-linen-casual-3.jpeg",
      "/images/baju/kemeja-linen-casual-panduan.png",
    ],
    gambarContain: ["/images/baju/kemeja-linen-casual-panduan.png"],
    warnaGambar: {
      Krem: "/images/baju/kemeja-linen-casual-1.jpeg",
      "Biru Muda": "/images/baju/kemeja-linen-casual-2.jpeg",
      Putih: "/images/baju/kemeja-linen-casual-3.jpeg",
    },
  },
  {
    id: "bju-05",
    slug: "hoodie-fleece-basic",
    nama: "Hoodie Fleece Basic",
    kategori: "baju",
    harga: 429000,
    deskripsi:
      "Hoodie berbahan fleece tebal yang hangat dengan kanguru pocket dan tali serut. Teman terbaik saat santai.",
    bahan: "Fleece cotton 320gsm",
    warna: ["Abu", "Hitam", "Maroon"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/hoodie-fleece-basic-1.png",
      "/images/baju/hoodie-fleece-basic-2.png",
      "/images/baju/hoodie-fleece-basic-3.png",
      "/images/baju/hoodie-fleece-basic-panduan.png",
    ],
    gambarContain: [
      "/images/baju/hoodie-fleece-basic-1.png",
      "/images/baju/hoodie-fleece-basic-2.png",
      "/images/baju/hoodie-fleece-basic-3.png",
      "/images/baju/hoodie-fleece-basic-panduan.png",
    ],
    kartuContain: true,
    warnaGambar: {
      Abu: "/images/baju/hoodie-fleece-basic-1.png",
      Hitam: "/images/baju/hoodie-fleece-basic-2.png",
      Maroon: "/images/baju/hoodie-fleece-basic-3.png",
    },
    unggulan: true,
  },
  {
    id: "bju-06",
    slug: "polo-shirt-pique",
    nama: "Polo Shirt Pique",
    kategori: "baju",
    harga: 279000,
    deskripsi:
      "Polo shirt bahan pique dengan kerah rapi. Pilihan tepat untuk tampilan kasual yang tetap sopan.",
    bahan: "Lacoste pique cotton",
    warna: ["Putih", "Hitam", "Navy"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/polo-shirt-pique-1.jpeg",
      "/images/baju/polo-shirt-pique-2.jpeg",
      "/images/baju/polo-shirt-pique-3.jpeg",
    ],
    warnaGambar: {
      Putih: "/images/baju/polo-shirt-pique-1.jpeg",
      Hitam: "/images/baju/polo-shirt-pique-2.jpeg",
      Navy: "/images/baju/polo-shirt-pique-3.jpeg",
    },
  },
  {
    id: "bju-07",
    slug: "sweater-rajut-crewneck",
    nama: "Sweater Rajut Crewneck",
    kategori: "baju",
    harga: 389000,
    deskripsi:
      "Sweater rajut dengan tekstur halus dan kerah crewneck. Memberi kehangatan tanpa terlihat tebal.",
    bahan: "Rajut akrilik lembut",
    warna: ["Krem", "Abu", "Hijau"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/sweater-rajut-crewneck-1.png",
      "/images/baju/sweater-rajut-crewneck-2.png",
      "/images/baju/sweater-rajut-crewneck-3.png",
    ],
    warnaGambar: {
      Krem: "/images/baju/sweater-rajut-crewneck-1.png",
      Abu: "/images/baju/sweater-rajut-crewneck-2.png",
      Hijau: "/images/baju/sweater-rajut-crewneck-3.png",
    },
  },
  {
    id: "bju-08",
    slug: "kaos-graphic-statement",
    nama: "Kaos Graphic Statement",
    kategori: "baju",
    harga: 199000,
    deskripsi:
      "Kaos dengan grafis statement eksklusif Noxen, dicetak menggunakan teknik plastisol yang tahan lama.",
    bahan: "Katun combed 24s",
    warna: ["Hitam", "Putih"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/kaos-graphic-statement-1.jpeg",
      "/images/baju/kaos-graphic-statement-2.jpeg",
    ],
    gambarContain: [
      "/images/baju/kaos-graphic-statement-1.jpeg",
      "/images/baju/kaos-graphic-statement-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/baju/kaos-graphic-statement-1.jpeg",
      Putih: "/images/baju/kaos-graphic-statement-2.jpeg",
    },
  },
  {
    id: "bju-09",
    slug: "kemeja-oxford-slim-fit",
    nama: "Kemeja Oxford Slim Fit",
    kategori: "baju",
    harga: 349000,
    deskripsi:
      "Kemeja oxford dengan potongan slim fit yang tegas. Cocok untuk kantor maupun acara formal kasual.",
    bahan: "Katun oxford",
    warna: ["Biru", "Putih"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/kemeja-oxford-slim-fit-1.jpeg",
      "/images/baju/kemeja-oxford-slim-fit-2.jpeg",
    ],
    warnaGambar: {
      Biru: "/images/baju/kemeja-oxford-slim-fit-1.jpeg",
      Putih: "/images/baju/kemeja-oxford-slim-fit-2.jpeg",
    },
  },
  {
    id: "bju-10",
    slug: "jaket-bomber-ringan",
    nama: "Jaket Bomber Ringan",
    kategori: "baju",
    harga: 549000,
    deskripsi:
      "Jaket bomber ringan dengan bahan tahan angin. Lapisan luar andalan untuk gaya urban sehari-hari.",
    bahan: "Taslan water-repellent",
    warna: ["Hitam", "Navy", "Olive"],
    ukuran: UK_BAJU,
    gambar: [
      "/images/baju/jaket-bomber-ringan-1.jpeg",
      "/images/baju/jaket-bomber-ringan-2.jpeg",
      "/images/baju/jaket-bomber-ringan-3.jpeg",
    ],
    gambarContain: [
      "/images/baju/jaket-bomber-ringan-1.jpeg",
      "/images/baju/jaket-bomber-ringan-2.jpeg",
      "/images/baju/jaket-bomber-ringan-3.jpeg",
    ],
    warnaGambar: {
      Hitam: "/images/baju/jaket-bomber-ringan-1.jpeg",
      Navy: "/images/baju/jaket-bomber-ringan-2.jpeg",
      Olive: "/images/baju/jaket-bomber-ringan-3.jpeg",
    },
    unggulan: true,
  },

  // ================= CELANA =================
  {
    id: "cln-01",
    slug: "celana-chino-slim",
    nama: "Celana Chino Slim",
    kategori: "celana",
    harga: 349000,
    deskripsi:
      "Celana chino slim dengan bahan twill stretch yang nyaman bergerak. Tampilan rapi untuk kerja atau jalan.",
    bahan: "Twill katun stretch",
    warna: ["Khaki", "Navy", "Hitam"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/celana-chino-slim-1.jpg",
      "/images/celana/celana-chino-slim-2.jpg",
      "/images/celana/celana-chino-slim-3.jpg",
    ],
    warnaGambar: {
      Khaki: "/images/celana/celana-chino-slim-1.jpg",
      Navy: "/images/celana/celana-chino-slim-2.jpg",
      Hitam: "/images/celana/celana-chino-slim-3.jpg",
    },
    unggulan: true,
  },
  {
    id: "cln-02",
    slug: "jeans-straight-fit",
    nama: "Jeans Straight Fit",
    kategori: "celana",
    harga: 429000,
    deskripsi:
      "Jeans potongan straight dengan denim tebal yang kokoh. Warna indigo klasik yang mudah dipadukan.",
    bahan: "Denim 12oz",
    warna: ["Biru Tua", "Hitam"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/jeans-straight-fit-1.jpg",
      "/images/celana/jeans-straight-fit-2.jpg",
    ],
    warnaGambar: {
      "Biru Tua": "/images/celana/jeans-straight-fit-1.jpg",
      Hitam: "/images/celana/jeans-straight-fit-2.jpg",
    },
  },
  {
    id: "cln-03",
    slug: "jogger-pants-katun",
    nama: "Jogger Pants Katun",
    kategori: "celana",
    harga: 299000,
    deskripsi:
      "Jogger berbahan french terry yang halus dengan karet pinggang nyaman. Pas untuk gaya santai dan olahraga ringan.",
    bahan: "French terry",
    warna: ["Hitam", "Abu", "Navy"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/jogger-pants-katun-1.jpg",
      "/images/celana/jogger-pants-katun-2.jpg",
      "/images/celana/jogger-pants-katun-3.jpg",
    ],
    warnaGambar: {
      Hitam: "/images/celana/jogger-pants-katun-1.jpg",
      Abu: "/images/celana/jogger-pants-katun-2.jpg",
      Navy: "/images/celana/jogger-pants-katun-3.jpg",
    },
  },
  {
    id: "cln-04",
    slug: "celana-kargo-utility",
    nama: "Celana Kargo Utility",
    kategori: "celana",
    harga: 389000,
    deskripsi:
      "Celana kargo dengan banyak kantong fungsional dan bahan ripstop yang kuat. Gaya utilitarian yang tangguh.",
    bahan: "Ripstop katun",
    warna: ["Olive", "Khaki", "Hitam"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/celana-kargo-utility-1.jpg",
      "/images/celana/celana-kargo-utility-2.jpg",
      "/images/celana/celana-kargo-utility-3.jpg",
    ],
    warnaGambar: {
      Olive: "/images/celana/celana-kargo-utility-1.jpg",
      Khaki: "/images/celana/celana-kargo-utility-2.jpg",
      Hitam: "/images/celana/celana-kargo-utility-3.jpg",
    },
  },
  {
    id: "cln-05",
    slug: "jeans-skinny-stretch",
    nama: "Jeans Skinny Stretch",
    kategori: "celana",
    harga: 449000,
    deskripsi:
      "Jeans skinny dengan denim stretch yang mengikuti bentuk kaki. Fleksibel dan tetap nyaman sepanjang hari.",
    bahan: "Denim stretch",
    warna: ["Biru", "Hitam"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/jeans-skinny-stretch-1.jpg",
      "/images/celana/jeans-skinny-stretch-2.jpg",
    ],
    warnaGambar: {
      Biru: "/images/celana/jeans-skinny-stretch-1.jpg",
      Hitam: "/images/celana/jeans-skinny-stretch-2.jpg",
    },
  },
  {
    id: "cln-06",
    slug: "celana-pendek-chino",
    nama: "Celana Pendek Chino",
    kategori: "celana",
    harga: 229000,
    deskripsi:
      "Celana pendek chino dengan bahan twill adem. Pilihan ringan untuk cuaca panas dan aktivitas santai.",
    bahan: "Twill katun",
    warna: ["Khaki", "Navy"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/celana-pendek-chino-1.jpg",
      "/images/celana/celana-pendek-chino-2.jpg",
    ],
    warnaGambar: {
      Khaki: "/images/celana/celana-pendek-chino-1.jpg",
      Navy: "/images/celana/celana-pendek-chino-2.jpg",
    },
  },
  {
    id: "cln-07",
    slug: "cargo-jogger-tapered",
    nama: "Cargo Jogger Tapered",
    kategori: "celana",
    harga: 379000,
    deskripsi:
      "Perpaduan kargo dan jogger dengan potongan tapered. Kombinasi gaya sporty dan fungsional.",
    bahan: "Ripstop ringan",
    warna: ["Hitam", "Olive"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/cargo-jogger-tapered-1.jpg",
      "/images/celana/cargo-jogger-tapered-2.jpg",
    ],
    warnaGambar: {
      Hitam: "/images/celana/cargo-jogger-tapered-1.jpg",
      Olive: "/images/celana/cargo-jogger-tapered-2.jpg",
    },
  },
  {
    id: "cln-08",
    slug: "celana-kerja-formal",
    nama: "Celana Kerja Formal",
    kategori: "celana",
    harga: 399000,
    deskripsi:
      "Celana kerja dengan bahan wool blend dan lipatan rapi. Tampil profesional di setiap kesempatan formal.",
    bahan: "Wool blend",
    warna: ["Hitam", "Abu Tua"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/celana-kerja-formal-1.jpg",
      "/images/celana/celana-kerja-formal-2.jpg",
    ],
    warnaGambar: {
      Hitam: "/images/celana/celana-kerja-formal-1.jpg",
      "Abu Tua": "/images/celana/celana-kerja-formal-2.jpg",
    },
  },
  {
    id: "cln-09",
    slug: "denim-loose-fit",
    nama: "Denim Loose Fit",
    kategori: "celana",
    harga: 469000,
    deskripsi:
      "Denim loose fit dengan denim rigid 14oz yang akan membentuk karakter unik seiring pemakaian.",
    bahan: "Denim 14oz rigid",
    warna: ["Biru Muda", "Biru Tua"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/denim-loose-fit-1.jpg",
      "/images/celana/denim-loose-fit-2.jpg",
    ],
    warnaGambar: {
      "Biru Muda": "/images/celana/denim-loose-fit-1.jpg",
      "Biru Tua": "/images/celana/denim-loose-fit-2.jpg",
    },
    unggulan: true,
  },
  {
    id: "cln-10",
    slug: "celana-training-sport",
    nama: "Celana Training Sport",
    kategori: "celana",
    harga: 249000,
    deskripsi:
      "Celana training berbahan dry-fit yang cepat kering dan ringan. Nyaman untuk olahraga maupun bersantai.",
    bahan: "Dry-fit polyester",
    warna: ["Hitam", "Abu"],
    ukuran: UK_CELANA,
    gambar: [
      "/images/celana/celana-training-sport-1.jpg",
      "/images/celana/celana-training-sport-2.jpg",
    ],
    warnaGambar: {
      Hitam: "/images/celana/celana-training-sport-1.jpg",
      Abu: "/images/celana/celana-training-sport-2.jpg",
    },
  },

  // ================= SEPATU =================
  {
    id: "spt-01",
    slug: "sneakers-low-classic",
    nama: "Sneakers Low Classic",
    kategori: "sepatu",
    harga: 749000,
    deskripsi:
      "Sneakers low dengan desain klasik yang tak lekang waktu. Ringan, fleksibel, dan cocok untuk segala gaya.",
    bahan: "Kulit sintetis + kanvas",
    warna: ["Putih", "Hitam"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/sneakers-low-classic-1.png",
      "/images/sepatu/sneakers-low-classic-2.png",
    ],
    gambarContain: [
      "/images/sepatu/sneakers-low-classic-1.png",
      "/images/sepatu/sneakers-low-classic-2.png",
    ],
    kartuContain: true,
    warnaGambar: {
      Putih: "/images/sepatu/sneakers-low-classic-1.png",
      Hitam: "/images/sepatu/sneakers-low-classic-2.png",
    },
    unggulan: true,
  },
  {
    id: "spt-02",
    slug: "sneakers-chunky-retro",
    nama: "Sneakers Chunky Retro",
    kategori: "sepatu",
    harga: 859000,
    deskripsi:
      "Sneakers chunky bergaya retro dengan sol tebal dan kombinasi mesh serta suede. Statement untuk penampilan.",
    bahan: "Mesh + suede",
    warna: ["Abu", "Krem", "Hitam"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/sneakers-chunky-retro-1.jpeg",
      "/images/sepatu/sneakers-chunky-retro-2.jpeg",
      "/images/sepatu/sneakers-chunky-retro-3.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/sneakers-chunky-retro-1.jpeg",
      "/images/sepatu/sneakers-chunky-retro-2.jpeg",
      "/images/sepatu/sneakers-chunky-retro-3.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Abu: "/images/sepatu/sneakers-chunky-retro-1.jpeg",
      Krem: "/images/sepatu/sneakers-chunky-retro-2.jpeg",
      Hitam: "/images/sepatu/sneakers-chunky-retro-3.jpeg",
    },
  },
  {
    id: "spt-03",
    slug: "slip-on-kanvas",
    nama: "Slip-On Kanvas",
    kategori: "sepatu",
    harga: 399000,
    deskripsi:
      "Sepatu slip-on berbahan kanvas yang praktis tanpa tali. Mudah dipakai untuk aktivitas cepat.",
    bahan: "Kanvas katun",
    warna: ["Hitam", "Putih", "Navy"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/slip-on-kanvas-1.jpeg",
      "/images/sepatu/slip-on-kanvas-2.jpeg",
      "/images/sepatu/slip-on-kanvas-3.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/slip-on-kanvas-1.jpeg",
      "/images/sepatu/slip-on-kanvas-2.jpeg",
      "/images/sepatu/slip-on-kanvas-3.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/sepatu/slip-on-kanvas-1.jpeg",
      Putih: "/images/sepatu/slip-on-kanvas-2.jpeg",
      Navy: "/images/sepatu/slip-on-kanvas-3.jpeg",
    },
  },
  {
    id: "spt-04",
    slug: "running-shoes-lightweight",
    nama: "Running Shoes Lightweight",
    kategori: "sepatu",
    harga: 899000,
    deskripsi:
      "Sepatu lari ringan dengan upper mesh dan bantalan responsif. Menjaga setiap langkah tetap nyaman.",
    bahan: "Engineered mesh",
    warna: ["Hitam", "Biru", "Merah"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/running-shoes-lightweight-1.jpeg",
      "/images/sepatu/running-shoes-lightweight-2.jpeg",
      "/images/sepatu/running-shoes-lightweight-3.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/running-shoes-lightweight-1.jpeg",
      "/images/sepatu/running-shoes-lightweight-2.jpeg",
      "/images/sepatu/running-shoes-lightweight-3.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/sepatu/running-shoes-lightweight-1.jpeg",
      Biru: "/images/sepatu/running-shoes-lightweight-2.jpeg",
      Merah: "/images/sepatu/running-shoes-lightweight-3.jpeg",
    },
  },
  {
    id: "spt-05",
    slug: "high-top-court",
    nama: "High-Top Court",
    kategori: "sepatu",
    harga: 799000,
    deskripsi:
      "Sepatu high-top dengan siluet court yang ikonik. Memberi dukungan pergelangan dan gaya yang kuat.",
    bahan: "Kulit sintetis",
    warna: ["Putih", "Hitam"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/high-top-court-1.jpeg",
      "/images/sepatu/high-top-court-2.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/high-top-court-1.jpeg",
      "/images/sepatu/high-top-court-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Putih: "/images/sepatu/high-top-court-1.jpeg",
      Hitam: "/images/sepatu/high-top-court-2.jpeg",
    },
  },
  {
    id: "spt-06",
    slug: "sepatu-kulit-formal",
    nama: "Sepatu Kulit Formal",
    kategori: "sepatu",
    harga: 1090000,
    deskripsi:
      "Sepatu formal dari kulit asli dengan finishing mengilap. Detail jahitan rapi untuk kesan elegan.",
    bahan: "Kulit sapi asli",
    warna: ["Hitam", "Coklat"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/sepatu-kulit-formal-1.jpeg",
      "/images/sepatu/sepatu-kulit-formal-2.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/sepatu-kulit-formal-1.jpeg",
      "/images/sepatu/sepatu-kulit-formal-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/sepatu/sepatu-kulit-formal-1.jpeg",
      Coklat: "/images/sepatu/sepatu-kulit-formal-2.jpeg",
    },
    unggulan: true,
  },
  {
    id: "spt-07",
    slug: "loafers-suede",
    nama: "Loafers Suede",
    kategori: "sepatu",
    harga: 949000,
    deskripsi:
      "Loafers berbahan suede lembut dengan desain tanpa tali. Pilihan sempurna untuk tampilan smart casual.",
    bahan: "Suede",
    warna: ["Coklat", "Navy"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/loafers-suede-1.jpeg",
      "/images/sepatu/loafers-suede-2.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/loafers-suede-1.jpeg",
      "/images/sepatu/loafers-suede-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Coklat: "/images/sepatu/loafers-suede-1.jpeg",
      Navy: "/images/sepatu/loafers-suede-2.jpeg",
    },
  },
  {
    id: "spt-08",
    slug: "sneakers-knit-sock",
    nama: "Sneakers Knit Sock",
    kategori: "sepatu",
    harga: 689000,
    deskripsi:
      "Sneakers dengan upper knit yang menyesuaikan kaki seperti kaus kaki. Ringan dan breathable.",
    bahan: "Knit breathable",
    warna: ["Abu", "Hitam"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/sneakers-knit-sock-1.jpeg",
      "/images/sepatu/sneakers-knit-sock-2.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/sneakers-knit-sock-1.jpeg",
      "/images/sepatu/sneakers-knit-sock-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Abu: "/images/sepatu/sneakers-knit-sock-1.jpeg",
      Hitam: "/images/sepatu/sneakers-knit-sock-2.jpeg",
    },
  },
  {
    id: "spt-09",
    slug: "boots-kulit-chelsea",
    nama: "Boots Kulit Chelsea",
    kategori: "sepatu",
    harga: 1190000,
    deskripsi:
      "Boots Chelsea dari kulit asli dengan karet elastis di sisi. Elegan, kokoh, dan tahan lama.",
    bahan: "Kulit asli",
    warna: ["Coklat Tua", "Hitam"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/boots-kulit-chelsea-1.jpeg",
      "/images/sepatu/boots-kulit-chelsea-2.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/boots-kulit-chelsea-1.jpeg",
      "/images/sepatu/boots-kulit-chelsea-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      "Coklat Tua": "/images/sepatu/boots-kulit-chelsea-1.jpeg",
      Hitam: "/images/sepatu/boots-kulit-chelsea-2.jpeg",
    },
  },
  {
    id: "spt-10",
    slug: "sandal-slide-sport",
    nama: "Sandal Slide Sport",
    kategori: "sepatu",
    harga: 249000,
    deskripsi:
      "Sandal slide berbahan EVA yang ringan dan empuk. Praktis untuk santai di rumah maupun bepergian.",
    bahan: "EVA foam",
    warna: ["Hitam", "Navy"],
    ukuran: UK_SEPATU,
    gambar: [
      "/images/sepatu/sandal-slide-sport-1.jpeg",
      "/images/sepatu/sandal-slide-sport-2.jpeg",
    ],
    gambarContain: [
      "/images/sepatu/sandal-slide-sport-1.jpeg",
      "/images/sepatu/sandal-slide-sport-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/sepatu/sandal-slide-sport-1.jpeg",
      Navy: "/images/sepatu/sandal-slide-sport-2.jpeg",
    },
  },

  // ================= AKSESORIS =================
  {
    id: "aks-01",
    slug: "kacamata-sunglasses-polarized",
    nama: "Kacamata Sunglasses Polarized",
    kategori: "aksesoris",
    harga: 449000,
    deskripsi:
      "Kacamata dengan lensa polarized yang mengurangi silau dan melindungi mata dari sinar UV.",
    bahan: "Frame acetate, lensa polarized",
    warna: ["Hitam", "Coklat Tortoise"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/kacamata-sunglasses-polarized-1.jpeg",
      "/images/aksesoris/kacamata-sunglasses-polarized-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/kacamata-sunglasses-polarized-1.jpeg",
      "/images/aksesoris/kacamata-sunglasses-polarized-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/aksesoris/kacamata-sunglasses-polarized-1.jpeg",
      "Coklat Tortoise": "/images/aksesoris/kacamata-sunglasses-polarized-2.jpeg",
    },
    unggulan: true,
  },
  {
    id: "aks-02",
    slug: "topi-baseball-cap",
    nama: "Topi Baseball Cap",
    kategori: "aksesoris",
    harga: 179000,
    deskripsi:
      "Topi baseball berbahan katun twill dengan strap adjustable. Melengkapi gaya kasual harian.",
    bahan: "Katun twill",
    warna: ["Hitam", "Navy", "Krem"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/topi-baseball-cap-1.jpeg",
      "/images/aksesoris/topi-baseball-cap-2.jpeg",
      "/images/aksesoris/topi-baseball-cap-3.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/topi-baseball-cap-1.jpeg",
      "/images/aksesoris/topi-baseball-cap-2.jpeg",
      "/images/aksesoris/topi-baseball-cap-3.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/aksesoris/topi-baseball-cap-1.jpeg",
      Navy: "/images/aksesoris/topi-baseball-cap-2.jpeg",
      Krem: "/images/aksesoris/topi-baseball-cap-3.jpeg",
    },
  },
  {
    id: "aks-03",
    slug: "jam-tangan-minimalis",
    nama: "Jam Tangan Minimalis",
    kategori: "aksesoris",
    harga: 899000,
    deskripsi:
      "Jam tangan dengan desain minimalis dan tali stainless steel. Elegan untuk kerja maupun acara resmi.",
    bahan: "Stainless steel",
    warna: ["Silver", "Gold", "Hitam"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/jam-tangan-minimalis-1.jpeg",
      "/images/aksesoris/jam-tangan-minimalis-2.jpeg",
      "/images/aksesoris/jam-tangan-minimalis-3.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/jam-tangan-minimalis-1.jpeg",
      "/images/aksesoris/jam-tangan-minimalis-2.jpeg",
      "/images/aksesoris/jam-tangan-minimalis-3.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Silver: "/images/aksesoris/jam-tangan-minimalis-1.jpeg",
      Gold: "/images/aksesoris/jam-tangan-minimalis-2.jpeg",
      Hitam: "/images/aksesoris/jam-tangan-minimalis-3.jpeg",
    },
  },
  {
    id: "aks-04",
    slug: "tas-tote-kanvas",
    nama: "Tas Tote Kanvas",
    kategori: "aksesoris",
    harga: 329000,
    deskripsi:
      "Tas tote berbahan kanvas tebal dengan ruang luas. Cocok untuk kuliah, kerja, maupun belanja.",
    bahan: "Kanvas katun tebal",
    warna: ["Krem", "Hitam"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/tas-tote-kanvas-1.jpeg",
      "/images/aksesoris/tas-tote-kanvas-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/tas-tote-kanvas-1.jpeg",
      "/images/aksesoris/tas-tote-kanvas-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Krem: "/images/aksesoris/tas-tote-kanvas-1.jpeg",
      Hitam: "/images/aksesoris/tas-tote-kanvas-2.jpeg",
    },
  },
  {
    id: "aks-05",
    slug: "ikat-pinggang-kulit",
    nama: "Ikat Pinggang Kulit",
    kategori: "aksesoris",
    harga: 279000,
    deskripsi:
      "Ikat pinggang dari kulit asli dengan buckle logam rapi. Sentuhan finishing untuk penampilan.",
    bahan: "Kulit asli",
    warna: ["Hitam", "Coklat"],
    ukuran: ["S", "M", "L", "XL"],
    gambar: [
      "/images/aksesoris/ikat-pinggang-kulit-1.jpeg",
      "/images/aksesoris/ikat-pinggang-kulit-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/ikat-pinggang-kulit-1.jpeg",
      "/images/aksesoris/ikat-pinggang-kulit-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/aksesoris/ikat-pinggang-kulit-1.jpeg",
      Coklat: "/images/aksesoris/ikat-pinggang-kulit-2.jpeg",
    },
  },
  {
    id: "aks-06",
    slug: "dompet-kulit-slim",
    nama: "Dompet Kulit Slim",
    kategori: "aksesoris",
    harga: 239000,
    deskripsi:
      "Dompet slim berbahan kulit asli dengan banyak slot kartu. Tipis di kantong, tetap fungsional.",
    bahan: "Kulit asli",
    warna: ["Hitam", "Coklat Tua"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/dompet-kulit-slim-1.jpeg",
      "/images/aksesoris/dompet-kulit-slim-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/dompet-kulit-slim-1.jpeg",
      "/images/aksesoris/dompet-kulit-slim-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/aksesoris/dompet-kulit-slim-1.jpeg",
      "Coklat Tua": "/images/aksesoris/dompet-kulit-slim-2.jpeg",
    },
  },
  {
    id: "aks-07",
    slug: "kalung-titanium",
    nama: "Kalung Titanium",
    kategori: "aksesoris",
    harga: 199000,
    deskripsi:
      "Kalung berbahan titanium yang ringan dan anti karat. Desain simpel untuk sentuhan modern.",
    bahan: "Titanium",
    warna: ["Silver", "Hitam"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/kalung-titanium-1.jpeg",
      "/images/aksesoris/kalung-titanium-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/kalung-titanium-1.jpeg",
      "/images/aksesoris/kalung-titanium-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Silver: "/images/aksesoris/kalung-titanium-1.jpeg",
      Hitam: "/images/aksesoris/kalung-titanium-2.jpeg",
    },
  },
  {
    id: "aks-08",
    slug: "beanie-rajut",
    nama: "Beanie Rajut",
    kategori: "aksesoris",
    harga: 149000,
    deskripsi:
      "Beanie rajut lembut yang menghangatkan kepala. Aksesori andalan untuk gaya musim hujan.",
    bahan: "Rajut akrilik",
    warna: ["Hitam", "Abu", "Maroon"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/beanie-rajut-1.jpeg",
      "/images/aksesoris/beanie-rajut-2.jpeg",
      "/images/aksesoris/beanie-rajut-3.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/beanie-rajut-1.jpeg",
      "/images/aksesoris/beanie-rajut-2.jpeg",
      "/images/aksesoris/beanie-rajut-3.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/aksesoris/beanie-rajut-1.jpeg",
      Abu: "/images/aksesoris/beanie-rajut-2.jpeg",
      Maroon: "/images/aksesoris/beanie-rajut-3.jpeg",
    },
  },
  {
    id: "aks-09",
    slug: "ransel-daypack",
    nama: "Ransel Daypack",
    kategori: "aksesoris",
    harga: 549000,
    deskripsi:
      "Ransel daypack dengan bahan water-resistant dan kompartemen laptop. Siap menemani aktivitasmu.",
    bahan: "Polyester water-resistant",
    warna: ["Hitam", "Abu"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/ransel-daypack-1.jpeg",
      "/images/aksesoris/ransel-daypack-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/ransel-daypack-1.jpeg",
      "/images/aksesoris/ransel-daypack-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Hitam: "/images/aksesoris/ransel-daypack-1.jpeg",
      Abu: "/images/aksesoris/ransel-daypack-2.jpeg",
    },
    unggulan: true,
  },
  {
    id: "aks-10",
    slug: "gelang-kulit-braided",
    nama: "Gelang Kulit Braided",
    kategori: "aksesoris",
    harga: 129000,
    deskripsi:
      "Gelang kulit anyam dengan pengait logam. Detail kecil yang memberi karakter pada penampilan.",
    bahan: "Kulit anyam",
    warna: ["Coklat", "Hitam"],
    ukuran: UK_ONE,
    gambar: [
      "/images/aksesoris/gelang-kulit-braided-1.jpeg",
      "/images/aksesoris/gelang-kulit-braided-2.jpeg",
    ],
    gambarContain: [
      "/images/aksesoris/gelang-kulit-braided-1.jpeg",
      "/images/aksesoris/gelang-kulit-braided-2.jpeg",
    ],
    kartuContain: true,
    warnaGambar: {
      Coklat: "/images/aksesoris/gelang-kulit-braided-1.jpeg",
      Hitam: "/images/aksesoris/gelang-kulit-braided-2.jpeg",
    },
  },
];

export function getProduk(slug: string): Produk | undefined {
  return produk.find((p) => p.slug === slug);
}

export function produkKategori(slug: KategoriSlug): Produk[] {
  return produk.filter((p) => p.kategori === slug);
}

export function produkUnggulan(): Produk[] {
  return produk.filter((p) => p.unggulan);
}
