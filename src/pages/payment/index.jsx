import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BankIcon, HomeIcon, InternetIcon, MobilIcon, RightArrow, SearchIcon, SigortaIcon, TelefonIcon, TvIcon } from "../../icons";
import { Link } from "react-router-dom";
import Shopping from '../../assets/images/shopping.png'
const Payments = () => {
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <Wrapper>
          <div className={styles.odenisler}>
            <div className={styles.text}>
              <h2>Ödənişlər</h2>
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
            <div className={styles.scrolls}>

            <Link to={"/kommunal"} className={styles.homes}>
              <div className={styles.homecontrol}>
                <div className={styles.homeicon}>
                  <HomeIcon />
                </div>
                <div className={styles.hometext}>
                  <h2>Kommunal</h2>
                  <p>8 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/mobil"} className={styles.mobil}>
              <div className={styles.mobilcontrol}>
                <div className={styles.mobilicon}>
                  <MobilIcon/>
                </div>
                <div className={styles.mobiltext}>
                  <h2>Mobil</h2>
                  <p>3 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/bank"} className={styles.bank}>
              <div className={styles.bankcontrol}>
                <div className={styles.bankicon}>
                  <BankIcon/>
                </div>
                <div className={styles.banktext}>
                  <h2>Bank</h2>
                  <p>8 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/sigorta"} className={styles.sigorta}>
              <div className={styles.sigortacontrol}>
                <div className={styles.sigortaicon}>
                  <SigortaIcon/>
                </div>
                <div className={styles.sigortatext}>
                  <h2>Sığorta</h2>
                  <p>7 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/tv"} className={styles.tv}>
              <div className={styles.tvcontrol}>
                <div className={styles.tvicon}>
                 <TvIcon/>
                </div>
                <div className={styles.tvtext}>
                  <h2>TV</h2>
                  <p>7 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/internet"} className={styles.internet}>
              <div className={styles.internetcontrol}>
                <div className={styles.interneticon}>
                <InternetIcon/>
                </div>
                <div className={styles.internettext}>
                  <h2>İnternet</h2>
                  <p>8 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/phone"} className={styles.telefon}>
              <div className={styles.telefoncontrol}>
                <div className={styles.telefonicon}>
               <TelefonIcon/>
                </div>
                <div className={styles.telefontext}>
                  <h2>Telefon</h2>
                  <p>4 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            <Link to={"/shopping"} className={styles.magaza}>
              <div className={styles.magazacontrol}>
                <div className={styles.magazaicon}>
               <img src={Shopping} alt="" />
                </div>
                <div className={styles.magazatext}>
                  <h2>Mağaza</h2>
                  <p>7 Xidmət</p>
                </div>
              </div>
              <div className={styles.rightarrow}>
                  <RightArrow/>
              </div>
            </Link>
            </div>
   
         
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Payments;
