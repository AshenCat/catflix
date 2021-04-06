// import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import './content.scss'

function Content() {


    // Generate coloumn depending on screen width
    const ColumnGenerator = () => {
        // const screenWidth = useMediaQuery()
        return (
            <div className="content-column">

            </div>)
    }

    return (
        <section className="content-container">
            <ColumnGenerator />
        </section>
    )
}

export default Content
