import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon, HeartIcon, SearchIcon } from "../../icons";
import { Link } from "react-router-dom";
import BankCards from "../../assets/images/bankcards.png";
import FAQ from "../../assets/images/faq.png";
import Destek from "../../assets/images/destek.png";
const UserProfile = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <Wrapper>
          <div onClick={goBack} className={styles.backicon}>
            <BackIcon />
          </div>
          <div className={styles.odenisler}>
            <div className={styles.text}>
              <h2>Digər</h2>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className={styles.control}>
        <Wrapper>
          <div className={styles.controlbox}>
            <div className={styles.scrolls}>
              <Link to={"/"} className={styles.homes}>
                <div className={styles.homecontrol}>
                  <div className={styles.homeicon}>
                    <HeartIcon />
                  </div>
                  <div className={styles.hometext}>
                    <h2>Tez-tez edilən ödənişlər</h2>
                  </div>
                </div>
                <div className={styles.rightarrow}></div>
              </Link>
              <Link to={"/"} className={styles.mobil}>
                <div className={styles.mobilcontrol}>
                  <div className={styles.mobilicon}>
                    <img src={BankCards} alt="" />
                  </div>
                  <div className={styles.mobiltext}>
                    <h2>Kartlarım</h2>
                  </div>
                </div>
                <div className={styles.rightarrow}></div>
              </Link>
              <Link to={"/"} className={styles.bank}>
                <div className={styles.bankcontrol}>
                  <div className={styles.bankicon}>
                    <img src={FAQ} alt="" />
                  </div>
                  <div className={styles.banktext}>
                    <h2>FAQ</h2>
                  </div>
                </div>
                <div className={styles.rightarrow}></div>
              </Link>
              <Link to={"/"} className={styles.sigorta}>
                <div className={styles.sigortacontrol}>
                  <div className={styles.sigortaicon}>
                    <img src={Destek} alt="" />
                  </div>
                  <div className={styles.sigortatext}>
                    <h2>Dəstək</h2>
                  </div>
                </div>
                <div className={styles.rightarrow}></div>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default UserProfile;
