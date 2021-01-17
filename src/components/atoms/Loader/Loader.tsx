import React, {FC} from "react";
import "./styles.scss"

type LoaderPropsT = {}

const Loader: FC<LoaderPropsT> = ({}) => {
   return (
      <div className={`loader`}>
            Loading...
      </div>
   )
}

export {
   Loader
}
