import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon, HomeIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import Kapital from '../../assets/images/kapital.svg'
import LeoBank from '../../assets/images/leobank.svg'
import UniBank from '../../assets/images/unibank.svg'
import ABB from '../../assets/images/abb.svg'
import Rabita from '../../assets/images/rabita.svg'
import YeloBank from '../../assets/images/yelo.svg'
import ASB from '../../assets/images/asb.svg'
import AzKredit from '../../assets/images/azkredit.svg'
const BankPayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "Kapital Bank",
      photo:`${Kapital}`
    },
    {
      link:"/communalcheckpayment",
      name: "LeoBank",
      photo:`${LeoBank}`
    },
    {
      link:"/communalcheckpayment",
      name: "Unibank",
      photo:`${UniBank}`
    },
    {
      link:"/communalcheckpayment",
      name: "ABB",
      photo:`${ABB}`
    },
    {
      link:"/communalcheckpayment",
      name: "Rabita Bank",
      photo:`${Rabita}`
    },
    {
      link:"/communalcheckpayment",
      name: "Yelo Bank",
      photo:`${YeloBank}`
    },
    {
      link:"/communalcheckpayment",
      name: "ASB Bank",
      photo:`${ASB}`
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
              <h2>Bank</h2>
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

export default BankPayment;
