// import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import Column from './column/Column';
import './content.scss'

function Content() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [perPage] = [5]
    
    const columns = React.useMemo(() => {
        return Math.floor(width / 280)
    },[width]);
    // const rerender = React.useRef(0)
    // 
    let doit;
    const updateSize = () => {
        clearTimeout(doit);
        doit = setTimeout(()=>{
            console.log('hmmmm')
            setWidth(window.innerWidth)
        },100)
    }
    // React.useEffect(()=>console.log(++rerender.current), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => (window.onresize = updateSize), []);
    // Generate coloumn depending on screen width
    const ColumnGenerator = () => {
        console.log("columns : ", columns)
        return (
            [...new Array(columns)].map((unuseable, index)=>
                {   
                    return <div key={index} className="content-column">
                        <Column page={index} perPage={perPage} />
                    </div>
                })
            )
    }

    return (
        <section className="content-container">
            <ColumnGenerator />
        </section>
    )
}

export default Content
