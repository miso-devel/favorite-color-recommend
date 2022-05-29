import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

test('App componentが表示されているか', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const aElement = screen.getByText('About')
    const pElement = screen.getByText('Color Recommender')
    expect(pElement).toBeInTheDocument()
})
