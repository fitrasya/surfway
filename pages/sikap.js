import Layout from "../components/Layout";
import Link from "next/link";

export default function sikap() {
  return (
    <Layout>
      <div className="grid grid-cols-2 w-2/3">
        <form className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            PERSONIL
          </div>
          <div className="mb-2">
            <label className="w-full">
              Menurut saudara, bagaimana sikap pegawai/ petugas yang memberikan
              pelayanan konsultasi?
            </label>
          </div>
        </form>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase font-medium text-white mt-5">
            <Link href={"/waktu"}>
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                Sangat Baik
              </div>
            </Link>
            <Link href={"/waktu"}>
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Baik
              </div>
            </Link>
            <Link href={"/waktu"}>
              <div className="bg-yellow-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-yellow-600 flex justify-center gap-2 text-sm">
                Kurang Baik
              </div>
            </Link>
            <Link href={"/waktu"}>
              <div className="bg-rose-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-rose-600 flex justify-center gap-2 text-sm">
                Tidak Baik
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
