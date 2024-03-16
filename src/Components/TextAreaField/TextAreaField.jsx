import React from 'react'
import './textarea.css'
function TextAreaField({ label, value, onChange,required }){
    return(
    <div>
        <label>{label}</label>
        <textarea className="message" cols="30" rows="3"placeholder="Write Somthing.." value={value} onChange={onChange} required={required}>

    </textarea>
    </div>
    )
}
export default TextAreaField