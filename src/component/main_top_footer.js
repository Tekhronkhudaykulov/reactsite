import React from "react";
import Main_top_footer_icon from "./main_top_footer_icon";
import '../styles/style.scss';


const Main_top_footer = () => {
    return (
       <>
       <div className="main_top_footer_bg">
            <div className="container">
                <div className="main_top_footer2">
                    <Main_top_footer_icon />
                    <Main_top_footer_icon />
                    <Main_top_footer_icon />
                    <Main_top_footer_icon />
                    <Main_top_footer_icon />
                    <Main_top_footer_icon />
                </div>
               
            </div>
       </div>
       </>
       
        
    )
}

export default Main_top_footer;