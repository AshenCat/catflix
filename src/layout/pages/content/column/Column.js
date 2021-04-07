import Card from './card/Card'
import React from 'react'
import { data } from './FakeContent'
import './column.scss'

function Column() {
    let shuffledData = data
        .map(a => ({sort: Math.random, value: a}))
        .sort((a,b)=> a.sort - b.sort)
        .map(a=>a.value)
    return (
        <div className="content-memes-column">
            {[...shuffledData].map((meme) => <Card key={meme.id} data={meme} />)}
        </div>
    )
}

export default Column
