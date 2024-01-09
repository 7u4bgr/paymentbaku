import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper'
import Verify from '../../assets/images/verified.png'
import { Link } from 'react-router-dom'
const SuprisedPayment = () => {
  return (
    <div className={styles.background}>
        <Wrapper>
            <div className={styles.control}>
                <div className={styles.check}>
                        <h2>Təsdiqləndi</h2>
                </div>
                <div  className={styles.images}>

                       <img src={Verify} alt="" />
                       <h2>Ödənişiniz uğurla təsdiqləndi.</h2>
                </div>
                <div className={styles.button}>
                    <Link to={"/"}>Bağla</Link>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default SuprisedPayment