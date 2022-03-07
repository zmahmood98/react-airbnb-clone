import React from "react"
import './index.css'

export default function Card() {
    return (
        <div className="card-div">
            <img src={require("../../images/katie-zaferes.png")} className="card-image" />
            <div className="card-stats">
                <img src={require("../../images/star.png")} className="card-star"/>
                <span className="grey">5.0</span>
                <span className="grey">(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
