import React from 'react'
import styles from './BalanceIndicator.module.scss'

interface IBalanceIndicatorProps {
    balance?: number;
}

const BalanceIndicator: React.FC<IBalanceIndicatorProps> = ({ balance }) =>
    <div className={styles.lightText}>
        Balance: {balance}
    </div>

export default BalanceIndicator