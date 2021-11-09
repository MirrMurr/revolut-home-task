import { render, screen } from './utils/test-utils'
import App from './App'

// data-testid="id"
// await  findByTestId('id')

beforeAll(() => {
    // ...
})

it('renders without crashing', async () => {
    render(<App />)
})

it('renders greeting home page first with link to exchanger', () => {
    render(<App />)
    const greetElement = screen.getByText(/Hello/i)
    const linkElement = screen.getByText(/Exchange/i)
    expect(greetElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
});