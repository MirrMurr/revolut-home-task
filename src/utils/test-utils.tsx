import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'

import store from '../store'

const AllTheProviders: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </Provider>
    )
  }

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
