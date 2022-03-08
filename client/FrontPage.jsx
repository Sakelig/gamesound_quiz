import {Link} from "react-router-dom";
import React from "react";

export function FrontPage() {
    return (
        <div>
            <div>
                <Link to={"/login"}>Login</Link>
            </div>
            <div>
                <Link to={"/quiz"}>Quiz</Link>
            </div>
        </div>
    )
}