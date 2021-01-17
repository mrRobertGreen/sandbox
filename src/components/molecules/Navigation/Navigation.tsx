import React, {FC} from "react";
import "./styles.scss"
import {Label} from "../../atoms/Label/Label";
import {Link} from "react-router-dom";

type PropsT = {}

const Navigation: FC<PropsT> = ({}) => {
   return (
      <div className={`nav`}>
         <div className="nav__item">
            <Link to={"/home"}>
               <Label size={"large"}>
                  Домой
               </Label>
            </Link>
         </div>
         <div className="nav__item">
            <Link to={"/statistics"}>
               <Label size={"large"}>
                  Статистика
               </Label>
            </Link>
         </div>
         <div className="nav__item">
            <Link to={"/about"}>
               <Label size={"large"}>
                  О нас
               </Label>
            </Link>
         </div>
      </div>
   )
}

export {
   Navigation
}
