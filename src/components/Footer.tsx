import { Link } from 'react-router-dom'
import { memo } from 'react'
// eslint-disable-next-line react/display-name
export const Footer = memo(() => {
    return (
        <div className=" py-5 text-right">
            <div>
                <Link to="/" className=" font-bold text-xl px-5">
                    Home
                </Link>
                <Link to="/about" className=" font-bold text-xl px-5">
                    About
                </Link>
            </div>
        </div>
    )
})
