import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './style.css';



const Modal = (props) => {
        const {title, summary, auther, closeHandle,_id}=props
    return (
        <React.Fragment>
            <div className="backgroundcss"></div>
            <div className="container">
                <div className="title">{title}</div>
                <i style={{fontSize:"8px",fontFamily:"monospace"}}>Book id:{_id}</i>
                <CloseIcon onClick={closeHandle} style={{ position: "absolute", top: "8px", right: "10px", cursor: "pointer", fontSize: "14px" }} />
                { summary? <p>{summary
                }</p> : <p className="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>}
                <h4 style={{fontSize:"10px", fontFamily:"sans-serif"}}>Auther: {auther}</h4>
            </div>
        </React.Fragment>
    )
}

export default Modal