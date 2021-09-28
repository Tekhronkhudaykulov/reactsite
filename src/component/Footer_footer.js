import React from "react";
import footer_icon_vk from '../icons/footer__soc-buttons.png'

const Footer_footer = () => {
    return (
        <div className="Footer_footer_bg">
            <div className="container">
                <div className="footer_item">
                    <div className="footer_item_text">
                    <h2>Иванов Иван</h2>
                    <p>(с) 2018. Все права защищены.</p>
                    </div>
                <div className="logo">
                    <a href=""><img src={footer_icon_vk} alt="" /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer_footer;