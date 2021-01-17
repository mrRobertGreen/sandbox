import React, {FC} from "react";
import "./styles.scss"
import {Navigation} from "../../molecules/Navigation/Navigation";

type PropsT = {}

const Header: FC<PropsT> = ({}) => {
   return (
      <div className={"header"}>
         <Navigation/>
      </div>
   )
}

export {
   Header
}
