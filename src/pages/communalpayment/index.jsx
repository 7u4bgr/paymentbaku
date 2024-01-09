import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon, HomeIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import Azeriqaz from '../../assets/images/qaz1.svg'
import Azersu from '../../assets/images/su1.svg'
import Azerisiq from '../../assets/images/isiq1.svg'
import NFC from '../../assets/images/nfc.svg'
import Probill from '../../assets/images/probill.svg'
import Karvan from '../../assets/images/karvan.svg'
import Grand from '../../assets/images/grand.svg'
const CommunalPayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "Azəriqaz",
      photo:`${Azeriqaz}`
    },
    {
      link:"/communalcheckpayment",
      name: "Azərsu",
      photo:`${Azersu}`
    },
    {
      link:"/communalcheckpayment",
      name: "Azərişıq",
      photo:`${Azerisiq}`
    },
    {
      link:"/communalcheckpayment",
      name: "NFC Ödənişi",
      photo:`${NFC}`
    },
    {
      link:"/communalcheckpayment",
      name: "Probill",
      photo:`${Probill}`
    },
    {
      link:"/communalcheckpayment",
      name: "Karvan MMC",
      photo:`${Karvan}`
    },
    {
      link:"/communalcheckpayment",
      name: "Grand Hayat",
      photo:`${Grand}`
    },
    {
      link:"/communalcheckpayment",
      name: "Abu Arena",
      photo:`${Probill}`
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
              <h2>Kommunal</h2>
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
          <Link to={"/communalcheckpayment"} className={styles.homes}>
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

export default CommunalPayment;
