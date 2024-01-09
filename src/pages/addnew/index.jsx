import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper'
const AddNew = () => {
  return (
    <div className={styles.background}>
        <Wrapper>
          <div className={styles.control}>
          <h2>Yeni ödəniş üçün ödənişlər hissəsinə keçid edin.</h2>
          </div>
        </Wrapper>
    </div>
  )
}

export default AddNew