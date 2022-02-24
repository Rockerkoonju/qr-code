import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Qr from "../components/Qr";
import AES from "../components/AES";
import Binary from "../components/Binary";

export default function Home() {
  const [menu, setMenu] = useState("Qr");

  console.log(menu);

  const CheckMenu = ({ menu }) => {
    if (menu == "AES") {
      return <AES />;
    } else if (menu == "Qr") {
      return <Qr />;
    } else if (menu == "Binary") {
      return <Binary />;
    }
  };

  return (
    <div>
      <Head>
        <title>Code-Message</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Desktop  */}
      <div className=" inset-y-0 absolute bg-white shadow-lg h-screen md:block hidden w-28">
        <div>
          <button onClick={() => setMenu("AES")}>AES</button>
          <hr />
          <button onClick={() => setMenu("Qr")}>Qr</button>
          <hr />
          <button onClick={() => setMenu("Binary")}>Binary</button>
          <hr />
        </div>
      </div>

      <div>
        <h1 className=" font-Pacifico mb-9 center mt-10 text-4xl md:text-7xl text-[#FFADF0] drop-shadow-lg">
          Code-Message
        </h1>
      </div>

      <CheckMenu menu={menu} />
    </div>
  );
}
