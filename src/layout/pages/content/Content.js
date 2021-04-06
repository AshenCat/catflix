// import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import Column from './column/Column';
import './content.scss'

function Content() {

    const [width, setWidth] = React.useState(window.innerWidth);
    const updateSize = () => {
        setWidth(window.innerWidth);
    }
    
    React.useEffect(() => (window.onresize = updateSize), []);
    // Generate coloumn depending on screen width
    const ColumnGenerator = () => {
        const columns = Math.floor(width / 280);
        console.log("columns : ", columns)
        return (
            [...new Array(columns > 0 ? columns : 1)].map((unuseable, index)=>
                <div key={index} className="content-column">
                    <Column />
                </div>)
            )
    }

    return (
        <section className="content-container">
            <ColumnGenerator />
        </section>
    )
}

export default Content
