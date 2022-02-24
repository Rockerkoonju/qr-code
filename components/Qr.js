import Head from "next/head";
// import Image from "next/image";
import { useState } from "react";
import Qrcode from "../components/image/Qrcode";

export default function Home() {
  const [text, setText] = useState("");
  const [alt, setAlt] = useState("");
  const [image, setImage] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();

    setText(e.target.value);
  };

  const imageChange = () => {
    setImage(
      `https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=${text}`
    );
    setAlt(text);
    setText("");
  };

  const checkData = (image, alt) => {
    if (!image || !alt) {
      return <></>;
    } else {
      return (
        <>
          <div className="center">
            <Qrcode className=" rounded-3xl" src={image} alt={alt} />
          </div>
          <div className="center">
            <span className="md:hidden block center text-slate-700 font-Prompt mt-4 ">
            **กดค้างที่รูป และกดบันทึกรูปภาพ**
          </span>
          <span className="hidden md:block center text-slate-700 font-Prompt mt-4 ">
            **คลิกขวาที่รูป และกดบันทึกรูปภาพเป็น**
          </span>
          </div>
          
        </>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Code-Message</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <p className=" center font-Mitr text-base md:text-2xl">Enter Text</p>
      <div className=" center mt-2">
        <textarea
          className=" resize-none border-blue-500 border-2 font-Prompt rounded-md w-[320px] h-[100px] md:w-[500px] md:h-[150px] px-3 text-left align-text-top"
          onChange={onInputChange}
          value={text}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="center mt-6">
        <button className="button button--success" onClick={imageChange}>
          Create Qr
        </button>
      </div>
      <div className=" mt-4">{checkData(image, alt)}</div>
    </div>
  );
}
