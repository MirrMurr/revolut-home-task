import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { exchangeActions } from '../../exchangeSlice'
import FXConverter from '../FXConverter'

const LifeCycleProvider = () => {
    const dispatch = useDispatch()
    const { baseCurrency, rates } = useSelector((state: RootState) => state.fx)

    useEffect(() => {
        dispatch(exchangeActions.getRates(baseCurrency))

        // little imperfections from the eventloop does not matter here, because we cannot make that precise and frequent requests
        // there's no precise api for fx rates, so setInterval is applicable
        // (would not be the case with a timer or some sort of application that needs more precise clock management)
        const t = setInterval(() => {
            dispatch(exchangeActions.getRates(baseCurrency))
        }, 10000)

        return () => {
            clearInterval(t)
        }
    }, [dispatch, baseCurrency])

    return (
        <FXConverter rates={rates} />
    )
}

export default LifeCycleProvider;
