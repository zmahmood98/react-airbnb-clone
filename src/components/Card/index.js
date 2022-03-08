import React from "react"
import './index.css'

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card-div">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../../images/${props.img}`)} className="card-image" />
            <div className="card-stats">
                <img src={require("../../images/star.png")} className="card-star" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold card-price">From ${props.price}</span> / person</p>
        </div>
    )
}
