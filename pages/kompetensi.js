import Layout from "../components/Layout";
import Link from "next/link";

export default function kompetensi() {
  return (
    <Layout>
      <div className="grid grid-cols-2 w-2/3">
        <form className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            PERSONIL
          </div>
          <div className="mb-2">
            <label className="w-full">
              Menurut saudara, bagaimana kompetensi atau kemampuan (pengetahuan,
              keahlian, keterampilan) para pegawai/ petugas yang memberikan
              konsultasi?
            </label>
          </div>
        </form>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase font-medium text-white mt-5">
            <Link href={"/sikap"}>
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                Sangat Mampu
              </div>
            </Link>
            <Link href={"/sikap"}>
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Mampu
              </div>
            </Link>
            <Link href={"/sikap"}>
              <div className="bg-yellow-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-yellow-600 flex justify-center gap-2 text-sm">
                Kurang Mampu
              </div>
            </Link>
            <Link href={"/sikap"}>
              <div className="bg-rose-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-rose-600 flex justify-center gap-2 text-sm">
                Tidak Mampu
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
