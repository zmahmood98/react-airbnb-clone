import React from "react"
import './index.css'

export default function Hero() {
    return (
        <section>
            <img src={require("../../images/photo-grid.png")} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
