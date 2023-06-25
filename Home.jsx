import React from 'react'
import './Home.css'
import spotify from './spotify.png'

const Home = () => {
    return (
        <>
            <div className="container1">

                <img src={spotify} width={110} height={50} />

                <div className="premium">
                    <b>Premium</b>
                </div>
                <div className="help">
                    <b>Help</b>
                </div>
                <div className="download">
                    <b>Download</b>
                </div>
                <div className="slash">
                    <b>|</b>
                </div>
                <div className="sign">
                    <b>Sign up</b>
                </div>
                <div className="log">
                    <b><a href="/Register">Log In</a></b>
                </div>
            </div><div className="container2">
                <div className="music">
                    <b>Music for everyone.</b>
                </div>
                <div className="millions">
                    <b>Millions of songs. No credit card needed</b>
                </div>
                <div>
                    <button className='but'>GET SPOTIFY FREE</button>
                </div>
            </div>
        </>
    )
}

export default Home
