import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import {BackIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import AZEURO from '../../assets/images/mhmazeuro.svg'
import AzTelecom from '../../assets/images/baktelecom.svg'
import Naxcivan from '../../assets/images/naxcivan.svg'
import SmartSystems from '../../assets/images/smartsystem.svg'
const PhonePayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "MHM_AZEUROTEL(stasionar rabitə)",
      photo:`${AZEURO}`
    },
    {
      link:"/communalcheckpayment",
      name: "AZTELEKOM(stasionar rabitə)",
      photo:`${AzTelecom}`
    },
    {
      link:"/communalcheckpayment",
      name: "Naxcivan Telefon",
      photo:`${Naxcivan}`
    },
    {
      link:"/communalcheckpayment",
      name: "Smart System İstifadəçi adı",
      photo:`${SmartSystems}`
    },

  
  ]);
  const goBack=()=>{
    window.history.back()
  }
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <Wrapper>
        <div onClick={goBack} className={styles.backicon}>
          <BackIcon/>
          </div>
          <div className={styles.odenisler}>
            <div className={styles.text}>
              <h2>Telefon</h2>
            </div>
            <div className={styles.input}>
              <SearchIcon />
              <input placeholder="Axtarış..." type="text" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.xidmetler}>
        <Wrapper>
          <h2>Xidmətlər</h2>
        </Wrapper>
      </div>
      <div className={styles.control}>
         <Wrapper>

      <div className={styles.controlbox}>
        {data?.map((item) => (
          <Link to={item.link} className={styles.homes}>
            <div className={styles.homecontrol}>
              <div className={styles.homeicon}>
                <img src={item.photo} alt="" />
              </div>
              <div className={styles.hometext}>
                <h2>{item.name}</h2>
               
              </div>
            </div>
            <div className={styles.rightarrow}>
              <RightArrow />
            </div>
          </Link>
        ))}
      </div>
      </Wrapper>
      </div>
     
    </div>
  );
};

export default PhonePayment;
