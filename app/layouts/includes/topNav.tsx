import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { MdFileUpload } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const handleSearchName = (event: { target: { value: string } }) => {
    console.log(event.target.value);
  };

  const goTo = () => {
    console.log("here");
  };

  return (
    <>
      <div
        id="TopNav"
        className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]"
      >
        <div
          className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${
            pathname === "/" ? "max-w-[1150px]" : ""
          }`}
        >
          <Link href="/">
            <img
              className="min-w-[115px] w-[115px]"
              src="/image/ShutterShare_black.png"
            />
          </Link>
          <div className="relative hidden md:flex items-center justify-end bg-[#f1f1f2] p-1 rounded-full max-w-[430px] w-full">
            <input
              type="text"
              onChange={handleSearchName}
              className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
              placeholder="Search accounts"
            />
            <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
              <div className="p-1">
                <Link
                  href={`/profile/1`}
                  className="flex items-center justify-between w-full cursor-pointer hover:bg-[#304674] p-1 px-2 hover:text-white"
                >
                  <div className="flex items-center">
                    <img
                      className="rounded-md"
                      width="40"
                      src="https://placehold.co/40"
                    />
                    <div className="truncate ml-2">KM Khalid Saifullah</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="px-3 py-1 flex items-center border-l border-l-gray-300">
              <FiSearch color="#A1A2A7" size="22" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo()}
              className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5"
            >
              <MdFileUpload color="#000000" size="22" />
              <span className="px-2 font-medium text-[15px]">Upload</span>
            </button>
            <div className="flex items-center">
              <button className="flex items-center bg-[#304674] text-white border rounded-md px-3 py-[6px] mx-3">
                <span className="whitespace-nowrap mx-4 font-medium text-[15px]">
                  Log in
                </span>
              </button>
              <CgMenuGridO color="#161724" size="24" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
