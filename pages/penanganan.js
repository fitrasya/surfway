import Layout from "../components/Layout";
import Link from "next/link";

export default function penanganan() {
  return (
    <Layout>
      <div className="grid grid-cols-2 w-2/3">
        <form className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            PENGADUAN
          </div>
          <div className="mb-2">
            <label className="w-full">
              Menurut saudara, bagaimana penanganan pengaduan, saran, dan
              masukan, serta tindak lanjutnya setelah konsultasi dengan
              Direktorat Jabatan ASN?
            </label>
          </div>
        </form>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase font-medium text-white mt-5">
            <Link href={"/kesimpulan"}>
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                Sangat Puas
              </div>
            </Link>
            <Link href={"/kesimpulan"}>
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Puas
              </div>
            </Link>
            <Link href={"/kesimpulan"}>
              <div className="bg-yellow-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-yellow-600 flex justify-center gap-2 text-sm">
                Kurang Puas
              </div>
            </Link>
            <Link href={"/kesimpulan"}>
              <div className="bg-rose-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-rose-600 flex justify-center gap-2 text-sm">
                Tidak Puas
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
