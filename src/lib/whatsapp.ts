import { kontak } from "@/data/toko";

export function waLink(pesan: string): string {
  const nomor = kontak.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
}

export function waTanyaProduk(namaProduk: string, varian?: string): string {
  const detail = varian ? ` untuk varian ${varian}` : "";
  return waLink(
    `Halo Noxen, saya ingin bertanya tentang produk "${namaProduk}"${detail}. Apakah stoknya tersedia?`,
  );
}
