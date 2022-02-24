import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
const CryptoJS = require("crypto-js");

const Page = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  const encryptWithAES = () => {
    const passphrase = "123";
    const encryptText = CryptoJS.AES.encrypt(text, passphrase).toString();
    console.log(encryptText);
    setData(encryptText);
  };

  const decryptWithAES = () => {
    const passphrase = "123";
    const bytes = CryptoJS.AES.decrypt(text, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText);
    setData(originalText);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    setText(e.target.value);
  };

  return (
    <div>

      <Head>
        <title>AES-Message</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input type="text" onChange={onInputChange} />
      <button onClick={encryptWithAES}>Click</button>
      <button onClick={decryptWithAES}>Click</button>

      <textarea className="resize-none" name="result" id="result" cols="30" rows="10" value={data} readOnly></textarea>
    </div>
  );
};

export default Page;
