import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function survey() {
  const router = useRouter()
  const submitContact = async (event) => {
    event.preventDefault()
    var formdata = new FormData();
    formdata.append("nama", event.target.nama.value);
    formdata.append("nip", event.target.nip.value);
    formdata.append("instansi", event.target.instansi.value);
    formdata.append("unit", event.target.unit.value);
    formdata.append("jabatan", event.target.jabatan.value);
    formdata.append("telp", event.target.telp.value);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://103.150.92.79:1323:1323/api/responden", requestOptions)
    .then(response => response.json())
    .then(result => localStorage.setItem("id", result.data))
    .then(router.push("/substansi"))
    .catch(error => console.log('error', error));
  };

  return (
    <Layout>
      <form className="grid grid-cols-2 w-1/3" onSubmit={submitContact}>
        <div className="col-span-2 px-7 py-5 bg-white shadow-lg text-gray-600">
          <div className="mb-5 border-b-2 border-sky-500 pb-3 font-medium">
            BIODATA
          </div>
          <div className="mb-5">
            <label className="block m-1 text-sm w-full">Nama Lengkap</label>
            <input
              type="text" id="nama"
              className="bg-gray-50 border-sky-500 border text-sm focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block m-1 text-sm w-full">NIP</label>
            <input
              type="text" id="nip"
              className="bg-gray-50 border-sky-500 border text-sm focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block m-1 text-sm w-full">Instansi</label>
            <input
              type="text" id="instansi"
              className="bg-gray-50 border-sky-500 border text-sm focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block m-1 text-sm w-full">Unit Kerja</label>
            <input
              type="text" id="unit"
              className="bg-gray-50 border-sky-500 border text-sm focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block m-1 text-sm w-full">Jabatan</label>
            <input
              type="text" id="jabatan"
              className="bg-gray-50 border-sky-500 border text-sm p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block m-1 text-sm w-full">No. Handphone</label>
            <input
              type="text" id="telp"
              className="bg-gray-50 border-sky-500 border text-sm p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 text-center uppercase text-white mt-5 font-medium">
            <Link href={"/"}>
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
                Cancel
              </div>
            </Link>
            <button type="submit" className="uppercase bg-emerald-500 py-2.5 shadow-lg hover:cursor-pointer hover:bg-emerald-600 flex justify-center gap-2 text-sm">
              Continue
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
