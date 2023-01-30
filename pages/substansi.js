import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function substansi() {
  const router = useRouter()
  const submitSubstansi = async (event) => {
    event.preventDefault()
    console.log(event.target.value);
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 w-2/3">
        <form className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            PELAYANAN
          </div>
          <div className="mb-2">
            <label className="w-full">
              Mendapatkan Pelayanan Pada Substansi ?
            </label>
          </div>
        </form>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase font-medium text-white mt-5">
            <button onClick={submitSubstansi} value="sangat">
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                Pembinaan Jabatan Fungsional
              </div>
            </button>
            <button onClick={submitSubstansi} value="cukup">
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Pengukuran Indeks Profesionalitas ASN
              </div>
            </button>
            <button onClick={submitSubstansi} value="kurang">
              <div className="bg-yellow-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-yellow-600 flex justify-center gap-2 text-sm">
                Penyusunan Rencana Pengembangan Karier
              </div>
            </button>
            <button onClick={submitSubstansi} value="tidak">
              <div className="bg-rose-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-rose-600 flex justify-center gap-2 text-sm">
                Standardisasi Teknis Jabatan
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
