import React, { useState } from 'react'

export default function TextForm(props) {
    const[text, setText]=useState("")
    const [word, setWord]=useState(0)
    const [read, setRead]=useState(0)
    const handleUpClick=()=>{
        setText(text.toUpperCase())
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase())
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        setWord(text.split(" ").length)
        if(event.target.value===''){
            setWord(0)
        }
        setRead(0.8*text.split(" ").length)
        if(event.target.value===''){
            setRead(0)
        }

    }
    const clearText=()=>{
        setText("")
        setRead(0) 
        setWord(0)
       }

    //for alternet alphabet capital
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }

    //for the remove extra space
    const extraSpaceRemove = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        }
    //copy to clipboard option:1
//   const handleCopy=()=>{

//     var text=document.getElementById("TextForm");
//     text.select();
//     navigator.clipboard.writeText(text.value);
//   }  
      //copy to clipboard option:2
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="TextForm" rows="4" value={text} onChange={handleOnChange} placeholder='Enter text here' ></textarea>
</div>
<button className ="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className ="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
<button className ="btn btn-primary mx-2" onClick={clearText}>Clear</button>
<div><button className ="btn btn-primary mx-2 my-2" onClick={onAlternatingCase}>Alternate</button>
<button className ="btn btn-primary mx-2 my-2" onClick={extraSpaceRemove}>Remove Extra space</button>
<button className ="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

</div>
</div>

<div className="container my-3">
    <h2>Your text summary</h2>
    {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
    <p>{word} words and {text.length} characters</p>
    {/* <p>{0.08*text.split(" ").length}Minutes to read</p> */}
    <p>{read} seconds to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

</>
  )
  }