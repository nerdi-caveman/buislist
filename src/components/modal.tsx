import React, { useRef, useEffect } from "react";
import "../styles/components/modal.scss";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

interface IModal {
  closeModal: Function;
  children: React.FC<any>;
  title: string;
  onSubmit?: Function;
}

const Modal: React.FC<any> = ({
  children,
  closeModal,
  title,
  onSubmit,
}: IModal) => {
  const refs: any = useRef();

  useEffect(() => {
    let current = true;
    let esc: any;
    if (current) {
      esc = (e: any) => {
        const keyVal = e.which || e.keyCode || e.charCode || 0;
        if (keyVal && keyVal === 27) {
          refs.current.classList.remove("active");
          setTimeout(() => {
            const html: any = document.querySelector("html");
            html.style.overflowY = "auto";
            closeModal();
          }, 500);
        }
      };
      document.addEventListener("keydown", esc);
    }

    return () => {
      current = false;
      document.removeEventListener("keydown", esc);
    };
  });

  return (
    <div className="modal active" ref={refs}>
      <div className="modal-container">
        <div className="header">
          <button
            className=" btn-close"
            onClick={() => {
              refs.current.classList.remove("active");
              setTimeout(() => {
                const html: any = document.querySelector("html");
                html.style.overflowY = "auto";
                closeModal();
              }, 500);
            }}
          >
            <Icon path={mdiClose} color="#222" size={0.85} />
          </button>
          <h3>{title}</h3>
        </div>
        <div className="container">{children}</div>

        {onSubmit && (
          <div className="footer">
            <button
              className="btn btn-md btn-dark"
              onClick={() => {
                onSubmit();
              }}
            >
              Show
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
