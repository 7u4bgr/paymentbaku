import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import {BackIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import Connect from '../../assets/images/connect.svg'
import AileTV from '../../assets/images/ailetv.svg'
import BlueTV from '../../assets/images/bluetv.svg'
import ClipTV from '../../assets/images/cliptv.svg'
import CityTV from '../../assets/images/tvcity.svg'
import KATV from '../../assets/images/katv.svg'
import SmartOD from '../../assets/images/smartod.svg'
const TvPayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "Connect",
      photo:`${Connect}`
    },
    {
      link:"/communalcheckpayment",
      name: "Ailə TV",
      photo:`${AileTV}`
    },
    {
      link:"/communalcheckpayment",
      name: "BlueTV",
      photo:`${BlueTV}`
    },
    {
      link:"/communalcheckpayment",
      name: "CLİP TV",
      photo:`${ClipTV}`
    },
    {
      link:"/communalcheckpayment",
      name: "City TV",
      photo:`${CityTV}`
    },
    {
      link:"/communalcheckpayment",
      name: "KATV1 TV",
      photo:`${KATV}`
    },
    {
      link:"/communalcheckpayment",
      name: "SmartOD TV",
      photo:`${SmartOD}`
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
              <h2>TV</h2>
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

export default TvPayment;
