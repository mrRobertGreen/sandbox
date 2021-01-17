import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {About} from "../pages/About";
import {Statistics} from "../pages/Statistics";
import {Home} from "../pages/Home";

const Router: FC = ({}) => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path={"/home"} component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/statistics"} component={Statistics}/>
            <Route path={"/"} component={() => <Redirect to={"/about"}/>}/>
         </Switch>
      </BrowserRouter>
   )
}

export {
   Router
}
