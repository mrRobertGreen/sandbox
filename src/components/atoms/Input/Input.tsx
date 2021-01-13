import React, {DetailedHTMLProps, FC, InputHTMLAttributes, LegacyRef} from "react";
import "./styles.scss"

type PropsT = {
   inputRef?: LegacyRef<HTMLInputElement>
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<PropsT> = ({
                              inputRef,
                              ...rest
                           }) => {

   return <input className="input" ref={inputRef}{...rest}/>
}

export {
   Input
}