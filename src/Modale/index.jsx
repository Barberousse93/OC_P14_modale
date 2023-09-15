/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "./style.css"

function Modal(props) {
  const [buttonColor, setButtonColor] = useState("#f00")
  const [modalWidth, setModalWidth] = useState("50%")
  const [modalHeight, setModalHeight] = useState("200px")
  const [textColor, setTextColor] = useState("#000")
  const [modalBG, setModalBG] = useState("#fff")
  const [textSize, setTextSize] = useState("3rem")

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)

    if (props.buttonColor) {
      setButtonColor(props.buttonColor)
    }
    if (props.modalWidth) {
      setModalWidth(props.modalWidth)
    }
    if (props.modalHeight) {
      if (props.modalHeight.endsWith("px")) {
        setModalHeight(props.modalHeight)
      }
    }
    if (props.textColor) {
      setTextColor(props.textColor)
    }
    if (props.modalBG) {
      setModalBG(props.modalBG)
    }
    if (props.textSize) {
      setTextSize(props.textSize)
    }
  }, [])

  const detectKeyDown = (e) => {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      props.setIsOpen(false)
      document.removeEventListener("keydown", detectKeyDown, true)
    }
  }

  return (
    <div id="overlay" onClick={() => props.setIsOpen(false)}>
      <div
        id="modale"
        style={{
          width: modalWidth,
          height: modalHeight,
          backgroundColor: modalBG,
        }}
      >
        <h1
          id="modalText"
          style={{
            lineHeight: modalHeight,
            color: textColor,
            fontSize: textSize,
          }}
        >
          {props.text ? props.text : "Texte par défaut"}
        </h1>
        <button
          id="bouton"
          onClick={() => props.setIsOpen(false)}
          style={{
            backgroundColor: buttonColor,
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
