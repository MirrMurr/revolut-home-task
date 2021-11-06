import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { exchangeActions } from '../exchangeSlice'

const FXConverter = () => {
    const dispatch = useDispatch()
    const { rates } = useSelector((state: RootState) => state.fx)

    useEffect(() => {
        dispatch(exchangeActions.getRates())
    }, [dispatch])

    useEffect(() => {
        console.log(rates)
    }, [rates])

    return (
        <div>
            Rates
        </div>
    )
}

export default FXConverter
