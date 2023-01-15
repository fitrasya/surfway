import Layout from "../components/Layout";
import Link from "next/link";

export default function saran() {
  return (
    <Layout>
      <div className="grid grid-cols-2 w-2/3">
        <form className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            KOMENTAR & SARAN
          </div>
          <div className="mb-2">
            <label className="block m-1 text-sm w-full">Komentar & Saran</label>
            <input
              type="text"
              className="bg-gray-50 border-sky-500 border text-sm focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              required
            />
          </div>
        </form>
        <div className="col-span-2">
          <div className="text-center uppercase font-medium text-white mt-5">
            <Link href={"/selesai"}>
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
