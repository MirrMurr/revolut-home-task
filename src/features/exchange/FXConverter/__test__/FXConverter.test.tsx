import React from 'react';
import { render, screen } from '../../../../utils/test-utils'
import FXConverter from '../FXConverter'
import RATES_USD_MOCK from '../../../../mock/rates_usd_mock'

it('renders without crashing', () => {
    render(<FXConverter rates={RATES_USD_MOCK} />)
})