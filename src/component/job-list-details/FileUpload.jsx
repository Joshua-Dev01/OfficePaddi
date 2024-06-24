// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// export const FileUpload = () => {
//     cont [file, setFile ] = useState(null);
//     cont [progress, setProgress ] = useState({started: false, pc: 0});
//     cont [msg, setMsg ] = useState(null);

//     function handleUpload() {
//         if (!file) {
//             console.log(" No file selected ");
//             return;
//         }

//         const fd = new FormData();
//         fd.append('file', file);

//         setMsg("Uploading...");
//         setProgress(prevState => {
//             return{...prevState, started: true}
//         })
//         axios.post('https://httpbin.org/post', fb, {
//             onUploadProgress: (progressEvent) => {setProgress(prevState => {
//                 return {...prevState, pc: progressEvent.progress*100}
//             }) },
//             headers: {
//                 "Custom-Header": "value",
//             }
//         })
//         .then(res => {
//             setMsg("Upload sucessful");
//              console.log(res.data);
//             })
//         .catch(err =>{ 
//             setMsg("Upload filed");
//             console.log(err)});
//     }
//   return (
//     <>
//     <input onChange={(e) => {setFile(e.target.files[0]) } } type="file" />
//     <button onClick={ handleUpload }>upload</button>
//     { progress.started && <progress max="100" value={progress.pc}></progress>}
//     { msg && <span>{msg}</span>}
//     </>
//   )
// }
import React from 'react';

function FileUpload() {
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
};
  

  return (
    <div  >
      <input
        type="file"
        onChange={handleFileUpload}
        className="border-[1px] border-gray-500 w-[100%] rounded"
        accept=".doc,.docx,.pdf,.txt" 
        rej
      />
      
    </div>
  );
}

export default FileUpload;