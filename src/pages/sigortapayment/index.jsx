import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon, HomeIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import ATA from '../../assets/images/ata.svg'
import AzSigorta from '../../assets/images/azsigorta.svg'
import Atesgah from '../../assets/images/atesgah.svg'
import Mega from '../../assets/images/megasigorta.svg'
import Baki from '../../assets/images/bakisigorta.svg'
import Pasha from '../../assets/images/pasasigorta.svg'
import StandartSigorta from '../../assets/images/standartsigorta.svg'
const SigortaPayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "Ata sığorta",
      photo:`${ATA}`
    },
    {
      link:"/communalcheckpayment",
      name: "AzSığorta ASC Yeni",
      photo:`${AzSigorta}`
    },
    {
      link:"/communalcheckpayment",
      name: "Atəşgah Sığorta",
      photo:`${Atesgah}`
    },
    {
      link:"/communalcheckpayment",
      name: "Meqa Sığorta",
      photo:`${Mega}`
    },
    {
      link:"/communalcheckpayment",
      name: "Bakı Sığorta",
      photo:`${Baki}`
    },
    {
      link:"/communalcheckpayment",
      name: "Paşa Sığorta",
      photo:`${Pasha}`
    },
    {
      link:"/communalcheckpayment",
      name: "Standart Sığorta ASC",
      photo:`${StandartSigorta}`
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
              <h2>Sığorta</h2>
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

export default SigortaPayment;
