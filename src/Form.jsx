import React from 'react'
import Input from './Input.jsx'
const electron = require("electron")

const Form = () => {
  const ipc = electron.ipcRenderer;
  const errorButton = document.getElementById("error");
  errorButton.addEventListener("click",function(){
    ipc.send("opened-error-dialog")
  })


  return (
    <div>
        <h1>Form</h1>
        <Input/>
        <button id='error' > display error </button>
    </div>

  )
}

export default Form