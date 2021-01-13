import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../pages/Home";

const Router: FC = ({}) => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path={"/home"} component={Home}/>
            <Route path={"/"} component={() => <Redirect to={"/home"}/>}/>
         </Switch>
      </BrowserRouter>
   )
}

export {
   Router
}
