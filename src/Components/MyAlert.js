import React from "react";

export const MyAlert = ({text}) => {
    return(
        <div className="alert alert-primary" role="alert">
            {text}
        </div>
    )
}
