import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Qrcode from '../components/Qrcode';

export default function Home() {
  const [text, setText] = useState("");
  const [alt, setAlt] = useState("");
  const [image, setImage] = useState("about:blank");
  const [loading, setLoading] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    
    setText(e.target.value);
  }

  const imageChange = () => {
    setImage(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=${text}`)
    console.log(image)
    setAlt(text)
    setText('')
  }

  return (
    <div>
      <input className=' border-slate-500 border-2 rounded-md' type="text" onChange={onInputChange} value={text}/>
      <button onClick={imageChange}>Click</button>
      <Qrcode src={image} alt={alt}/>
      <a id='download' download href={image}>Download</a>
      
    </div>
  )
}
