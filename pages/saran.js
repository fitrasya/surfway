import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Saran() {
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      router.push("/");
    }
  }, []);
  
  const router = useRouter();
  const submit = async (event) => {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("saran", event.target.saran.value);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://103.150.92.79:1323/api/survey/" + localStorage.getItem("id"),
      requestOptions
    )
      .then((response) => response.json())
      .then(localStorage.removeItem("id"))
      .then(router.push("/selesai"))
      .catch((error) => console.log("error", error));
  };
  return (
    <Layout>
      <form className="grid grid-cols-2 w-2/3" onSubmit={submit}>
        <div className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            KOMENTAR & SARAN
          </div>
          <div className="mb-2">
            <label className="block m-1 text-sm w-full">Komentar & Saran</label>
            <input
              id="saran"
              type="text"
              className="bg-gray-50 border-sky-500 border text-sm focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-center uppercase font-medium text-white mt-5">
            <button type="submit" className="uppercase bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer w-full hover:bg-emerald-600 flex justify-center gap-2 text-sm">
              Submit
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
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
