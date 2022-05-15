import { ColorList } from './components/ColorList'
import { Result } from './components/Result'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { useAppSelector } from './redux/hooks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
    const count = useAppSelector((state) => state.counter.count)
    return (
        <div className=" bg-white">
            <BrowserRouter>
                <p className="font-extrabold lg:text-5xl text-3xl py-10">
                    Color Recommender
                </p>
                <Routes>
                    {count < 5 && <Route path="/" element={<ColorList />} />}
                    {count >= 5 && <Route path="/" element={<Result />} />}
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
