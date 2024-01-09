import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { BackIcon } from "../../icons";
import { Link } from "react-router-dom";

const CommunalCheckPayment = () => {
  const [value, setValue] = useState("");
  const [mebleg, setMebleg] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

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

            <h2>Müştəri kodunu daxil edin</h2>
          </div>
        </Wrapper>
      </div>
      <div className={styles.flex}>
        <Wrapper>
          <div className={styles.flex1}>
            <div className={styles.payment}>
              <div className={styles.number}>
                <h2>Kod:</h2>
                <input
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                  placeholder="14 rəqəmli kod"
                  value={value}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div className={styles.mebleg}>
                <h2>Məbləğ</h2>
                <input
                  value={mebleg}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                  onChange={handleMeblegChange}
                  placeholder="min-1 Azn"
                 
                />
              </div>
            </div>
            <div className={styles.check}>
            {value.length === 14 && mebleg > 0 ? (
        <Link to={"/suprised"}>Təsdiqlə</Link>
      ) : (
        <button className={styles.button1} onClick={() => setShowAlert(true)}>Təsdiqlə</button>
      )}
            </div>
              {showAlert && (
      <div className={styles.alert}>
        <button onClick={() => setShowAlert(false)}></button>
        <h2> Telefon nömrəsi 14 rəqəmli olmalıdır ve məbləğ min-1 Azn olmalıdır.</h2>
      
      </div>
    )} 
          </div>
        </Wrapper>
       
      </div>
    </div>
  );
};

export default CommunalCheckPayment;
