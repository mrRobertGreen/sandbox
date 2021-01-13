import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import "./styles.scss"

export type StyleModT = "primary" | "secondary" | "default"

type PropsT = {
   mod?: StyleModT
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FC<PropsT> = ({
                               children = "Button",
                               mod = "default",
                               ...rest
                            }) => {

   return (
      <button className={`button ${mod}`} {...rest}>
         {children}
      </button>)
}

export {
   Button
}