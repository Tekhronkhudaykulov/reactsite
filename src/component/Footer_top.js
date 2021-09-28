import React from "react";

const Footer_top = () => {
    return (
        <div className = "bg_footer">
            <div className="container">
                <div className="footer_top_obshi">
                    <h2>Хотите веб-сайт?</h2>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <div className="footer_input">
                        <input type="text" className="first_input" placeholder="Ваше имя"/>
                        <input type="text" placeholder="Ваш e-mail"/>
                    </div>
                    <input type="text" placeholder="Сообщение"/>
                    <a href="#">ОТПРАВИТЬ</a>
                </div>
            </div>
        </div>
    )   
}

export default Footer_top;