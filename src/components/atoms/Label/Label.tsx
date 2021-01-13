import React, {FC} from "react";
import "./styles.scss"

type PropsT = {
   size?: "large" | "small" | "medium"
   color?: "default" | "primary"
   isCrossedOut?: boolean
}

const Label: FC<PropsT> = ({
                              children = "Label",
                              size = "medium",
                              isCrossedOut,
                              color = "default"
                           }) => {

   return (
      <p className={`label ${color} ${size} ${isCrossedOut ? "crossed-out" : ""}`}>
         {children}
      </p>
   )
}

export {
   Label
}