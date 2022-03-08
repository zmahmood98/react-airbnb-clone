import React from "react"
import './index.css'

export default function Card(props) {
    return (
        <div className="card-div">
            <img src={require(`../../images/${props.img}`)} className="card-image" />
            <div className="card-stats">
                <img src={require("../../images/star.png")} className="card-star" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
