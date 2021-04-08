import Card from './card/Card'
import React from 'react'
import { data } from './FakeContent'
import './column.scss'

function Column() {

    return (
        <div className="content-memes-column">
            {[...data].map((meme) => <Card key={meme.id} data={meme} />)}
        </div>
    )
}

export default Column
