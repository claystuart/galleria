import React from 'react'
import Logo from "../src/assets/shared/logo.svg"

export default function Home() {
    return (
        <div className='container'>
            <header>
                <div className="header--top">
                    <img className='logo-header' src={Logo} alt="" />
                    <h2 className='start-slideshow'>Start slideshow</h2>
                </div>
            </header>
            <hr className='header--hr' />
            <PictureCard />
        </div>
    )
}

function PictureCard() {
    return (
        <h1>Card</h1>
    )
}
