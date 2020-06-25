import React, { useRef, useEffect, useCallback, FormEventHandler } from "react"
import "../styles/components/modal.scss"
import Icon from "@mdi/react"
import { mdiClose } from "@mdi/js"

interface IModal {
  closeModal: Function
  children: any
  title: string
  onSubmit: Function
}

const Modal: React.FC<IModal> = ({ children, closeModal, title, onSubmit }) => {
  const refs: any = useRef()

  const close = useCallback((): void => {
    refs.current.classList.remove("active")
    setTimeout(() => {
      const html: any = document.querySelector("html")
      html.style.overflowY = "auto"
      closeModal()
    }, 500)
  }, [closeModal])

  const submit: FormEventHandler = () => {
    onSubmit()
      .then((resp:any) => {
        close()
      })
      .catch((e: any) => console.warn)
  }

  useEffect(() => {
    let current = true
    let esc: any
    if (current) {
      esc = (e: any) => {
        const keyVal = e.which || e.keyCode || e.charCode || 0
        if (keyVal && keyVal === 27) {
          close()
        }
      }
      document.addEventListener("keydown", esc)
    }

    return () => {
      current = false
      document.removeEventListener("keydown", esc)
    }
  }, [close])
  return (
    <div className="modal active" ref={refs}>
      <div className="modal-container">
        <div className="header">
          <button className=" btn-close" onClick={close}>
            <Icon path={mdiClose} color="#222" size={0.85} />
          </button>
          <h3>{title}</h3>
        </div>
        {children}
        {closeModal && (
          <div className="footer">
            <button className="btn btn-md btn-dark" onClick={submit}>
              Show
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Modal
