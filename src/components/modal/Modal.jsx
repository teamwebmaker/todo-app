import { useState } from "react"

function Modal(props){
    const {title, children, closeModal} = props
    const [classes, setClasses] =useState(["modal", "fade"])
    setTimeout(() => {
        setClasses([...classes, "show"])
    }, 300)
    return(
    <div className={classes.join(" ")} tabindex="-1" style={{display: "block"}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </div>
    )
}
export default Modal