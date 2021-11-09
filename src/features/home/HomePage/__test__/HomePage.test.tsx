import React from 'react';
import { render, screen, findByTestId } from '../../../../utils/test-utils'
import HomePage from '../HomePage'

it('renders without crashing', () => {
    render(<HomePage />)
})