import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import { HistoryIcon, MenuIcon, OtherIcon, PaymentIcon } from "../../../icons";
import Plus from "../../../assets/images/plusmath.png";
import { Link } from "react-router-dom";
import OtherImages from '../../../assets/images/otherimages.png'
const Footer = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
         
  

          <Link to={'/'} className={styles.menu}>
            <MenuIcon />
            <h2>Ana səhifə</h2>
          </Link>
          <Link to={"/payments"} className={styles.payment}>
            <PaymentIcon />
            <h2>Ödənişlər</h2>
          </Link>
   
          
          

          <Link to={"/add"} className={styles.addplus}>
            <div className={styles.images}>
              <img src={Plus} alt="" />
            </div>
          </Link>
         
          

          <Link to={"/history"} className={styles.history}>
              <HistoryIcon/>
              <h2>Tarixçə</h2>
          </Link>
          <Link to={"/user"} className={styles.other}>
             <OtherIcon/>
              <h2>Digər</h2>
          </Link>
          
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
