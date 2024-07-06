import Image from "next/image";
import logo from "@/public/logo.svg";
import camSearch from "@/public/cam.svg";
import search from "@/public/search.svg";
import globe from "@/public/globe.svg";
import profile from "@/public/profile.svg";
import Link from "next/link";
import { links } from "@/app/data/data";
import downArrow from "@/public/downArrow.svg";

export default function Navbar() {
  return (
    <nav className=" ">
      <div className="flex w-full justify-between px-10 py-6">
        <div className="align-center flex gap-16">
          <Link href={""}>
            <Image src={logo} alt="logo" />
          </Link>
          <div className="flex w-[482px] gap-2 rounded-[40px] border border-solid border-[rgba(25,27,31,0.8)] p-1 pl-3 focus-within:ring-2 hover:ring-2">
            <input
              type="text"
              placeholder="Enter your search"
              tabIndex={0}
              className="c grow focus:outline-none"
            ></input>
            <button type="button">
              <Image src={camSearch} alt="camera logo" />
            </button>
            <button
              className="flex items-center gap-1 rounded-[40px] bg-[#FE7F0A] px-4 text-base font-medium text-white"
              type="button"
            >
              <span>Search</span>
              <Image src={search} alt="search logo" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <a href="" className="flex items-center gap-1">
            <Image src={globe} alt="globe logo" />
            <span>Eng</span>
          </a>
          <a href="">
            <Image src={profile} alt="profile logo" />
          </a>
          <Link href="./home" about="Login">
            <button
              className="flex items-center justify-center gap-2.5 rounded-lg bg-[#FE7F0A] px-[18px] py-2.5 text-2xl font-semibold text-white"
              type="button"
            >
              <span>Sign up</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-center gap-14 bg-[#191B1F]">
        {links.map((item) => {
          return (
            <div
              className="flex items-center gap-2 p-2.5 text-lg font-light hover:bg-gray-950"
              key={item.name}
            >
              <span className="uppercase text-white">{item.name}</span>
              {item.dropdown && <Image src={downArrow} alt="downArrow" />}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
