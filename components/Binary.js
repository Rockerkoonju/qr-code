import { useState } from "react";

const Binary = () => {

    const [text, setText] = useState("");
    const [data, setData] = useState("");

    const onInputChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
    
        setText(e.target.value);
      };

      const stringToBinary = (string, maxBytes) => {
        //for BINARY maxBytes = 255
        //for VARBINARY maxBytes = 65535
        let binaryOutput = '';
        if (string.length > maxBytes) {
          string = string.substring(0, maxBytes);
        }
      
        for (var i = 0; i < string.length; i++) {
          binaryOutput += string[i].charCodeAt(0).toString(2) + ' ';
        }
      
        return binaryOutput;
      };
    
      const binaryToString = (binary) => {
        const arrayOfBytes = binary.split(' ');
      
        let stringOutput = '';
      
        for (let i = 0; i < arrayOfBytes.length; i++) {
          stringOutput += String.fromCharCode(parseInt(arrayOfBytes[i], 2));
        }
      
        return stringOutput;
      };

    return(
        <div>
            <input type="text" onChange={onInputChange} />
            <button onClick={() => setData(stringToBinary(text))}>Click</button>
            <button onClick={() => setData(binaryToString(text))}>Click</button>

            <textarea className="resize-none" name="result" id="result" cols="30" rows="10" value={data} readOnly></textarea>
        </div>
    )
}

export default Binary