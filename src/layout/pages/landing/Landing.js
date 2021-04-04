import { Typography } from '@material-ui/core'
import React from 'react'
import catflix from '../../../assets/catflix.svg';
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
            <section>
                <div className="landing-scene-2">
                    <div className="landing-scene-2-img-container">
                        <img src={catflix} alt="fluff cuddle" className="landing-scene-2-img" />
                    </div>
                    <div className="landing-scene-2-text-container">
                        <Typography variant="h3">
                            Why Catflix?
                        </Typography>
                        <Typography>
                            Ever felt like the memes aren't fluff? We got you covered!
                        </Typography>
                    </div>
                </div>
            </section>
            <section>
                <div className="landing-scene-3">
                    <div className="landing-scene-3-cards-container">
                        <div className="landing-scene-3-top-cards-container">
                            <div className="landing-scene-3-card">
                                <div className="landing-scene-3-card-image">
                                </div>
                                <Typography variant="h5" align="center">
                                    Updated memes
                                </Typography>
                            </div>
                            <div className="landing-scene-3-card">
                                <div className="landing-scene-3-card-image">
                                </div>
                                <Typography variant="h5" align="center">
                                    Guaranteed fluff
                                </Typography>
                            </div>
                        </div>
                        <div className="landing-scene-3-bottom-cards-container">
                            <div className="landing-scene-3-card">
                                <div className="landing-scene-3-card-image">
                                </div>
                                <Typography variant="h5" align="center">
                                    Dank AF
                                </Typography>
                            </div>
                            <div className="landing-scene-3-card">
                                <div className="landing-scene-3-card-image">
                                </div>
                                <Typography variant="h5" align="center">
                                    11/10
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="landing-scene-4">
                    <Typography variant="h4" align="center" className="landing-scene-4-text"> So start using Catflix today!</Typography>
                </div>
            </section>
        </>
    )
}

export default Landing
