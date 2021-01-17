import React, {FC} from "react";
import "./styles.scss"
import {Header} from "../../organisms/Header/Header";

type PropsT = {

}

const Page: FC<PropsT> = ({children}) => {
   return (
      <div className={"page"}>
         <Header/>
         <div className="page-container">
            {children}
         </div>

      </div>
   )
}

export {
   Page
}
