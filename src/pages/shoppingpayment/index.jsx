import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon, HomeIcon, RightArrow, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import KontaktHome from '../../assets/images/kontakt.svg'
import Faberlic from '../../assets/images/faberlic.svg'
import Lalafo from '../../assets/images/lalafo.svg'
import TexnoPlus from '../../assets/images/texnoplus.svg'
import Alneo from '../../assets/images/alneo.svg'
import Inox from '../../assets/images/inox.svg'
import MusicGallery from '../../assets/images/musicgallery.svg'
const ShoppingPayment = () => {
  const [data, setData] = useState([
    {
      link:"/communalcheckpayment",
      name: "Kontakt Home",
      photo:`${KontaktHome}`
    },
    {
      link:"/communalcheckpayment",
      name: "Faberlic",
      photo:`${Faberlic}`
    },
    {
      link:"/communalcheckpayment",
      name: "Lalafo",
      photo:`${Lalafo}`
    },
    {
      link:"/communalcheckpayment",
      name: "TexnoPlus",
      photo:`${TexnoPlus}`
    },
    {
      link:"/communalcheckpayment",
      name: "Alneo",
      photo:`${Alneo}`
    },
    {
      link:"/communalcheckpayment",
      name: "İnox",
      photo:`${Inox}`
    },
    {
      link:"/communalcheckpayment",
      name: "Music Gallery",
      photo:`${MusicGallery}`
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
              <h2>Mağaza</h2>
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

export default ShoppingPayment;
