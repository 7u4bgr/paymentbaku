import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import {BackIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import Azercell from '../../assets/images/azercell.svg'
import Bakcell from '../../assets/images/bakcell.svg'
import Nar from '../../assets/images/nar.svg'

const MobilPayment = () => {
  const [data, setData] = useState([
    {
      link:"/check",
      name: "Azercell",
      photo:`${Azercell}`
    },
    {
      link:"/check",
      name: "Bakcell",
      photo:`${Bakcell}`
    },
    {
      link:"/check",
      name: "Nar",
      photo:`${Nar}`
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
              <h2>Mobil</h2>
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

export default MobilPayment;
