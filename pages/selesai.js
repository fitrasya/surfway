import Layout from "../components/Layout";
import Link from "next/link";

export default function selesai() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-3 gap-16 w-2/3 text-center font-medium uppercase text-white">
          <div className="col-span-3 normal-case font-normal text-xl">
            Terima kasih telah berpartisipasi dalam survey yang diselenggarakan
            <br></br>
            oleh Direktorat Jabatan Aparatur Sipil Negara.
            <br></br>Salam Sehat Selalu.
          </div>
          <div className="col-start-2 col-span-1">
            <Link href={"/"}>
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Kembali ke Beranda
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
