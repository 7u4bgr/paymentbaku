import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { NotficationIcon, UserIcon } from "../../icons";
import Eyes from "../../assets/images/eyes.png";
import Azercell from "../../assets/images/azercell.svg";
import Nar from "../../assets/images/nar.svg";
import Kapital from "../../assets/images/kapital.svg";
import LeoBank from "../../assets/images/leobank.svg";
import AileTV from "../../assets/images/ailetv.svg";
import AzerSu from "../../assets/images/su1.svg";
const Home = () => {
  const [data, setData] = useState([
    {
      photo: `${Azercell}`,
    },
    {
      photo: `${Nar}`,
    },
    {
      photo: `${Kapital}`,
    },
    {
      photo: `${LeoBank}`,
    },
    {
      photo: `${AileTV}`,
    },
    {
      photo: `${AzerSu}`,
    },
  ]);
  return (
    <div className={styles.background}>
      <div className={styles.users}>
        <Wrapper>
          <div className={styles.controltext}>
            <div className={styles.textleft}>
              <div className={styles.icon}>
                <UserIcon />
              </div>
              <div className={styles.icontext}>
                <h2>Salam,</h2>
                <h2>Hörmətli istifadəçi</h2>
              </div>
            </div>
            <div className={styles.textright}>
              <NotficationIcon />
            </div>
          </div>
          <div className={styles.wallet}>
            <h3>Balans</h3>
            <div>
              <img src={Eyes} alt="" />
            </div>
            <h2>17,13 Azn</h2>
          </div>
        </Wrapper>
      </div>
      <div className={styles.payments}>
        <Wrapper>
          <div className={styles.controlpayments}>
            <div className={styles.paymentsheader}>
              <h2>Tez-tez edilən ödənişlər</h2>
            </div>
            <div className={styles.maps}>
              {data?.map((item) => (
                <img src={item.photo} alt="" />
              ))}
            </div>
            <div className={styles.lastpayments}>
              <div className={styles.lastheaders}>
                <h2>Son ödənişlər</h2>
              </div>
              <div className={styles.emptyinfo}>
                <h2>Əməliyyat tapılmadı</h2>
                <p>
                  Ödənişlər və köçürmələrin burada əks oluncacaq. Görünür, heç
                  bir əməliyyat etməmisən.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Home;
