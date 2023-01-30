import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Prosedur() {
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      router.push("/");
    }
  }, []);
  
  const router = useRouter();
  const submit = async (event, value) => {
    var formdata = new FormData();
    formdata.append("prosedur", value);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://103.150.92.79:1323/api/survey/" + localStorage.getItem("id"),
      requestOptions
    )
      .then((response) => response.text())
      .then(router.push("/kompetensi"))
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
              Menurut saudara bagaimana prosedur/ tata cara pelayanan PTSP di
              Badan Kepegawaian Negara ?
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase font-medium text-white mt-5">
            <button onClick={(e) => {submit(e, "sangat")}}>
              <div className="bg-sky-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-sky-600 flex justify-center gap-2 text-sm">
                Sangat Mudah
              </div>
            </button>
            <button onClick={(e) => {submit(e, "cukup")}}>
              <div className="bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
                Mudah
              </div>
            </button>
            <button onClick={(e) => {submit(e, "kurang")}}>
              <div className="bg-yellow-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-yellow-600 flex justify-center gap-2 text-sm">
                Kurang Mudah
              </div>
            </button>
            <button onClick={(e) => {submit(e, "tidak")}}>
              <div className="bg-rose-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-rose-600 flex justify-center gap-2 text-sm">
                Tidak Mudah
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
