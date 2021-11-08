import React from 'react'
import { Col, Form, Input, Row, Select } from 'antd'
import Account from '../../../../models/account'

import styles from './CurrencySelector.module.scss'
import { currencyOptions } from '../FXConverter'
import BalanceIndicator from '../BalanceIndicator/BalanceIndicator'

interface ICurrencySelectorFormItem {
   name: string;
   account: Account;
   amount: number;
   prefix: any
   onCurrencyChange: (e: any) => void;
   onAmountChange: (e: any) => void;
   rules?: any[]
}

const CurrencySelectorFormItem: React.FC<ICurrencySelectorFormItem> = ({ name, account, amount, onAmountChange, prefix, onCurrencyChange, rules }) => {
    return (
        <Row className={styles.currency} justify="space-between" align="top">
            <Col span={8}>
                <Form.Item className={styles.formItemSelect}>
                    <Select
                        value={account.currency}
                        options={currencyOptions}
                        onChange={onCurrencyChange}
                        className={styles.selector}
                    />
                </Form.Item>
                <BalanceIndicator balance={parseFloat(account.balance.toFixed(2))} />
            </Col>
            <Col span={14}>
                <Form.Item className={styles.formItemInput} name={name} required rules={rules}>
                    <Input className={styles.input} prefix={prefix} value={amount} onChange={onAmountChange} placeholder="0" />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default CurrencySelectorFormItem
