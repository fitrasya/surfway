import Layout from "../components/Layout";
import Link from "next/link";

export default function dashboard({respondens}) {
  console.log(respondens)
  return (
    <Layout>
    <div className="text-white text-sm w-2/3 font-medium">
      <div className="text-xl text-center mb-16 uppercase">
        Dashboard Survey Kepuasan Pelanggan<br></br>Direktorat Jabatan ASN
      </div>
      <div className="grid uppercase grid-cols-6">
        <div className="col-span-1 text-sm text-center border-b py-2">
          NIP
        </div>
        <div className="col-span-1 text-sm text-center border-b py-2">
          Nama
        </div>
        <div className="col-span-1 text-sm text-center border-b py-2">
          Instansi
        </div>
        <div className="col-span-1 text-sm text-center border-b py-2">
          Unit Kerja
        </div>
        <div className="col-span-1 text-sm text-center border-b py-2">
          Jabatan
        </div>
        <div className="col-span-1 text-sm text-center border-b py-2">
          No. HP
        </div>
      </div>
      { 
        respondens.map((responden) => {
          return (
            <div key={responden.id} className="grid grid-cols-6 font-light border-b">
              <div className="col-span-1 text-sm text-center py-2">
                {responden.nip}
              </div>
              <div className="col-span-1 text-sm text-center py-2">
                {responden.nama}
              </div>
              <div className="col-span-1 text-sm text-center py-2">
                {responden.instansi}
              </div>
              <div className="col-span-1 text-sm text-center py-2">
                {responden.unit}
              </div>
              <div className="col-span-1 text-sm text-center py-2">
                {responden.jabatan}
              </div>
              <div className="col-span-1 text-sm text-center py-2">
                {responden.telp}
              </div>
            </div>
        )})
      }
      <div className="grid gap-8 text-white uppercase text-sm grid-cols-3 font-medium">
        <Link href={"/"} className="col-start-2 mt-16">
          <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Kembali ke Beranda
          </div>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("http://103.150.92.79:1323/api/responden")
  const respondens = await response.json()

  console.log(respondens)

  return {
    props: {
      respondens: respondens.data
    }
  }
}
