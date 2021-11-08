import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Button, Modal, Spin } from 'antd'

import { RootState } from '../../../store'
import ErrorDisplay from '../../../components/ErrorDisplay/ErrorDisplay'
import Currency from '../../../models/currency'
import { exchangeActions } from '../exchangeSlice'

import styles from "./FXConverter.module.scss"
import CurrencySelectorFormItem from './CurrencySelector/CurrencySelector'
import useFormRules from '../../../hooks/useFormRules'
import { ArrowDownOutlined, ArrowUpOutlined, HomeOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import Account from '../../../models/account'
import { Link } from 'react-router-dom'
import Disclaimer from '../../info/Disclaimer/Disclaimer'

export const currencyOptions = Object.keys(Currency).map(currency => ({ value: currency, label: currency }))

interface IFXConverterProps {
    rates: { [x: Currency | string]: number }
}

const FXConverter: React.FC<IFXConverterProps> = ({ rates }) => {
    const dispatch = useDispatch()
    const { accounts, baseCurrency, error, loading } = useSelector((state: RootState) => state.fx)

    const [baseAccount, setBaseAccount] = useState<Account>(accounts.find(acc => acc.currency === baseCurrency)!)
    const [baseAmount, setBaseAmount] = useState<number>(0)

    const [exchangeAccount, setExchangeAccount] = useState<Account>(accounts.find(acc => acc.currency === Currency.GBP)!)
    const [exchangeAmount, setExchangeAmount] = useState<number>(0)

    const [isSelling, setIsSelling] = useState<boolean>(true)

    const [feedbackModalVisible, setFeedbackModalVisible] = useState<boolean>(false)

    const [form] = Form.useForm()
    const { numberRequired, conditionalFormRule } = useFormRules()
    const initialValues = useMemo<any>(() => ({
        baseAmount: undefined,
        exchangeAmount: undefined,
    }), [])

    useEffect(() => {
        dispatch(exchangeActions.setBaseCurrency(baseAccount.currency))
    }, [dispatch, baseAccount])

    useEffect(() => {
        console.log('RATES', rates)
    }, [rates])

    useEffect(() => {
        // Refresh the balances when accounts change
        setBaseAccount(accounts.find(acc => acc.currency === baseAccount.currency)!)
        setExchangeAccount(accounts.find(acc => acc.currency === exchangeAccount.currency)!)
    }, [accounts, baseAccount.currency, exchangeAccount.currency])

    useEffect(() => {
        form.resetFields()
    }, [baseAccount, exchangeAccount, form])

    const handleBaseCurrencyChange = useCallback(value => {
        setBaseAccount(accounts.find(acc => acc.currency === value)!)
    }, [accounts])

    const handleBaseAmountChange = useCallback((e: any) => {
        setBaseAmount(e.target.value)
        form.validateFields()
    }, [form])

    const handleExchangeCurrencyChange = useCallback(value => {
        setExchangeAccount(accounts.find(acc => acc.currency === value)!)
    }, [accounts])

    const handleExchangeAmountChange = useCallback((e: any) => {
        setExchangeAmount(e.target.value)
        form.validateFields()
    }, [form])

    const handleSwap = useCallback(() => {
        setIsSelling(x => !x)
        form.validateFields()
    }, [form])

    const onValuesChanged = useCallback((changedValues, allValues) => {
        const { baseAmount: baseAmountInput, exchangeAmount: exchangeAmountInput } = changedValues
        let newValues = { ...allValues }

        if (baseAmountInput) {
            newValues.exchangeAmount = (parseFloat(baseAmountInput) * rates[exchangeAccount.currency]).toFixed(2)
        } else if (exchangeAmountInput) {
            newValues.baseAmount = (parseFloat(exchangeAmountInput) / rates[exchangeAccount.currency]).toFixed(2)
        } else {
            newValues = initialValues
        }

        form.setFieldsValue(newValues)
    }, [exchangeAccount, form, initialValues, rates])

    const handleFormFinish = useCallback((values: any) => {
        const { baseAmount, exchangeAmount } = values
        if (baseAmount && exchangeAmount) {
            setFeedbackModalVisible(true)
            setBaseAmount(baseAmount)
            setExchangeAmount(exchangeAmount)
            dispatch(exchangeActions.transaction(baseAccount, (isSelling ? -1 : 1) * baseAmount, exchangeAccount, (isSelling ? 1 : -1) * exchangeAmount))
        }
    }, [baseAccount, dispatch, exchangeAccount, isSelling])

    const balanceSufficiencyRequired = (balance: number, isSelling: boolean) => conditionalFormRule(
        (value: any) => {
            return !isSelling || (value || 0) <= balance
        },
        "exceeds balance"
    )

    const handleModalClose = useCallback(() => setFeedbackModalVisible(false), [])

    const successMessage = useMemo<string>(() => {
        const base = `${baseAccount.currency} ${baseAmount}`
        const exchange = `${exchangeAccount.currency} ${exchangeAmount}`
        return isSelling ? `${base} to ${exchange}` : `${exchange} to ${base}`
    }, [baseAccount.currency, baseAmount, exchangeAccount.currency, exchangeAmount, isSelling])

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col>
                {/* Navigation */}
                <Row justify="space-between">
                    <Col>
                        <Button type="link" icon={<HomeOutlined />}>
                            <Link to="/"> Home</Link>
                        </Button>
                    </Col>
                    <Col>
                        <Disclaimer />
                    </Col>
                </Row>

                {/* Converter widget */}
                <div className={styles.container}>

                    {/* Title */}
                    <h1 className={styles.title}>{`${isSelling ? 'Sell' : 'Buy'} ${baseAccount.currency}`}</h1>

                    {/* Error regarding exchanging */}
                    <ErrorDisplay message={error} />

                    {/* Rate indicator */}
                    <div className={styles.rateIndicator}>{`${baseAccount.currency} 1 = ${exchangeAccount.currency} ${rates[exchangeAccount.currency]}`}</div>

                    {/* Inputs, Form */}
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleFormFinish}
                        onValuesChange={onValuesChanged}
                        initialValues={initialValues}
                    >
                        <CurrencySelectorFormItem
                            name="baseAmount"
                            account={baseAccount}
                            amount={baseAmount}
                            onAmountChange={handleBaseAmountChange}
                            prefix={isSelling ? <MinusOutlined /> : <PlusOutlined />}
                            onCurrencyChange={handleBaseCurrencyChange}
                            rules={[numberRequired, balanceSufficiencyRequired(baseAccount.balance, isSelling)]}
                        />

                        <Row>
                            <Col>
                                <Button className={styles.swapButton} icon={isSelling ? <ArrowDownOutlined /> : <ArrowUpOutlined />} onClick={handleSwap} />
                            </Col>
                        </Row>

                        <CurrencySelectorFormItem
                            name="exchangeAmount"
                            account={exchangeAccount}
                            amount={exchangeAmount}
                            onAmountChange={handleExchangeAmountChange}
                            prefix={isSelling ? <PlusOutlined /> : <MinusOutlined />}
                            onCurrencyChange={handleExchangeCurrencyChange}
                            rules={[numberRequired, balanceSufficiencyRequired(exchangeAccount.balance, !isSelling)]}
                        />

                        <Button className={styles.submitButton} type="primary" htmlType="submit">
                            {`${isSelling ? 'Sell' : 'Buy'} ${baseAccount.currency} ${isSelling ? 'for' : 'with'} ${exchangeAccount.currency}`}
                        </Button>
                    </Form>

                    {/* Success feedback popup modal */}
                    <Modal
                        visible={feedbackModalVisible}
                        onCancel={handleModalClose}
                        footer={null}
                    >
                        {loading ? <Spin /> :
                        <>
                            <ErrorDisplay message={error} />
                            {!error &&
                                <div>
                                    <h1>You exchanged</h1>
                                    <p className={styles.blue}>{successMessage}</p>
                                </div>}
                        </>
                        }
                    </Modal>
                </div>
            </Col>
        </Row>
    )
}

export default FXConverter
