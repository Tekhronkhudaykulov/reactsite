import React from "react";
import '../styles/style.scss';
import img1 from '../icons/WD.png';
import img2 from '../icons/Frame.png'

const Header_top = () => {
    return (
        <div className="header_bg">
            <div className="container">
                <div className='header_top_obshi'>
                    <a href="#"><img src={img1} alt="" /></a>
                        <div className="header_top_obshi2">
                        <a href="">ГЛАВНАЯ</a>
                        <a href="">ОБ АВТОРЕ</a>
                        <a href="">РАБОТЫ</a>
                        <a href="">ПРОЦЕСС</a>
                        <a href="">КОНТАКТЫ</a>
                        </div>
                    </div>
                    <div className="header_center">
                        <img src={img2} alt="" />
                        <div className="header_center2">
                            <h2>Дизайн и верстка</h2>
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                                <a href="">НАПИСАТЬ МНЕ</a>
                    </div>
                </div>
            </div>
        </div>
       
     
    )
}
export default Header_top;

