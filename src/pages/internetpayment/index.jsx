import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon, HomeIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import SmartOnline from '../../assets/images/smartint.svg'
import AdoNET from '../../assets/images/adonet.svg'
import AileNET from '../../assets/images/ailenet.svg'
import AlfaNET from '../../assets/images/alfanet.svg'
import AzerOnline from '../../assets/images/azeronline.svg'
import Azeuro from '../../assets/images/azeuroonline.svg'
import ArtKom from '../../assets/images/artkom.svg'
import AzKredit from '../../assets/images/azkredit.svg'
const InternetPayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "SmartOnline",
      photo:`${SmartOnline}`
    },
    {
      link:"/communalcheckpayment",
      name: "Adonet",
      photo:`${AdoNET}`
    },
    {
      link:"/communalcheckpayment",
      name: "AiləNET",
      photo:`${AileNET}`
    },
    {
      link:"/communalcheckpayment",
      name: "Alfanet TV",
      photo:`${AlfaNET}`
    },
    {
      link:"/communalcheckpayment",
      name: "Azeronline",
      photo:`${AzerOnline}`
    },
    {
      link:"/communalcheckpayment",
      name: "Azeurotel",
      photo:`${Azeuro}`
    },
    {
      link:"/communalcheckpayment",
      name: "ArtKom",
      photo:`${ArtKom}`
    },
    {
      link:"/communalcheckpayment",
      name: "Azkredit",
      photo:`${AzKredit}`
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
              <h2>İnternet</h2>
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

export default InternetPayment;
