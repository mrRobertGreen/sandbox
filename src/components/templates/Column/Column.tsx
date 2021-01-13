import React, {FC} from "react";
import "styles.scss"

type PropsT = {
   
}

const Column: FC<PropsT> = ({children}) => {
   return (
      <div className={"column"}>
         {children}
      </div>
   )
}

export {
   Column
}
