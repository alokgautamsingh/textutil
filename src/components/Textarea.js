import React, {useState} from 'react'

export default function Textarea(props) {
    const handleUpclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handlelowclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handlechange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('enter the text here');
  return (
    <>
    <div className="container">
 <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control"  value = {text} onChange= {handlechange} id="mybox" rows="8"></textarea>
</div>
  <button className="mybutton  mx-2 "  onClick={handleUpclick}>Convert to uppercase</button>
  <button className="mybutton mx-2 " onClick={handlelowclick}>Convert to lowercase</button>
    </div>
    <div className="container">
        <p> words are {text.split(" ").length} and characters are {text.length}</p>
        <p> times to read {0.08 *text.split(" ").length}  minutes</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
