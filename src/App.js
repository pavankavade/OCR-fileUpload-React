import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
//import img from 'yes.png';

function App() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('hin');
    await worker.initialize('hin');
    const { data: { text } } = await worker.recognize('https://i.imgur.com/2Zh9QLa.png');
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}

export default App;
