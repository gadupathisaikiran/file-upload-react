
import './App.css';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF","PDF"];

function App() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  console.log(file)
  return (
    <div style={{height:"500px"}} className="App">
    <div className='App-header'>
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

    <p>{file?file.name:""}</p>
    </div>
    
    </div>
   
  );
}

export default App;
