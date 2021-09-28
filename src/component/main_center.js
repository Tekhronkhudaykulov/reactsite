import React from "react";
import mainCenterImg  from '../img/Rectangle 3.png';

const Main_center = () => {
    return (
            <div className="main_center_bg">
                <div className="container">
                    <div className="main_center_obshi">
                        <div className=" main_center_text">
                            <h2>Мои навыки</h2>
                            <p>Adobe Photoshop</p>
                            <div className="result">
                                <span></span>
                            </div>
                            <p>Adobe Photoshop</p>
                            <div className="result">
                                <span></span>
                            </div>
                            <p>Adobe Photoshop</p>
                            <div className="result">
                                <span></span>
                            </div>
                        </div>
                        <div className="main_center_img">
                            <img src={mainCenterImg} alt="" />
                        </div>
                    </div>
                   
                </div>
            </div>
         
    )
}

export default Main_center;