import React from 'react';
import { render, screen } from '../../../../utils/test-utils'
import Disclaimer from '../Disclaimer'

it('renders without crashing', () => {
    render(<Disclaimer />)
})

it('hides modal by default', () => {
    render(<Disclaimer />)
    const modal = screen.queryByTestId('disclaimer-modal')
    expect(modal).not.toBeInTheDocument()
    expect(screen.queryByTestId('disclaimer-modal')).toBeNull()
})

it('shows modal when button is clicked', () => {
    render(<Disclaimer />)
    const button = screen.getByTestId('disclaimer-button')
    button.click()
    const modal = screen.getByTestId('disclaimer-modal')
    expect(modal).toBeInTheDocument()
})