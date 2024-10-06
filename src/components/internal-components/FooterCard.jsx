import React, {useState} from 'react';
import {motion} from "framer-motion";
import '../../styles/FooterCard.css';
const FooterCard = ({text_to_print}) => {
    return(
        <motion.div className="footer_card_container">

        <div className="footer_card_content">
            <p>{text_to_print}</p>
        </div>
        </motion.div>
    )
}

export default FooterCard;