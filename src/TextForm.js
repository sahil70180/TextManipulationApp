import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    // function for changing text to lowercase 
    const handleupclick = () => {
        // console.log("upercase was clicked" + text);
        let UPPERCASE = text.toUpperCase();
        setText(UPPERCASE)
        props.showalert("Converted to Uppercase", "success")
    }

    // function for changing text to lowercase 
    const handledownclick = () => {
        let lowercase = text.toLowerCase();
        setText(lowercase)
        props.showalert("Converted to lowercase", "success")

    }
    // function for changing text to lowercase 
    const handleclearclick = () => {
        let cleartext = "";
        setText(cleartext)
        props.showalert("Textarea cleared", "success")

    }
    // function for copy the content of the box
    // const handlecopy = () => {
    //     let text = document.getElementById("mybox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value)
    // }
    const handlExtraspace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra spaces removed", "success")
    }
    const handleonchange = (event) => {
        // console.log("on chaneg handler")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary my-2' onClick={handleupclick}>CONVERT TO UPPERCASE</button>
                <button className='btn btn-primary my-2 mx-3' onClick={handledownclick}>convert to lowercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleclearclick}>Clear Text</button>
                {/* <button className='btn btn-primary my-2 mx-2' id="mybox" onClick={handlecopy}>Click to Copy Text</button> */}
                <button className='btn btn-primary my-2 mx-2' id="mybox" onClick={handlExtraspace}>Remove Extra Spaces</button>
            </div >

            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text Summary</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p>You can read above paragraph within {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter seomething in the TextArea to Preview it here"}</p>

            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string,
}
TextForm.defaultProps = {
    heading: "Set title here",
}
