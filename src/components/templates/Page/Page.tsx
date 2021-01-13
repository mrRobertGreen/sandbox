import React, {FC} from "react";
import "./styles.scss"

type PropsT = {

}

const Page: FC<PropsT> = ({children}) => {
   return (
      <div className={"page"}>
         {children}
      </div>
   )
}

export {
   Page
}
