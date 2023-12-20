import { useState } from "react";
import '../css/refer.css'

export default function Refer() {
    const[copyText,setCpoyText] = useState("");

    function handleCopy(){
        navigator.clipboard.writeText(copyText);
        alert("Copied")
    }
  return (
    <>
    <div className="wrapper">
      <h2 className="refer-title">Refer a friend</h2>
      <p>Share this link with your friends:</p>
      <input
        type="text"
        id="referralLink"
        readonly
        value="https://websitelink.com" onChange={(e)=>{setCpoyText(e.target.value)}}
      />
      <button onClick={handleCopy} id="copyLink">
        Copy Link
      </button>
      </div>
    </>
  );
}
