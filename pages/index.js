import Layout from "../components/Layout";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 gap-8 w-1/3 text-center font-medium uppercase text-white">
          <div className="col-span-2 text-xl">
            Survey Kepuasan Pelanggan<br></br>Direktorat Jabatan ASN
          </div>
          <div className="col-span-2 normal-case font-normal text-sm">
            Survey kepuasan pelanggan adalah survey yang dilakukan oleh
            Direktorat Jabatan Aparatur Sipil Negara (ASN) terhadap Pegawai
            Negeri Sipil yang melakukan konsultasi kepegawaian ke Direktorat
            Jabatan ASN pada Pelayanan Terpadu Satu Pintu (PTSP) Badan
            Kepegawaian Negara selama Tahun 2023. Kami mohon kesediaan
            Bapak/Ibu/Saudara/i untuk mengisi biodata dan menjawab pertanyaan
            dibawah ini secara jujur sesuai dengan pengetahuan/pemahaman yang
            Bapak/Ibu/Saudara/i miliki. Atas perhatian dan waktunya disampaikan
            terima kasih.
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4 text-center uppercase text-white mt-5">
              <Link href={"/biodata"}>
                <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
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
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                  Mulai Survey
                </div>
              </Link>
              <Link href={"/dashboard"}>
                <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                  Lihat Dashboard
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
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
  
}
