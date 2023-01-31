import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Substansi() {
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      router.push("/");
    }
  }, []);
  
  const router = useRouter()
  const submit = async (event, value) => {
    var formdata = new FormData();
    formdata.append("substansi", value);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://localhost:1323/api/survey/" + localStorage.getItem("id"),
      requestOptions
    )
      .then((response) => response.text())
      .then(router.push("/prosedur"))
      .catch((error) => console.log("error", error));
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 w-2/3">
        <div className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            PELAYANAN
          </div>
          <div className="mb-2">
            <label className="w-full">
              Mendapatkan Pelayanan Pada Substansi ?
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase font-medium text-white mt-5">
            <button onClick={(e) => {submit(e, "Pembinaan Jabatan Fungsional");}}>
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                Pembinaan Jabatan Fungsional
              </div>
            </button>
            <button onClick={(e) => {submit(e, "Pengukuran Indeks Profesionalitas ASN");}}>
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Pengukuran Indeks Profesionalitas ASN
              </div>
            </button>
            <button onClick={(e) => {submit(e, "Penyusunan Rencana Pengembangan Karier");}}>
              <div className="bg-yellow-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-yellow-600 flex justify-center gap-2 text-sm">
                Penyusunan Rencana Pengembangan Karier
              </div>
            </button>
            <button onClick={(e) => {submit(e, "Standardisasi Teknis Jabatan");}}>
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
