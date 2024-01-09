import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper'
const HistorysPages = () => {
  return (
    <div className={styles.background}>
        <Wrapper>
            <div className={styles.control}>
            <h2>Heç bir ödəniş tapılmadı.</h2>
            </div>
        </Wrapper>
    </div>
  )
}

export default HistorysPages