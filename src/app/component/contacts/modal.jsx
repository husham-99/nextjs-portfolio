import module from './contacts.module.css'

const Modal = ({ isVisible, errorMessage = null }) => {
    if (isVisible) {
        return (
            <div className={module.modal}>
                <div className={module.modalContent}>
                    <h1 style={{ color: errorMessage ? "red" : "green" }}>{errorMessage !== null ? errorMessage : "The message has been submited successfully 😊😊"}</h1>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }

}

export default Modal