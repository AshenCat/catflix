import { Typography } from '@material-ui/core'
import React from 'react'
import Content from '../content/Content'
// import catflix from '../../../assets/catflix.svg';
import "./landing.scss"

function Landing() {
    return (
        <>
            <section className="landing-container">
                <div className="landing-scene-1">
                    <Typography variant="h1" className="landing-scene-1-text">
                        Catflix
                    </Typography>
                    <span className="landing-scene-1-text">A place where you can meme</span>
                </div>
            </section>
            <section className="landing-content">
                <Typography variant="h5" align="center">Here's spicyyyy-est memes for you</Typography>
                <Content />
            </section>
        </>
    )
}

export default Landing
