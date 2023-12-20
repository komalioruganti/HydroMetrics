import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import items from "./wfOfFood";
import '../css/camera.css'

const videoConstraints = {
  width: 100,
  height: 100,
  facingMode: "environment",
};

function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [wf, setWf] = useState('Not Found');
  const [itemName, setItemName] = useState('Not Found');

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);

    const base64Data = imageSrc.split(",")[1];
    const blob = b64toBlob(base64Data, "image/jpeg");
    const formData = new FormData();
    formData.append("image", blob, "screenshot.jpg");
    const apiKey = "acc_fe4cc66f3712406";
    const apiSecret = "7d4f37e5e7644d7a2bb48b0ece5d2e1e";

    const APIurl = 'https://api.imagga.com/v2/tags';

    fetch(APIurl, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(apiKey + ':' + apiSecret),
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const Tags = data.result.tags;
        for(var el = 0;el<Tags.length;el++) {
          const element = Tags[el];
          console.log(element.tag.en)
          for (var i = 0; i < items.length; i++) {
            var e = items[i];
            if (element.tag.en.toLowerCase() === e.title.toLowerCase()) {
              setWf(e.waterFootprint);
              setItemName(e.title);
              console.log(e.waterFootprint);
              break;
            }
          }
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [webcamRef]);

  return (
    <>
    <div className="web-cam">
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
        mirrored={true}
      /></div>
      <p className="p-cam-text">
      <button onClick={capture} className="cam-btn btn">Capture photo</button>
      <button onClick={() => setUrl(null)} className="cam-btn">Refresh</button>
      </p>
      {url && (
        <div className="grid">
          <img src={url} alt="screenshot" />
        </div>
      )}
      {wf && (
        <div className="water-footprint">
          Water Footprint of {itemName}: {wf} litres/gram
        </div>
      )}
    </>
  );
};

export { WebcamCapture };
