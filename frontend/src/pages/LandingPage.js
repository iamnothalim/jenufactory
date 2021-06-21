import React from "react";
import {withRouter} from "react-router";
import HeaderContainer from "../containers/HeaderContainer";

function LandingPage(){
    return(
        <div>
            <HeaderContainer/>
            <h2>시작페이지</h2>
            <p>나.. 랄부 떨려....</p>
        </div>
    );
};

export default withRouter(LandingPage);