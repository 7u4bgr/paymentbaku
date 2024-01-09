import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon } from "../../icons";
import { Link } from "react-router-dom";

const CheckPayment = () => {
  const [value, setValue] = useState("");
  const [mebleg, setMebleg] = useState(0);

  const handlePhoneNumberChange = (event) => {
    setValue(event.target.value);
  };
  const handleMeblegChange = (event) => {
    setMebleg(event.target.value);
  };

  const goBack = () => {
    window.history.back(); // Bu metot bir önceki sayfaya döner
  };

  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <Wrapper>
          <div className={styles.control1}>
            <div onClick={goBack}>
              <BackIcon />
            </div>

            <h2>Telefon nömrəsini daxil et</h2>
          </div>
        </Wrapper>
      </div>
      <div className={styles.flex}>
        <Wrapper>
          <div className={styles.flex1}>
            <div className={styles.payment}>
              <div className={styles.number}>
                <h2>+994</h2>
                <input
                  placeholder="501234567"
                  value={value}
                  onChange={handlePhoneNumberChange}
                  type="number"
                />
              </div>
              <div className={styles.mebleg}>
                <h2>Məbləğ</h2>
                <input
                  value={mebleg}
                  onChange={handleMeblegChange}
                  placeholder="min-1 Azn"
                  type="number"
                />
              </div>
            </div>
            <div className={styles.check}>
              {value.length === 9 && mebleg > 0 ? (
                <Link to={"/suprised"}>Təsdiqlə</Link>
              ) : (
                (<Link to={"/check"}>Məlumat Səhvdir</Link>)
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default CheckPayment;