import React from "react"
import "./box.css"
import { BoxAction } from "./BoxAction"
import { BoxCheckMarks } from "./BoxCheckMarks"

export default function Box({ props }) {
  // console.log({props})
  let actionButton, checkMarks
  if (props.buttonType && props.buttonText) {
    actionButton = <BoxAction {...props} />
  }
  if (props.checkMarks) {
    checkMarks = <BoxCheckMarks {...props} />
  }

  return (
    <div className="box">
      <div className="topWrapper">
        <div className={"mainMessage message"}>{props.mainMessage}</div>
        <div className={"message subMessage"}>{props.subMessage}</div>
      </div>
      <div className="bottomWrapper">
        {checkMarks}
        {actionButton}
      </div>
    </div>
  )
}
