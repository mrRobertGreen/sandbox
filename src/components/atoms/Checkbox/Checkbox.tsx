import React, {FC} from "react";
import "./styles.scss"

type PropsT = {
   isChecked?: boolean
   label?: string
   toggle?: () => void
}

const Checkbox: FC<PropsT> = ({
                                 label,
                                 toggle,
                                 isChecked
                              }) => {

   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
      if (toggle) toggle()
   }

   return (
      <label className="checkbox">
         <input className="checkbox__input" value="" type="checkbox" checked={isChecked} onChange={onChange }/>
         <svg className="checkbox__check" width="24" height="24">
            <polyline points="20 6 9 17 4 12"/>
         </svg>
         {label && <div className={"checkbox__text"}>
            {label}
			</div>}
      </label>
   )
}

export {
   Checkbox
}