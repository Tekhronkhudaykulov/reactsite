import React from "react";
import centerImgBg from '../icons/Vector.png'
const Main_center_footer = () => {
    return (
        <div className="main_center_footer_bg">
            <div className="container">
                <div className="main_top top">
                    <h2>Как я работаю</h2>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <div className="main_center_img_bg">
                        <img src={centerImgBg} alt="" />
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Main_center_footer;