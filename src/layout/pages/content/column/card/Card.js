import { Typography } from '@material-ui/core'
import React from 'react'
import './card.scss'

// {
//     id: 0,
//     title: "Good luck in court",
//     author: "memesxD",
//     src: "https://i.imgur.com/45A7x6i.mp4",
//     views: 43732,
//     upvotes: 1166,
//     downvotes: 13,
//     comments: [{}],
//     timestamp: "",
//     tags: [],
// }

export const GetLastArrayItem = (src) => {
    return src.split('.').slice(-1).pop();
}

export const IsImage = (type) => {
    return ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(type.toLowerCase())
}

function Card(props) {
    // console.log(props)
    const isImage = IsImage(GetLastArrayItem(props.data.src))
    console.log(isImage)
    return (
        <div className="card-container">
            <div className="card-src-container">
                {isImage ? <img src={props.data.src} alt={props.data.alt} className="card-src"/> : 
                <video controls src={props.data.src} className="card-src">
                </video>}
            </div>
            <div className="card-title">
                <Typography>{props.data.title}</Typography>
            </div>
        </div>
    )
}

export default Card;