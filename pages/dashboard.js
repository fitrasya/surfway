import Layout from "../components/Layout";
import Link from "next/link";

export default function Dashboard({dashboard}) {
  return (
    <Layout>
    <div className="text-white text-sm w-2/3 font-medium">
      <div className="text-xl text-center mb-16 uppercase">
        Dashboard Survey Kepuasan Pelanggan<br></br>Direktorat Jabatan ASN
      </div>
      { 
        dashboard.map((dash) => {
          return (
            <div
              key={dash.Kesimpulan}
              className="grid grid-cols-6 font-light"
            >
              <div className="col-start-3 col-span-1 uppercase text-sm text-center py-2">
                {dash.Kesimpulan} puas
              </div>
              <div className="col-start-4 col-span-1 uppercase text-sm text-center py-2">
                {dash.Jumlah} responden
              </div>
            </div>
          );})
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
  const response = await fetch("http://103.150.92.79:1323/api/dashboard")
  const dashboard = await response.json()

  return {
    props: {
      dashboard: dashboard,
    },
  };
}
